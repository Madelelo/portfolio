import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useSanityContext } from "./SanityContext";
import { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UtdanningSeksjon = (props) => {
  const { client } = useSanityContext();
  const [data, setData] = useState([]);

  const utdanningData = `
    *[ _type == "utdanning"]{skolenavn, sted, startaar, sluttaar, programnavn, beskrivelse}
    `;

  useEffect(() => {
    if (client.fetch) {
      client
        .fetch(utdanningData)
        .then((data) => {
          console.log("Data from Sanity", data);
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [client, setData, utdanningData]);
  console.log(data);
  return (
    <div className="m-auto w-1/2 ">
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {data
            .sort((a, b) => b.startaar - a.startaar)
            .map((utdanningsHendelse, index) => (
              <li key={`${utdanningsHendelse.skolenavn}-${index}`}>
                <div className="relative pb-8">
                  {index !== data.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div className="flex items-center">
                      <span
                        className={classNames(
                          "bg-indigo-700 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                        )}
                      >
                        <UserIcon className="h-7 w-7 text-white" />
                      </span>
                    </div>

                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          {utdanningsHendelse.skolenavn},{" "}
                          {utdanningsHendelse.sted}
                        </p>
                        <p className="font-medium text-gray-900">
                          {utdanningsHendelse.programnavn}
                        </p>
                        <p className="text-sm text-gray-500">
                          {utdanningsHendelse.beskrivelse}
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        {utdanningsHendelse.startaar}-
                        {utdanningsHendelse.sluttaar}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default UtdanningSeksjon;
