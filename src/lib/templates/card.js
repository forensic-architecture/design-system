function produceMediaInline(path) {
  const ext = path.match(/\.[0-9a-z]+$/i)[0]
  switch (ext) {
    case '.jpg':
    case '.png':
      return [{ kind: 'media', value: [{ src: path }] }]
    case '.pdf':
      return [{ kind: 'button', value: [{ text: 'See full PDF', color: 'white', href: path, onClick: () => window.open(path, '_blank') }]  }]
    case '.md':
      return [{ kind: 'markdown', value: '*TODO*' }]
    default:
      return null
  }
}

export const generateCardLayout = {
  default: ({ event }) => {
    return [
      [
        {
          kind: "date",
          title: "Incident Date",
          value: event.datetime || event.date || ``,
        },
        {
          kind: "text",
          title: "Location",
          value: event.location || `—`,
        },
      ],
      [{ kind: "line-break", times: 0.4 }],
      [
        {
          kind: "text",
          title: "Summary",
          value: event.description || ``,
          scaleFont: 1.1,
        },
      ],
      [{ kind: "line-break", times: 0.8 }],
      // [
      //   {
      //     kind: "button",
      //     title: "Associations",
      //     value: event.associations.map(association => {
      //       return {
      //         text: association.title,
      //         color: null,
      //         onClick: () => {
      //           console.log("hello");
      //         },
      //       }
      //     })
      //   },
      // ],
      ...event.sources.map((source, idx) => {
        if (source.paths.length <= 0) return null
        return [
          [{
            kind: 'button',
            title: `Source ${idx+1}`,
            value: [{ text: source.title, color: null, href: source.url, onClick: () => window.open(source.url, "_blank") }],
          }],
          [{ kind: 'text', value: source.description }],
          ...source.paths.map(produceMediaInline).filter(s => s !== null)
        ]
      }).filter(src => src !== null).flatMap(x => x),
    ]
  },
  basic: ({ event }) => {
    return [
      [
        {
          kind: "date",
          title: "Incident Date",
          value: event.datetime || event.date || ``,
        },
        {
          kind: "text",
          title: "Location",
          value: event.location || `—`,
        },
      ],
      [{ kind: "line-break", times: 0.4 }],
      [
        {
          kind: "text",
          title: "Summary",
          value: event.description || ``,
          scaleFont: 1.1,
        },
      ],
    ];
  },
  us_protests: ({ event, colors, coloringSet, getFilterIdxFromColorSet }) => {
    let precision;
    switch (event.location_precision) {
      case `Generalised`:
        precision = `No location data`;
        break;
      case `Estimated`:
        precision = `Precise location estimated`;
        break;
      case `Self-reported`:
        precision = `Location reported by witness`;
        break;
      case `Confirmed`:
      default:
        precision = null;
        break;
    }

    return [
      [
        {
          kind: "tag",
          align: "end",
          value: `Incident #${event.incident_id}`,
        },
      ],
      [{ kind: "line" }],
      [
        { kind: "date", title: "Incident Date", value: event.datetime },
        {
          kind: "text",
          title: "Location",
          hoverValue: precision,
          value: event.location,
        },
      ],
      [{ kind: "line-break", times: 0.4 }],
      [
        {
          kind: "text",
          title: "Summary",
          value: event.description,
          scaleFont: 1.1,
        },
      ],
      [{ kind: "line-break", times: 0.4 }],
      [
        {
          kind: "button",
          title: "Type of Violation",
          value: event.associations.slice(0, -1).map((association) => ({
            text: association,
            color:
              getFilterIdxFromColorSet(association, coloringSet) >= 0
                ? colors[getFilterIdxFromColorSet(association, coloringSet)]
                : null,
            normalCursor: true,
          })),
        },
        {
          kind: "button",
          title: "Against",
          value: event.associations.slice(-1).map((category) => ({
            text: category,
            color: null,
            normalCursor: true,
          })),
        },
      ],
      [{ kind: "line-break", times: 0.2 }],
      [
        {
          kind: "list",
          title: "Law Enforcement Agencies",
          value: event.le_agencys,
        },
      ],
      [
        {
          kind: "text",
          title: "Name of reporter(s)",
          value: event.journalist_name,
        },
        {
          kind: "text",
          title: "Network",
          value: event.news_organisation,
        },
      ],
      [
        {
          kind: event.hide_source === "FALSE" ? "button" : "markdown",
          title: "Sources",
          value:
            event.hide_source === "FALSE"
              ? event.links.map((href, idx) => ({
                  text: `Source ${idx + 1}`,
                  href,
                  color: null,
                  onClick: () => window.open(href, "_blank"),
                }))
              : "Source hidden to protect the privacy and dignity of civilians. Read more [here](https://staging.forensic-architecture.org/wp-content/uploads/2020/09/2020.14.09-FA-Bcat-Mission-Statement.pdf).",
        },
      ],
    ];
  },
  yemen: ({ event }) => {
    let precision;
    switch (event.precision_exact) {
      case `YES`:
        precision = `Precise location confirmed`;
        break;
      case `NO`:
        precision = `Location estimated`;
        break;
      default:
        precision = null;
        break;
    }

    return [
      [
        { kind: "date", title: "Incident Date", value: event.datetime },
        {
          kind: "text",
          title: "Location",
          hoverValue: precision,
          value: event.location,
        },
      ],
      [{ kind: "line-break", times: 0.4 }],
      [
        {
          kind: "text",
          title: "Summary",
          value: event.description,
          scaleFont: 1.1,
        },
      ],
      [{ kind: "line-break", times: 0.4 }],
      [
        {
          kind: "text",
          title: "Remnants found",
          value: event.remnants_found
        }
      ],
      [{ kind: "line-break", times: 0.4 }],
      [
        {
          kind: "text",
          title: "Manufacturer",
          value: event.manufacturer
        }
      ],
      [{ kind: "line-break", times: 0.4 }],
      [ event.type_of_attack && (
        {
          kind: "button",
          title: "Type of Attack",
          value: event.associations.filter(a => a.title === event.type_of_attack).map((association) => ({
            text: event.type_of_attack,
            color: association.colour,
            normalCursor: true,
          })),
        }),
      ],
      [{ kind: "line-break", times: 0.2 }],
      [
        {
          kind: "button",
          title: "Sources",
          value: event.links.map((href, idx) => ({
                  text: `Source ${idx + 1}`,
                  href,
                  color: null,
                  onClick: () => window.open(href, "_blank"),
                }))
        },
      ],
      [{ kind: "line-break", times: 0.2 }],
      [
        {
          kind: "media",
          title: "Media",
          value: event.media
        }
      ],
    ];
  },
};
