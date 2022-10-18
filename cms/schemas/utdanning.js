export default {
  name: "utdanning",
  title: "Utdanning",
  type: "document",
  fields: [
    {
      name: "skolenavn",
      title: "Skolenavn",
      type: "string",
      description: "Navn på skole",
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
      name: "sluttaar",
      title: "Sluttår",
      type: "number",
      description: "Sluttår",
    },
    {
      name: "programnavn",
      title: "Programnavn",
      type: "string",
      description: "Navn på utdanningsprogam/retning",
    },
    {
      name: "beskrivelse",
      title: "Beskrivelse",
      type: "string",
      description: "Beskrivelse",
    },
  ],
  preview: {
    select: { title: "skolenavn", subtitle: "startaar" },
  },
};
