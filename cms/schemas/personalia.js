export default {
  name: "personalia",
  title: "Personalia",
  type: "document",
  fields: [
    {
      name: "navn",
      title: "Navn",
      type: "string",
    },
    {
      name: "sted",
      title: "Sted",
      type: "string",
    },
    {
      title: "Intro om meg",
      name: "Intro",
      type: "string",
    },

    {
      title: "Link til GitHub",
      name: "href",
      type: "url",
    },
    {
      title: "Link til LinkedIn",
      name: "href",
      type: "url",
    },
  ],
  preview: {
    select: { title: "navn" },
  },
};
