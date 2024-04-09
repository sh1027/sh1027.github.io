import educationJson from "@/data/education.json";

const education = educationJson.data.toReversed();

export default function EducationeList() {
  return (
    <div className="flex flex-col items-start mx-10 space-y-2">
      <h1 className="text-xl text-neutral-900">Education</h1>
      <ul className="text-sm text-neutral-800 font-light ml-3 w-full max-w-screen-lg space-y-1">
        {education.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col md:flex-row">
              <h3 className="font-normal md:basis-3/4">
                {item.title}, {item.school}, {item.location}
              </h3>
              <p className="text-left">{item.dates}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
