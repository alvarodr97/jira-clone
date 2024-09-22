import { ProjectLayout } from "@/components/layouts/ProjectLayout";
import { FormSettings } from "@/features/settings/components/FormSettings";

export const SettingsRoute = () => {
  return (
    <ProjectLayout pageTitle="Settings">
      <FormSettings />
    </ProjectLayout>
  );
};
