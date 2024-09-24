import useBoundStore from "@/store/store";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface Props {
  pageTitle: string;
  children: JSX.Element;
}

export const ProjectLayout = ({ pageTitle, children }: Props) => {
  const projectName = useBoundStore((state) => state.projectName);
  const breadcrumbs: string[] = ["Projects", projectName, pageTitle];

  return (
    <div className="flex flex-col w-full h-full py-8 pl-8 pr-6">
      <nav aria-label="Breadcrumbs">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </nav>
      <header className="mt-3 mb-6">
        <h1 className="text-2xl font-medium">{pageTitle}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
