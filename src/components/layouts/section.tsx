type SectionProps = {
  title: string;
  subtitle: string;
  id?: string;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({ id, children, subtitle, title }) => {
  return (
    <div className="custom-container py-10 md:py-20" id={id}>
      <div className="text-center">
        <h1 className="display-sm-bold md:display-lg-bold text-neutral-25">{title}</h1>
        <p className="text-sm-regular md:text-md-regular mt-4 text-neutral-400">{subtitle}</p>
      </div>

      <div className="mt-6 md:mt-16">{children}</div>
    </div>
  );
};
