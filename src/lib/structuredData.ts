import { Person, WebSite, WithContext } from "schema-dts";

export const STRUCTURED_DATA_AUTHOR: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marlon Schlosshauer",
    url: "https://www.marlonschlosshauer.de",
    sameAs: ["https://github.com/marlonschlosshauer", "https://twitter.com/kehrin"],
};

export const STRUCTURED_DATA_WEBSITE: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marlon Schlosshauer",
    url: "https://www.marlonschlosshauer.de",
    inLanguage: "en",
    author: STRUCTURED_DATA_AUTHOR,
};
