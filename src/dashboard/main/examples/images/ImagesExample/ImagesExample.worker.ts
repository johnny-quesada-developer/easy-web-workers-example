import { StaticEasyWebWorker } from "easy-web-worker";
import { ImageExamplePayload } from "./ImagesExample.types";

import cv from "opencv-ts";

const worker = new StaticEasyWebWorker();

const callbacks: (() => void)[] = [];
let isCVReady = false;

cv.onRuntimeInitialized = () => {
  isCVReady = true;

  callbacks.forEach((callback) => callback());
};

const invertImageColors = async ({
  scalePercentage,
  file,
}: ImageExamplePayload): Promise<File> => {
  const imgBitmap = await createImageBitmap(file);

  let offscreenCanvas = new OffscreenCanvas(imgBitmap.width, imgBitmap.height);

  let context = offscreenCanvas.getContext(
    "2d"
  ) as OffscreenCanvasRenderingContext2D;

  context.drawImage(imgBitmap, 0, 0);

  let imageData = context.getImageData(0, 0, imgBitmap.width, imgBitmap.height);

  const source = cv.matFromImageData(imageData);

  const zeroBasedScalePercentage = scalePercentage / 100;
  const newWidth = Math.floor(source.cols * zeroBasedScalePercentage);
  const newHeight = Math.floor(source.rows * zeroBasedScalePercentage);

  const newSource = new cv.Mat(newHeight, newWidth, source.type());

  cv.resize(
    source,
    newSource,
    new cv.Size(newWidth, newHeight),
    0,
    0,
    cv.INTER_LINEAR
  );

  const invertedImageData = new ImageData(
    new Uint8ClampedArray(newSource.data),
    newWidth,
    newHeight
  );

  offscreenCanvas = new OffscreenCanvas(newWidth, newHeight);

  context = offscreenCanvas.getContext(
    "2d"
  ) as OffscreenCanvasRenderingContext2D;

  context.putImageData(invertedImageData, 0, 0);

  return new Promise((resolve) => {
    (offscreenCanvas as any).convertToBlob().then((blob: Blob) => {
      const newFile = new File([blob], file.name, {
        type: file.type,
      });

      source.delete();
      newSource.delete();

      resolve(newFile);
    });
  });
};

worker.onMessage<ImageExamplePayload, File>("process", (message) => {
  const invertColors = async () => {
    const negativeVersion = await invertImageColors(message.payload);

    message.resolve(negativeVersion);
  };

  if (!isCVReady) {
    callbacks.push(invertColors);

    return;
  }

  invertColors();
});
