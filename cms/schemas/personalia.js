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
      name: "intro",
      title: "Intro om meg",
      type: "string",
    },

    {
      title: "Link til GitHub",
      name: "GitHub",
      type: "url",
    },
    {
      title: "Link til LinkedIn",
      name: "LinkedIn",
      type: "url",
    },
    {
      title: "Picture",
      name: "picture",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
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
    select: { title: "navn" },
  },
};
