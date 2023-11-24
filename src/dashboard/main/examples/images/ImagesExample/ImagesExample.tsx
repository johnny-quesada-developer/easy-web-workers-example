import "./ImagesExample.scss";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { EasyWebWorker } from "easy-web-worker";
import { ImageExamplePayload } from "./ImagesExample.types";
import workerScript from "./ImagesExample.worker?worker&url";
import { Button } from "../../../../_shared/components/Button";

// with vite we create the worker in different ways depending on if we are in production or development
const easyWebWorker = (() => {
  const mode = import.meta.env.MODE;

  if (mode === "production") {
    return new EasyWebWorker(workerScript);
  }

  const workerUrl = new URL("./ImagesExample.worker.ts", import.meta.url);
  const worker = new Worker(workerUrl, {
    type: "module",
  });

  return new EasyWebWorker(worker, {
    url: workerUrl.href,
  });
})();

export const ImagesExample = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const [sourceImage, setSourceImage] = useState<File>(null);
  const [result, setResult] = useState<File>(null);

  const [scalePercentage, setScalePercentage] = useState(25);
  const [isResizing, setIsResizing] = useState(false);

  const scaleImage = async (file: File) => {
    if (isResizing) return;

    setIsResizing(true);

    const scaledFile = await easyWebWorker.sendToMethod<
      File,
      ImageExamplePayload
    >("process", {
      file,
      scalePercentage,
    });

    const reader = new FileReader();

    reader.onload = function (event) {
      const base64String = event.target.result;

      imageRef.current.src = base64String as string;

      imageRef.current.onload = () => {
        URL.revokeObjectURL(imageRef.current.src);
      };

      setResult(file);
      setIsResizing(false);
    };

    reader.readAsDataURL(scaledFile);
  };

  const loadSourceImage: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSourceImage(null);

    if (!event.target.files?.length) {
      imageRef.current.src = "";
    }

    const file = event.target.files[0];

    // avoid images bigger than 100 mb
    if (file.size > 100 * 1024 * 1024) {
      alert("Image size is too big, please select an image smaller than 100mb");

      return;
    }

    setSourceImage(file);

    const reader = new FileReader();

    reader.onload = function (e) {
      imageRef.current.src = e.target.result as string;
    };

    reader.readAsDataURL(file);
    scaleImage(file);
  };

  useEffect(() => {
    if (isNaN(scalePercentage) || !sourceImage) return;

    scaleImage(sourceImage);
  }, [scalePercentage]);

  return (
    <>
      <h3 className="font-bold text-gray-500 border-b border-gray-200 pb-2">
        Lets play with images and{" "}
        <strong className="text-black">EasyWebWorker</strong>
      </h3>

      <div className="text-gray-700 text-justify pt-3">
        Please add the image you want to process:
      </div>

      <div className="text-diff-example-inputs-grid mt-3 grid grid-cols-1 gap-3">
        <div
          className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-3"
          style={{
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "auto",
          }}
        >
          <div>
            <label
              className="block text-gray-700 border-b border-gray-200 pb-2 text-sm font-semibold"
              htmlFor="scalePercentage"
            >
              Scale Percentage
            </label>

            <div className="flex items-center gap-2">
              <input
                className="border-gray-200 rounded-sm p-2 h-8 my-3 w-24"
                type="number"
                name="scalePercentage"
                value={scalePercentage}
                min={1}
                max={150}
                onChange={(event) => {
                  const value = parseInt(event.target.value);

                  if (isNaN(value)) return;
                  if (value < 1) return;
                  if (value > 150) return;

                  setScalePercentage(value);
                }}
              />

              {isResizing && (
                <span className="text-gray-500 text-sm">Resizing...</span>
              )}
            </div>

            <input
              className="block border border-gray-200 rounded-sm p-2 my-3"
              type="file"
              name="input1"
              id="input1"
              accept="image/*"
              onChange={loadSourceImage}
            />

            <p className="flex flex-col gap-1 text-sm text-gray-500 mt-3">
              <span>
                <strong className="text-sm">Type:</strong> {result?.type}
              </span>
              <span>
                <strong className="text-sm">Dimensions:</strong>
              </span>
              <span>Height: {imageRef.current?.height}</span>
              <span>Width: {imageRef.current?.width}</span>
            </p>

            {!!result && (
              <Button
                className="bg-blue-400 text-white px-4 py-1 rounded-sm mt-3"
                onClick={() => {
                  const a = document.createElement("a");

                  a.href = imageRef.current.src;
                  a.download = result.name;
                  a.click();

                  a.remove();
                }}
              >
                Download
              </Button>
            )}
          </div>

          <img ref={imageRef} id="imageResult" className="mt-3 border" />
        </div>
      </div>
    </>
  );
};
