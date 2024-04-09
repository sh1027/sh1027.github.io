import certificationJson from "@/data/certifications.json";

const certifications = certificationJson.data.toReversed();

export default function CertificationsList() {
  return (
    <div className="flex flex-col items-start space-y-2 break-inside-avoid">
      <h1 className="text-2xl text-neutral-900 w-full border-neutral-900 border-b-2">
        Certifications
      </h1>
      <div className="text-base text-neutral-800 w-full ml-5">
        <ul className="space-y-1">
          {certifications.map((item, index) => (
            <li key={index}>
              <div className="flex flex-row">
                <h3 className="basis-5/6">{item.title}</h3>
                <p className="text-left basis-1/6">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
