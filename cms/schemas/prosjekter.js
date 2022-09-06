export default {
  name: "prosjekter",
  title: "Prosjekter",
  type: "document",
  fields: [
    {
      name: "prosjekttittel",
      title: "Tittel",
      type: "string",
      description: "Navn på prosjekt",
    },
    {
      name: "prosjektaar",
      title: "År",
      type: "number",
    },
    {
      name: "prosjektbeskrivelse",
      title: "Prosjektbeskrivelse",
      type: "string",
    },
    {
      title: "Link",
      name: "href",
      type: "url",
    },
    {
      title: "Bilde",
      name: "bilde",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
  ],
  preview: {
    select: { title: "prosjekttittel" },
  },
};
