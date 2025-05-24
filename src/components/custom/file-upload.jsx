"use client";

import { CloudUpload } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

import { cn } from "../../lib/utils";
import { Progress } from "../ui/progress";

export const UploadDropzone = (props) => {
  const { isMulti = false, label, onUpload } = props;

  const [droppedFiles, setDroppedFiles] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      setIsUploading(true);

      // Simulated progress
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 95) {
            clearInterval(interval);
            return prev;
          }
          return prev + 5;
        });
      }, 500);

      setDroppedFiles(acceptedFiles);

      // Simulate immediate completion
      setTimeout(() => {
        clearInterval(interval);
        setUploadProgress(100);
        onUpload(acceptedFiles);
      }, 1500);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    multiple: isMulti,
  });

  useEffect(() => {
    if (fileRejections.length > 1) {
      toast.error("Too many files rejected.");
    } else if (fileRejections.length > 0) {
      toast.error("Invalid file format or size.");
    }
  }, [fileRejections]);

  return (
    <div
      {...getRootProps()}
      className={cn(
        "mt-3 flex cursor-pointer items-center justify-center rounded-md border border-dashed p-3 py-12 hover:bg-muted/30",
        isUploading && "pointer-events-none !cursor-not-allowed opacity-80"
      )}
    >
      <input multiple={isMulti} {...getInputProps()} disabled={isUploading} />
      <div className="flex flex-col items-center gap-3 text-center text-[#858585]">
        <CloudUpload size={48} className="text-gray-600" />
        <h4 className="font-normal text-[#858585]">
          <span className="font-semibold text-black underline">Click to upload</span> or drag and drop <br />
          Maximum file size 50 MB.
        </h4>
        {isUploading && (
          <div className="mx-auto mt-4 w-full max-w-xs">
            <Progress value={uploadProgress} className="h-1 w-full bg-zinc-200" />
          </div>
        )}
      </div>
    </div>
  );
};
