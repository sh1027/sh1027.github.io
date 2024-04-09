import profileJson from "@/data/profile.json";
import Link from "next/link";

const profileData = profileJson.data;

export default function Profile() {
  return (
    <div className="flex flex-col items-start space-y-2 break-inside-avoid">
      <h1 className="text-2xl text-neutral-900 w-full border-neutral-900 border-b-2">
        Profile
      </h1>
      <div className="text-base text-neutral-800 ml-5">
        <p>{parseMarkdownLinks(profileData.description)}</p>
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
