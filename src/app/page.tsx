import Nav from "@/components/Nav";

import CollaboratorList from "@/components/home/CollaboratorList";
import EducationeList from "@/components/home/EducationList";
import ExperienceList from "@/components/home/ExperienceList";
import GrantList from "@/components/home/GrantList";
import Profile from "@/components/home/Profile";
import PublicationList from "@/components/home/PublicationList";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-100">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col py-10 space-y-8">
        {/* Profile */}
        {await Profile()}
        {/* Education */}
        {await EducationeList()}
        {/* Work Experiences */}
        {await ExperienceList()}
        {/* Publications */}
        {await PublicationList()}
        {/* Grants */}
        {await GrantList()}
        {/* Cooperative Research */}
        {await CollaboratorList()}
      </div>
    </main>
  );
}
