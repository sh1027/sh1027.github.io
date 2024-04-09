import profileJson from "@/data/profile.json";
import Link from "next/link";

const profileData = profileJson.data;

export default function Header() {
  const emailAddr = profileData.email.split("@");

  return (
    <div className="flex flex-col mx-auto space-y-5">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-3xl font-bold text-neutral-900">
          {profileData.name}
        </h1>
        <ul className="text-neutral-600 text-center">
          <li>
            Email: {emailAddr[0]}
            <span className="hidden">LaLaLa~</span>
            <span className="print:hidden">{"[at]"}</span>
            <span className="hidden print:inline">{"@"}</span>
            <span className="hidden">HaHaHa~</span>
            {emailAddr[1]}
          </li>
          <li>
            Homepage:{" "}
            <Link href={profileData.homePage} className="hover:underline">
              {profileData.homePage}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
