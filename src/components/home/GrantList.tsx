import grantsJson from "@/data/grants.json";

const grants = grantsJson.data.toReversed();

export default function GrantList() {
  return (
    <div className="flex flex-col items-start mx-10 space-y-2">
      <h1 className="text-xl text-neutral-900">Grants and Fellowships</h1>
      <div className="text-sm text-neutral-800 font-light w-full max-w-screen-lg">
        <ul className="ml-3 space-y-1">
          {grants.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col justify-between md:flex-row">
                <h3 className="font-normal md:basis-3/4">{item.title}</h3>
                <p className="text-left ml-5 shrink-0">{item.dates}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
