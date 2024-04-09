import profileJson from "@/data/profile.json";
import Image from "next/image";
import Link from "next/link";
import {
  SiGithub,
  SiGmail,
  SiGooglescholar,
  SiLinkedin,
  SiOrcid,
} from "react-icons/si";

export default function Profile() {
  const profileData = profileJson.data;

  return (
    <div className="flex flex-col md:items-start mx-10 space-y-5">
      <div className="flex flex-col md:flex-row items-center md:space-x-5">
        <div className="flex-initial mb-5 md:mb-0">
          <Image
            className="mx-auto rounded-full"
            src={profileData.imgPath}
            alt="Profile Image"
            width={128}
            height={128}
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-xl text-neutral-900 mb-3">{profileData.name}</h1>
          <h2 className="text-base text-neutral-600 font-light">
            {profileData.title}
          </h2>
          <h3 className="text-sm text-neutral-600 font-light">
            {profileData.subtitle}
          </h3>
          <div className="flex justify-between gap-3 text-neutral-800 mt-3">
            {SocialLinks(profileData.socials)}
          </div>
        </div>
      </div>
      <div className="text-sm text-neutral-800">
        <p>{parseMarkdownLinks(profileData.description)}</p>
      </div>
    </div>
  );
}

function SocialLinks(socials: any[]) {
  const SocialIconDict: { [key: string]: JSX.Element } = {
    email: <SiGmail />,
    github: <SiGithub />,
    googlescholar: <SiGooglescholar />,
    linkedin: <SiLinkedin />,
    orcid: <SiOrcid />,
  };

  return (
    <>
      {socials.length > 0 &&
        socials.map((link) => (
          <Link key={link.title} href={link.url}>
            {SocialIconDict[link.title]}
          </Link>
        ))}
    </>
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
          <Link key={index} href={url} className="underline hover:no-underline">
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
