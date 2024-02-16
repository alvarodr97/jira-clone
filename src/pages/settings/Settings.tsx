import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FormSettings } from "./components/FormSettings";

const breadcrumbs: string[] = ["Projects", "React Jira Clone", "Settings"];

export const Settings = () => {
  return (
    <div className="flex flex-col w-full h-full py-8 pl-8 pr-6">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <header className="flex justify-between mt-3 mb-6 text-2xl font-medium">
        Settings
      </header>
      <div>
        <FormSettings />
      </div>
    </div>
  );
};
