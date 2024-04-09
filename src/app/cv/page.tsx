import Nav from "@/components/Nav";
import CertificationList from "@/components/cv/CertificationList";
import EducationeList from "@/components/cv/EducationList";
import ExperienceList from "@/components/cv/ExperienceList";
import GrantList from "@/components/cv/GrantList";
import Header from "@/components/cv/Header";
import Profile from "@/components/cv/Profile";
import PublicationList from "@/components/cv/PublicationList";
import SkillList from "@/components/cv/SkillList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-100">
      <div className="bg-neutral-200 print:hidden">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <p className="text-base text-neutral-900">
            This page is designed to be printed. Please use the print button
            below to print the page.
          </p>
          <div className="flex justify-center py-5 space-x-3">
            <Link
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold font-sans py-2 px-4 rounded"
              href="javascript:window.print()"
            >
              <span className="mr-2">🖨️</span>Print
            </Link>
            <Link
              className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold font-sans py-2 px-4 rounded"
              href="/"
            >
              <span className="mr-2">🏠</span>Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg container mx-auto flex flex-col py-10 space-y-5 font-serif print:py-0">
        {Header()}
        {Profile()}
        {EducationeList()}
        {ExperienceList()}
        {PublicationList()}
        {GrantList()}
        {CertificationList()}
        {SkillList()}
      </div>
    </main>
  );
}
