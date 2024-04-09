import { readJsonDataAsync } from "@/lib/read";
import path from "path";

interface GrantItemProps {
  id: number;
  title: string;
  company: string;
  dates: string;
}

export default async function GrantList() {
  const grants: GrantItemProps[] = await readJsonDataAsync(
    path.join(process.cwd(), "src/data/grants.json")
  );
  return (
    <div className="flex flex-col items-start mx-10 space-y-2">
      <h1 className="text-xl text-neutral-900">Work Experiences</h1>
      <ul className="text-sm text-neutral-800 font-light ml-3 w-full max-w-screen-lg space-y-1">
        {grants.reverse().map((item: GrantItemProps, index: number) => (
          <li key={index}>
            <div className="flex flex-col md:flex-row">
              <h3 className="font-normal md:basis-3/4">{item.title}</h3>
              <p className="text-left">{item.dates}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}