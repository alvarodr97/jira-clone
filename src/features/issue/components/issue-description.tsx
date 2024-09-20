import { useEffect, useRef, useState } from "react";
import useBoundStore from "@/store/store";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";
import { quillConfiguration } from "@/config/editor";
import { Button } from "../../../components/ui/button";

import "react-quill/dist/quill.snow.css";

export const IssueDescription = ({
  id,
  issueDescription,
}: {
  id: string;
  issueDescription: string;
}) => {
  const [description, setDescription] = useState(issueDescription);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const quillRef = useRef<ReactQuill>(null);
  const updateIssue = useBoundStore((state) => state.updateIssue);

  const handleSave = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    updateIssue(id, { description: description });
    setIsLoading(false);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDescription(issueDescription);
    setIsEditing(false);
  };

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.focus();
    }
  }, [isEditing]);

  return (
    <div>
      {isEditing ? (
        <div>
          <ReactQuill
            className="content-editor"
            value={description}
            onChange={setDescription}
            placeholder={""}
            modules={quillConfiguration}
            ref={quillRef}
          />

          {/* Keypad edition */}
          <div className="pt-3 flex items-center gap-x-4">
            <Button variant="form" onClick={handleSave} disabled={isLoading}>
              {isLoading ? "Saving..." : "Save"}
            </Button>
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="ql-snow content-readonly cursor-pointer hover:bg-gray-300/40"
          onClick={() => setIsEditing(true)}
        >
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{
              __html:
                DOMPurify.sanitize(description) || "Click to add description",
            }}
          />
        </div>
      )}
    </div>
  );
};
