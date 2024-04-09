import experiencesJson from "@/data/experiences.json";
import Link from "next/link";

const experiences = experiencesJson.data.toReversed();

export default function ExperienceList() {
  return (
    <div className="flex flex-col items-start space-y-2 break-inside-avoid">
      <h1 className="text-2xl text-neutral-900 w-full border-neutral-900 border-b-2">
        Work Experiences
      </h1>
      <div className="text-base text-neutral-800 w-full ml-5">
        <ul className="space-y-1">
          {experiences.map((item, index) => (
            <li key={index}>
              <div className="flex flex-row">
                <h3 className="font-semibold basis-3/4">{item.title}</h3>
                <p className="text-left basis-1/4">{item.dates}</p>
              </div>
              <div className="flex flex-col ml-5 mr-10">
                <p className="font-normal">
                  {item.company}, {item.location}
                </p>
                <p className="size-3/4">
                  {item.descriptions.length > 0 && (
                    <ul className="list-disc ml-5">
                      {item.descriptions.map((description, index) => (
                        <li key={index} className="text-wrap">
                          {parseMarkdownLinks(description)}
                        </li>
                      ))}
                    </ul>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function parseMarkdownLinks(text: string) {
  const regex = /\[([^\]]+)\]\(('([^']+)')\)/g;
  const parts = text.split(regex);

  return parts
    .map((part, index) => {
      // URLs will be at positions that are multiples of 4, starting at 3
      if ((index - 3) % 4 === 0) {
        const url = part.replace(/'/g, ""); // Remove single quotes from the URL
        const title = parts[index - 2]; // The title is two positions before the URL
        return (
          <Link key={index} href={url} className="hover:underline">
            {title}
          </Link>
        );
      }
      // Return the text part directly if it's not a URL
      if (index % 4 === 0) {
        return part;
      }
    })
    .filter(Boolean); // Filter out undefined parts
}
