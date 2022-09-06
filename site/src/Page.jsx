import React from "react";
import { useSanityContext } from "./SanityContext";
import { useState, useEffect } from "react";

const Page = () => {
  const { client } = useSanityContext();
  const [data, setData] = useState([]);

  const personaliaData = `
    *[ _type == "personalia"]{navn, sted}
    `;

  useEffect(() => {
    if (client.fetch) {
      client
        .fetch(personaliaData)
        .then((data) => {
          console.log("he", data);
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

  return <div>Hello world</div>;
};

export default Page;
