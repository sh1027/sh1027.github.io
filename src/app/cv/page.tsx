import CertificationList from "@/components/cv/CertificationList";
import EducationeList from "@/components/cv/EducationList";
import ExperienceList from "@/components/cv/ExperienceList";
import GrantList from "@/components/cv/GrantList";
import Header from "@/components/cv/Header";
import NavCV from "@/components/cv/NavCV";
import Profile from "@/components/cv/Profile";
import PublicationList from "@/components/cv/PublicationList";
import SkillList from "@/components/cv/SkillList";
import { noto_serif, noto_serif_jp } from "@/components/fonts";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral-100 w-full min-h-screen">
      <NavCV />
      <div className={`${noto_serif.className} ${noto_serif_jp.className}`}>
        <div className="max-w-screen-lg container mx-auto flex flex-col py-10 space-y-5 print:py-0">
          {Header()}
          {Profile()}
          {EducationeList()}
          {ExperienceList()}
          {GrantList()}
          {PublicationList()}
          {CertificationList()}
          {SkillList()}
        </div>
      </div>
    </main>
  );
}
