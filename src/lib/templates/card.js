export const generateCardLayout = {
  basic: ({event}) => {
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
      [{kind: "line-break", times: 0.4}],
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
  us_protests: ({event, colors, coloringSet, getFilterIdxFromColorSet}) => {
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
      [{kind: "line"}],
      [
        {kind: "date", title: "Incident Date", value: event.datetime},
        {
          kind: "text",
          title: "Location",
          hoverValue: precision,
          value: event.location,
        },
      ],
      [{kind: "line-break", times: 0.4}],
      [
        {
          kind: "text",
          title: "Summary",
          value: event.description,
          scaleFont: 1.1,
        },
      ],
      [{kind: "line-break", times: 0.4}],
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
      [{kind: "line-break", times: 0.2}],
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
  yemen: ({event}) => {
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
        {kind: "date", title: "Incident Date", value: event.datetime},
        {
          kind: "text",
          title: "Location",
          hoverValue: precision,
          value: event.location,
        },
      ],
      [{kind: "line-break", times: 0.4}],
      [
        {
          kind: "text",
          title: "Summary",
          value: event.description,
          scaleFont: 1.1,
        },
      ],
      [{kind: "line-break", times: 0.4}],
      [
        {
          kind: "text",
          title: "Remnants found",
          value: event.remnants_found
        }
      ],
      [{kind: "line-break", times: 0.4}],
      [
        {
          kind: "text",
          title: "Manufacturer",
          value: event.manufacturer
        }
      ],
      [{kind: "line-break", times: 0.4}],
      [event.type_of_attack && (
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
      [event.evidence_of_complicity && (
        {
          kind: "text",
          title: "Evidence of Complicity",
          value: event.evidence_of_complicity
        }),
      ],
      [{kind: "line-break", times: 0.2}],
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
      [{kind: "line-break", times: 0.2}],
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
