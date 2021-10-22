import React from "react";

import { Card } from "./Card.React";
import { generateCardLayout } from "../../templates";
import { CardProps } from "../../../test/Card";

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  content: generateCardLayout['default']({
    event: {
      "associations": [
        {
          "filter_paths": [
            "Weapons",
            "Close Range",
            "Baton"
          ],
          "id": "baton",
          "title": "baton",
          "desc": "melee",
          "mode": "FILTER"
        },
        {
          "filter_paths": [],
          "id": "narrative_2",
          "title": "narrative_2",
          "desc": "second narrative",
          "mode": "NARRATIVE"
        }
      ],
      "sources": [
        {
          "paths": [
            "https://d10yslqdemxz8r.cloudfront.net/welfare/15.-Rosslyn-Noonan.pdf",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            "https://d10yslqdemxz8r.cloudfront.net/welfare/archivescentral-lake-alice-mental-hospital-site-plan.md",
          ],
          "id": "src7",
          "title": "A Composite Source. Image and Text",
          "thumbnail": "http://localhost:8000/source2/s3.jpg",
          "description": "Source 7 is composed of both images and text.",
          "type": "Eyewitness Testimony"
        }
      ],
      "description": "Fifth thing happened with a baton.",
      "date": "11/08/2014",
      "time": "09:00",
      "location": "Mishmar HaNegev",
      "latitude": "31.3640871",
      "longitude": "34.7135396",
      "id": 4,
      "datetime": new Date("2014-11-08T14:00:00.000Z")
    }
  })
};

const addInlineMedia = (props, media) => {
  return {
    ...props,
    content: [...props.content, [{ kind: "media", value: media }]],
  };
};

export const StrippedBare = Template.bind({});
StrippedBare.args = {
  content: generateCardLayout["basic"]({
    event: {
      datetime: new Date(),
      location: `Somewhere`,
      description: `Something happened`,
    },
  }),
};

export const InlineVideoPortrait = Template.bind({});
InlineVideoPortrait.args = {
  ...addInlineMedia(
    CardProps,
    [
      {
        title: "Mock Title 1",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4"
      },
      {
        title: "Mock Title 2",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4"
      },
      {
        title: "Mock Title 3",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4"
      },
    ]
  )
};

export const InlinePicturePortrait = Template.bind({});
InlinePicturePortrait.args = {
  ...addInlineMedia(
    CardProps,
    [
      {
        title: "Mock Title",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/118.jpg"
      }
    ]
  ),
};

export const InlinePictureLandscape = Template.bind({});
InlinePictureLandscape.args = {
  ...addInlineMedia(
    CardProps,
    [
      {
        title: "Mock Title",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/143.jpg"
      }
    ]
  ),
};

export default {
  title: "FA/Components/Card",
  component: Card,
  argTypes: {},
};
