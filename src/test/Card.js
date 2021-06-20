export const ProtestsCardProps = {
  content: [
    [{ kind: "tag", align: "end", value: 235 }],
    [{ kind: "line" }],
    [
      { kind: "date", title: "Timestamp", value: new Date(2020, 1, 28) },
      {
        kind: "text",
        title: "Location",
        hoverValue: "Location uncertain",
        value: "Denver, CO",
      },
    ],
    [{ kind: "line-break", times: 0.4 }],
    [
      {
        kind: "text",
        title: "Summary",
        value:
          "A police officer shoves Sachs after he showed him his press pass. The police then fire tear gas, and Sachs is caught up in the cloud.",
      },
    ],
    [{ kind: "line-break", times: 0.8 }],
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
    [{ kind: "line-break", times: 0.4 }],
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

export const YemenCardProps = {
  content: [
    [
      { kind: "date", title: "Date", value: new Date(2020, 1, 28) },
      { kind: "text", title: "Location", hoverValue: "Location estimated", value: "Qaflat Adhr مارب "}
    ],
    [{ kind: "line-break", times: 0.4 }],
    [
      {
        kind: "text",
        title: "Summary",
        value: "Attack on a public hospital. The hospital's medicine warehouse was attacked by an airstrike conducted by the coalition.  Four civilians were injured.",
        scaleFont: 1.1,
      },
    ],
    [{ kind: "line-break", times: 0.4 }],
    [
      {
        kind: "text",
        title: "Remnants found",
        value: "Guidance unit and fin assembly system from an air-dropped bomb, however images were insufficient to make a positive identification."
      },
    ],
    [{ kind: "line-break", times: 0.4 }],
    [
      {
        kind: "text",
        title: "Manufacturer",
        value: "Fake corp"
      }
    ],
    [{ kind: "line-break", times: 0.4 }],
    [
      {
        kind: "button",
        title: "Type of Attack",
        value: [
          {
            text: "Fake Attack",
            color: "#F08035",
            normalCursor: true
          }
        ],
      },
    ],
    [{ kind: "line-break", times: 0.2 }],
    [
      {
        kind: "button",
        title: "Sources",
        value: [
          {
            text: 'Source 1',
            href: 'https://www.youtube.com/watch?v=w-RmVUiyvs4',
            color: null,
            onClick: () => window.open('https://www.youtube.com/watch?v=w-RmVUiyvs4', "_blank")
          },
          {
            text: 'Source 2',
            href: 'https://www.youtube.com/watch?v=cRQRmFhL_vo',
            color: null,
            onClick: () => window.open('https://www.youtube.com/watch?v=cRQRmFhL_vo', "_blank")
          }
        ]
      },
    ]
  ],
  language: "en-US",
  isLoading: false,
  isSelected: true,
  sourceError: null
}
