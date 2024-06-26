import publicationsJson from "@/data/publications.json";

const me = ["Shiori Ueda", "上田栞"];
const publications = publicationsJson.data.toReversed();

export default function PublicationList() {
  return (
    <div className="flex flex-col items-start space-y-2 break-inside-avoid">
      <h1 className="text-2xl text-neutral-900 w-full border-neutral-900 border-b-2">
        Publications
      </h1>
      {PubArticles(publications)}
      {PubConferences(publications)}
    </div>
  );
}

function PubArticles(publications: any[]) {
  const category = "article";

  return (
    <div className="w-full ml-5">
      <h2 className="text-xl text-neutral-900">Journal Papers</h2>
      <div className="text-base text-neutral-800 w-full">
        <ol className="list-decimal space-y-1 ml-5">
          {publications
            .filter((item) => item.category === category)
            .map((item) => (
              <li key={item.id}>
                <div className="size-5/6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{Authors(item.authors)}</p>
                  <p>
                    <span className="italic">{item.journal}</span>
                    {item.volume && `, `}
                    <span>{item.volume && `vol. ${item.volume}`}</span>
                    {item.number && `, `}
                    <span>{item.number && `no. ${item.number}`}</span>
                    {item.pages && `, `}
                    <span>
                      {item.pages &&
                        `pp. ${item.pages.toString().replace("--", "-")}`}
                    </span>
                    {item.year && `, `}
                    <span>{item.year && `${item.year}`}</span>
                    {item.note && `, `}
                    <span>{item.note && `(${item.note})`}</span>
                  </p>
                </div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

function PubConferences(publications: any[]) {
  const category = "proceedings";

  return (
    <div className="w-full ml-5">
      <h2 className="text-xl text-neutral-900">Conferences</h2>
      <div className="text-base text-neutral-800 w-full">
        <ol className="list-decimal space-y-1 ml-5">
          {publications
            .filter((item: any) => item.category === category)
            .map((item) => (
              <li key={item.id}>
                <div className="size-5/6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{Authors(item.authors)}</p>
                  <p>
                    <span className="italic">{item.booktitle}</span>
                    {item.volume && `, `}
                    <span>{item.volume && `vol. ${item.volume}`}</span>
                    {item.number && `, `}
                    <span>{item.number && `no. ${item.number}`}</span>
                    {item.pages && `, `}
                    <span>
                      {item.pages &&
                        `pp. ${item.pages.toString().replace("--", "-")}`}
                    </span>
                    {item.year && `, `}
                    <span>{item.year && `${item.year}`}</span>
                    {item.note && `, `}
                    <span>{item.note && `(${item.note})`}</span>
                  </p>
                </div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

function Authors(authors: string[]) {
  return (
    <>
      {authors.map((author, index) => (
        <span
          key={index}
          className={me.includes(author) ? "text-neutral-900 font-normal" : ""}
        >
          {author}
          {index < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
  );
}
