import certificationJson from "@/data/certifications.json";

const certifications = certificationJson.data.toReversed();

export default function CertificationsList() {
  return (
    <div className="flex flex-col items-start space-y-2 break-inside-avoid">
      <h1 className="text-2xl text-neutral-900 w-full border-neutral-900 border-b-2">
        Certifications
      </h1>
      <div className="text-base text-neutral-800 w-full">
        <ul className="space-y-1 ml-5">
          {certifications.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col justify-between md:flex-row print:flex-row">
                <h3>{item.title}</h3>
                <p className="text-left ml-5 shrink-0">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
