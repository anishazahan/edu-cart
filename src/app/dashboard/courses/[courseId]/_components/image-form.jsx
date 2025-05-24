"use client";

import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";
import { UploadDropzone } from "../../../../../components/custom/file-upload";
import { Button } from "../../../../../components/ui/button";

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

export const ImageForm = ({ initialData, courseId }) => {
  const [file, setFile] = useState(null);
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(true);
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "");

  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = async (values) => {
    try {
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-gray-50 rounded-md p-4 cursor-not-allowed">
      <div className="font-medium flex items-center justify-between pointer-events-none">
        Course Image
        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing && <>Cancel</>}
          {!isEditing && !imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an image
            </>
          )}
          {!isEditing && imageUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit image
            </>
          )}
        </Button>
      </div>

      {!isEditing ? (
        !imageUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image alt="Upload" fill className="object-cover rounded-md" src={imageUrl} />
          </div>
        )
      ) : (
        <div className="pointer-events-none">
          <div className="cursor-not-allowed">
            <UploadDropzone onUpload={(file) => setFile(file)} />
          </div>
          <div className="text-xs text-muted-foreground mt-4">16:9 aspect ratio recommended</div>
        </div>
      )}
    </div>
  );
};
