import useBoundStore from "@/store/store";

export const SidebarTitle = () => {
  const projectName = useBoundStore((state) => state.projectName);
  const category = useBoundStore((state) => state.category);

  return (
    <div>
      <p className="font-medium text-textDark text-15">{projectName}</p>
      <span className="text-textMedium text-13">{category} Project</span>
    </div>
  );
};
