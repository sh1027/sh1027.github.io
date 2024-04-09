import experiencesJson from "@/data/experiences.json";

const experiences = experiencesJson.data.toReversed();

export default function ExperienceList() {
  return (
    <div className="flex flex-col items-start mx-10 space-y-2">
      <h1 className="text-xl text-neutral-900">Work Experiences</h1>
      <ul className="text-sm text-neutral-800 font-light ml-3 w-full max-w-screen-lg space-y-1">
        {experiences.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col md:flex-row">
              <h3 className="font-normal md:basis-3/4">
                {item.title}, {item.company}
              </h3>
              <p className="text-left ml-5 text-wrap">{item.dates}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
