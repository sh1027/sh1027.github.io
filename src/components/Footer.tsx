"use client";
import profileJson from "@/data/profile.json";

const ccYear = 2024;

export default function Nav() {
  const profileData = profileJson.data;
  const today = new Date();
  return (
    <footer className="bottom-0 z-10 w-full p-4 flex flex-col justify-between bg-neutral-100">
      <span className="mx-auto text-sm text-center text-neutral-600">
        © {ccYear} {profileData.name}
      </span>
      <span className="mx-auto text-sm text-center text-neutral-600">
        Last updated: {today.toDateString()}
      </span>
    </footer>
  );
}
