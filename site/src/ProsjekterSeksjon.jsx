import { LinkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSanityContext } from "./SanityContext";
import { useState, useEffect } from "react";

const ProsjekterSeksjon = () => {
  const { client, urlFor } = useSanityContext();
  const [data, setData] = useState([]);

  const prosjekterData = `
  *[ _type == "prosjekter"]{prosjekttittel, prosjektaar, prosjektbeskrivelse, href, bilde}
  `;

  useEffect(() => {
    if (client.fetch) {
      client
        .fetch(prosjekterData)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [client, setData, prosjekterData]);

  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {data
            .sort((a, b) => b.prosjektaar - a.prosjektaar)
            .map((prosjekt, index) => (
              <div
                key={`${prosjekt.prosjekttittel}-${index}`}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={urlFor(prosjekt.bilde).url()}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">
                      {prosjekt.prosjekttittel}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {prosjekt.prosjektbeskrivelse}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only"> jdjd</span>
                    </div>

                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={prosjekt.href} className="hover:underline">
                          <p className="flex text-sm font-medium text-indigo-600">
                            <LinkIcon className="h-6 w-6 p-1" /> Les mer her.
                          </p>
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <span>{prosjekt.startprosjektaar}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProsjekterSeksjon;
