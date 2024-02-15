interface Props {
  breadcrumbs: string[];
}

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <div className="text-textMedium text-15">
      {breadcrumbs.map((breadcrumb, i) => (
        <span>
          <span className="relative mx-2 text-lg">{i !== 0 && "/"}</span>
          {breadcrumb}
        </span>
      ))}
    </div>
  );
};
