import { ProjectLayout } from "@/components/layouts/project-layout";
import { FormSettings } from "@/features/settings/components/form-settings";

export const SettingsRoute = () => {
  return (
    <ProjectLayout pageTitle="Settings">
      <FormSettings />
    </ProjectLayout>
  );
};
