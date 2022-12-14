import React from "react";
import { useSanityContext } from "./SanityContext";
import { useState, useEffect } from "react";
import PersonaliaSeksjon from "./PersonaliaSeksjon";
import UtdanningSeksjon from "./UtdanningSeksjon";
import ErfaringSeksjon from "./ErfaringSeksjon";
import ProsjekterSeksjon from "./ProsjekterSeksjon";

const Page = () => {
  const { client, urlFor } = useSanityContext();
  const [data, setData] = useState([]);

  const personaliaData = `
    *[ _type == "personalia"]{navn, sted, intro, GitHub, LinkedIn, picture}
    `;

  useEffect(() => {
    if (client.fetch) {
      client
        .fetch(personaliaData)
        .then((data) => {
          console.log("Data from Sanity", data);
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [client, setData, personaliaData]);

  if (!data.length) {
    return <div>Laster...</div>;
  }

  return (
    <div>
      <PersonaliaSeksjon personalia={data} />
      <div className="py-20 hidden md:block lg:hidden"></div>
      <UtdanningSeksjon />
      <ErfaringSeksjon />
      <ProsjekterSeksjon />
    </div>
  );
};

export default Page;
