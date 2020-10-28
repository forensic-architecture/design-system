export const CardProps = {
  content: [
    [{ kind: "tag", align: "end", value: 235 }],
    [
      { kind: "date", title: "Timestamp", value: new Date(2020, 1, 28) },
      { kind: "text", title: "Location", value: "Denver, CO" },
    ],
    [
      {
        kind: "text",
        title: "Summary",
        value:
          "A police officer shoves Sachs after he showed him his press pass. The police then fire tear gas, and Sachs is caught up in the cloud.",
      },
    ],
    [
      {
        kind: "button",
        title: "Associations",
        value: [
          {
            text: "Tear Gas",
            color: null,
            onClick: () => {
              console.log("hello");
            },
          },
          { text: "Confirmed Press", color: null },
          { text: "Focus", color: null },
        ],
      },
      {
        kind: "button",
        title: "Against",
        value: [
          {
            text: "Journalist",
            color: null,
          },
        ],
      },
    ],
    [
      { kind: "text", title: "Name of reporter(s)", value: "Zac Ioannidis" },
      { kind: "text", title: "Network", value: "CNN" },
    ],
    [
      {
        kind: "links",
        title: "Sources",
        value: [
          {
            text: "Source 1",
            href: "#",
          },
        ],
      },
    ],
    [
      {
        kind: "list",
        title: "Filters",
        value: ["Tear gas", "Confirmed Press", "Focus", "Journalist"],
      },
    ],
    [
      {
        kind: "markdown",
        title: "Markdown",
        value: "**I** point to a [link](#)",
      },
    ],
  ],

  sources: [],
  // sources: [
  //   {
  //     paths: [
  //       "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/42.mp4",
  //     ],
  //     id: "source42",
  //     title: "David Sachs - CPR News",
  //     type: "",
  //     description:
  //       "A police officer shoves Sachs after he showed him his press pass. The police then fire tear gas, and Sachs is caught up in the cloud.",
  //     url: "https://twitter.com/DavidASachs/status/1266920122893156353",
  //   },
  // ],

  language: "en-US",
  isLoading: false,
  isSelected: true,
  sourceError: null,
};
