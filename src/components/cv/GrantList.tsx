import grantsJson from "@/data/grants.json";

const grants = grantsJson.data.toReversed();

export default function GrantList() {
  return (
    <div className="flex flex-col items-start space-y-2 break-inside-avoid">
      <h1 className="text-2xl text-neutral-900 w-full border-neutral-900 border-b-2">
        Grants
      </h1>
      <div className="text-base text-neutral-800 w-full ml-5">
        <ul className="space-y-1">
          {grants.map((item, index) => (
            <li key={index}>
              <div className="flex flex-row">
                <h3 className="font-semibold basis-3/4">{item.title}</h3>
                <p className="text-left basis-1/4">{item.dates}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
