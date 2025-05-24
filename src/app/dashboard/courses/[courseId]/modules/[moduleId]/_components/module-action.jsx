"use client";

import { Trash } from "lucide-react";

import { useState } from "react";
import { Button } from "../../../../../../../components/ui/button";

import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { changeModulePublishState, deleteModule } from "../../../../../../actions/module";

export const ModuleActions = ({ moduleData, courseId }) => {
  const [action, setAction] = useState(null);
  const [published, setPublished] = useState(moduleData?.active);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      switch (action) {
        case "change-active": {
          const activeState = await changeModulePublishState(moduleData.id);
          setPublished(!activeState);
          toast.success("The module has been updated successfully.");
          router.refresh();
          break;
        }

        case "delete": {
          if (published) {
            toast.error("A published module can not be deleted. First unpublish it, then delete.");
          } else {
            await deleteModule(moduleData.id, courseId);
            // router.refresh();
            router.push(`/dashboard/courses/${courseId}`);
          }
          break;
        }

        default: {
          throw new Error("Invalid Module Action");
        }
      }
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-x-2">
        <Button variant="outline" size="sm" onClick={() => setAction("change-active")}>
          {published ? "Unpublish" : "Publish"}
        </Button>

        <Button size="sm" onClick={() => setAction("delete")}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};
