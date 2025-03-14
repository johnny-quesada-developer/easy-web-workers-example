import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { EasyWebWorker } from "easy-web-worker";
import { ImageExamplePayload } from "./ImagesExample.types";
import { Button, CodeFragment, write } from "@shared";
import merge from "easy-css-merge";

// with vite we create the worker in different ways depending on if we are in production or development
import workerUrl from "./ImagesExample.worker?worker&url";

const isProduction = import.meta.env.MODE === "production";

const worker = new EasyWebWorker(
  isProduction
    ? workerUrl
    : new URL("./ImagesExample.worker.ts", import.meta.url),
  {
    workerOptions: {
      type: "module",
    },
  }
);

export const ImagesExample: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const [sourceImage, setSourceImage] = useState<File>(null);
  const [result, setResult] = useState<File>(null);

  const [scalePercentage, setScalePercentage] = useState(25);
  const [isResizing, setIsResizing] = useState(false);

  const scaleImage = async (file: File) => {
    if (isResizing) return;

    setIsResizing(true);

    const scaledFile = await worker.sendToMethod<File, ImageExamplePayload>(
      "resize",
      {
        file,
        scalePercentage,
      }
    );

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
    <div className={merge(className)} {...props}>
      <h3 className="font-bold text-gray-500 border-b border-gray-200 pb-2">
        Lets play with images and{" "}
        <strong className="text-black">EasyWebWorker</strong>
      </h3>

      <div className="text-gray-600 text-justify pt-3">
        Please add the image you want to resize:
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
              className="block text-gray-600 border-b border-gray-200 pb-2 text-sm font-semibold"
              htmlFor="scalePercentage"
            >
              Scale Percentage
            </label>

            <div className="flex items-center gap-2 border border-gray-300 p-1 my-3 pl-2">
              <input
                id="scalePercentage"
                className="rounded-sm h-8 w-36  "
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

              <Button
                className="bg-gray-700 text-white px-4 py-1 rounded-sm"
                onClick={() => {
                  setScalePercentage((prev) => {
                    const value = prev + 1;

                    if (value > 150) return prev;

                    return value;
                  });
                }}
              >
                +
              </Button>

              <Button
                className="bg-gray-700 text-white px-4 py-1 rounded-sm"
                onClick={() => {
                  setScalePercentage((prev) => {
                    const value = prev - 1;

                    if (value < 1) return prev;

                    return value;
                  });
                }}
              >
                -
              </Button>

              {isResizing && (
                <span className="text-gray-500 text-sm">Resizing...</span>
              )}
            </div>

            <div className="relative border border-gray-300 p-1">
              <input
                type="file"
                className="absolute w-0 h-0 opacity-0"
                id="fileUpload"
                name="fileUpload"
                onChange={loadSourceImage}
              />

              <label
                htmlFor="fileUpload"
                className="cursor-pointer inline-block bg-gray-700 text-white py-1 px-4 rounded hover:bg-rose-500 transition-all duration-300"
              >
                {result ? "Change Image" : "Upload Image"}
              </label>

              <span className="ml-6 text-gray-500">
                {result ? result.name : ""}
              </span>
            </div>

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
                className="bg-gray-700 text-white px-4 py-1 rounded-sm mt-3"
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

          <div className="mt-3 p-6 border-2 border-dashed bg-indigo-25 border-gray-300 flex justify-center">
            <img ref={imageRef} id="imageResult" className="" />
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-justify pt-3">
        For resizing the image we are using an static EasyWebWorker instance,
        let's see the code:
      </p>

      <CodeFragment>
        {write("// Notice that all the heavy computation is done in the worker")
          .newLine(
            0,
            "const scaledFile = await easyWebWorker.sendToMethod<File, ImageExamplePayload>('resize', {"
          )
          .newLine(4, "file,")
          .newLine(4, "scalePercentage,")
          .newLine(0, "});")
          .newLine(0, "")
          .newLine(0, "const reader = new FileReader();")
          .newLine(0, "")
          .newLine(0, "reader.onload = function (event) {")
          .newLine(4, "imageRef.current.src = event.target.result;")
          .newLine(0, "};")
          .newLine(0, "")
          .newLine(0, "reader.readAsDataURL(scaledFile);")
          .concat()}
      </CodeFragment>
    </div>
  );
};
