export default {
  name: "erfaring",
  title: "Erfaring",
  type: "document",
  fields: [
    {
      name: "bedriftnavn",
      title: "Bedrift",
      type: "string",
      description: "Navn på bedrift",
    },
    {
      name: "stilling",
      title: "Stilling",
      type: "string",
      description: "Stilling",
    },
    {
      name: "sted",
      title: "Sted",
      type: "string",
      description: "Sted",
    },
    {
      name: "startaar",
      title: "Startår",
      type: "number",
      description: "Startår",
    },
    {
      name: "Sluttaar",
      title: "Sluttår",
      type: "number",
      description: "Sluttår",
    },

    {
      name: "beskrivelse",
      title: "Beskrivelse",
      type: "string",
      description: "Beskrivelse",
    },
  ],
  preview: {
    select: { title: "bedriftnavn", subtitle: "startaar" },
  },
};
