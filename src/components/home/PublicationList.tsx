import jsonData from "@/data/publications.json";
import Link from "next/link";

const me = ["Shiori Ueda", "上田栞"];

export default function PublicationList() {
  const publications = jsonData.data;

  return (
    <div className="flex flex-col items-start mx-10 space-y-2">
      <h1 id="publications" className="text-xl text-neutral-900">
        Publications
      </h1>
      <h2 className="text-base text-neutral-800">Journal Papers</h2>
      {PubArticles(publications)}
      <h2 className="text-base text-neutral-800">Conferences</h2>
      {PubConferences(publications)}
    </div>
  );
}

function PubArticles(publications: any[]) {
  const category = "article";

  return (
    <ol
      reversed
      className="list-decimal text-sm text-neutral-800 font-light pl-8 space-y-3"
    >
      {publications
        .filter((item) => item.category === category)
        .reverse()
        .map((item) => (
          <li key={item.id}>
            <div>
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
              <p className="flex flex-row space-x-2">{Links(item.links)}</p>
            </div>
          </li>
        ))}
    </ol>
  );
}

function PubConferences(publications: any[]) {
  const category = "proceedings";

  return (
    <ol
      reversed
      className="list-decimal text-sm text-neutral-800 font-light pl-8 space-y-3"
    >
      {publications
        .filter((item: any) => item.category === category)
        .reverse()
        .map((item) => (
          <li key={item.id}>
            <div>
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
                <span>{item.note && `${item.note}`}</span>
              </p>
              <p className="flex flex-row space-x-2">{Links(item.links)}</p>
            </div>
          </li>
        ))}
    </ol>
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

function Links(links: any[]) {
  return (
    <>
      {links.length > 0 &&
        links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className="text-sm font-normal text-blue-600 dark:text-blue-500 underline hover:no-underline"
          >
            {" "}
            <p>{link.title}</p>
          </Link>
        ))}
    </>
  );
}
