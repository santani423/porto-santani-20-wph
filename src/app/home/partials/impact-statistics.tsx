import Image from 'next/image';

const ImpactStatistics = () => {
  return (
    <div className="custom-container flex flex-wrap gap-6 md:gap-12 py-5 md:py-20 items-center">
      {/* Image Div */}
      <Image
        width={442}
        height={432}
        alt="impact image"
        src="/images/impact-image.jpg"
        className="flex-[2.3] basis-80"
      />

      {/* statistics */}

      <div className="flex-[7.7] basis-80">
        <h2 className="display-sm-bold md:display-lg-bold text-neutral-25">
          Proven Results, Measurable Impact
        </h2>
        <p className="text-sm-regular md:text-md-regular mt-4 text-neutral-400">
          We are a team of tech enthusiasts dedicated to building innovative and scalable IT
          solutions. From software development to cloud integration, we help businesses thrive in
          the digital era.
        </p>
        <Statistics />
      </div>
    </div>
  );
};

export default ImpactStatistics;

type Statistics = {
  data: string;
  info: string;
};

const statistics: Statistics[] = [
  {
    data: '50+',
    info: 'Happy Customer',
  },
  {
    data: '100+',
    info: 'Project Delivered',
  },
  {
    data: '98%',
    info: 'Customer Satisfaction',
  },
];

const Statistics = () => {
  return (
    <div className="md:mt-12 flex-1 text-center mt-6 flex flex-col divide-neutral-900 max-md:divide-y md:flex-row  md:divide-x">
      {statistics.map((statistics) => (
        <div
          key={statistics.data}
          className="w-45 flex-1 text-center max-md:w-full max-md:py-5 max-md:first:pt-0 max-md:last:pb-0 md:px-8 md:first::pl-0  md:first::pr-0"
        >
          <p className="display-md-bold md:display-lg-bold text-neutral-25">{statistics.data}</p>
          <p className="text-sm-regular md:text-md-regular mt-1.5 text-neutral-400">
            {statistics.info}
          </p>
        </div>
      ))}
    </div>
  );
};
