import skillsJson from "@/data/skills.json";

const skills = skillsJson.data;

export default function SkillList() {
  return (
    <div className="flex flex-col items-start space-y-2 break-inside-avoid">
      <h1 className="text-2xl text-neutral-900 w-full border-neutral-900 border-b-2">
        Skills
      </h1>
      <div className="text-base text-neutral-800 w-full">
        {skills.map((categorySkills, index) => (
          <div key={index} className="ml-5">
            <h2 className="text-xl text-neutral-900">
              {categorySkills.category}
            </h2>
            <div className="ml-5">
              {categorySkills.items.map((item, index) =>
                item.star ? (
                  <span key={index}>
                    &#x2b50;{item.name}
                    {index < categorySkills.items.length - 1 ? ", " : ""}
                  </span>
                ) : (
                  <span key={index}>
                    {item.name}
                    {index < categorySkills.items.length - 1 ? ", " : ""}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
