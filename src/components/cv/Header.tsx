import profileJson from "@/data/profile.json";
import Link from "next/link";

const profileData = profileJson.data;

export default function Header() {
  const email = profileData.socials.filter(
    (social) => social.title === "email"
  )[0].url;
  const homepage = profileData.homePage;

  return (
    <div className="flex flex-col mx-auto space-y-5">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-3xl font-bold text-neutral-900">
          {profileData.name}
        </h1>
        <ul className="text-neutral-600 text-center">
          <li>
            Email:{" "}
            <Link href={email} className="hover:underline">
              {email.replace("mailto:", "")}
            </Link>
          </li>
          <li>
            Homepage:{" "}
            <Link href={homepage} className="hover:underline">
              {homepage}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
