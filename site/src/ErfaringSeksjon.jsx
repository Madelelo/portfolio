import { MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSanityContext } from "./SanityContext";
import { useState, useEffect } from "react";

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const ErfaringSeksjon = () => {
  const { client } = useSanityContext();
  const [data, setData] = useState([]);

  const erfaringData = `
  *[ _type == "erfaring"]{bedriftnavn, stilling, sted, startaar, Sluttaar, beskrivelse}
  `;

  useEffect(() => {
    if (client.fetch) {
      client
        .fetch(erfaringData)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [client, setData, erfaringData]);

  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {data
            .sort((a, b) => b.startaar - a.startaar)
            .map((erfaringsHendelse, index) => (
              <div
                key={`${erfaringsHendelse.bedrift}-${index}`}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {erfaringsHendelse.bedriftnavn}
                    </p>

                    <p className="text-xl font-semibold text-gray-900">
                      {erfaringsHendelse.stilling}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {erfaringsHendelse.beskrivelse}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <MapPinIcon className="h-6 w-6" />

                    <div className="flex-shrink-0">
                      <span className="sr-only">{erfaringsHendelse.sted}</span>
                    </div>

                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {erfaringsHendelse.sted}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <span>{erfaringsHendelse.startaar}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{erfaringsHendelse.Sluttaar}</span>
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

export default ErfaringSeksjon;
