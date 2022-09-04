import { performance } from "perf_hooks";

export const sectionAboutUs = {
  title: "ABOUT US",
  imageFigure: "/aboutUsFigure.svg",
  imageGirl: "/aboutUsGirl.png",
};

export const sectionVideo = {
  blockDescription:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit",
  blockTitle: "LOREM IPSUM",
  mainTitle:
    "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.”",
  title: "LOREM IPSUM DOLOR SIT",
  description: [
    {
      id: performance.now().toString(36) + Math.random().toString(36),
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: 2,
      text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
  ],
  videoCaption: "Video caption here",
  poster: "/videoPreview.png",
  video: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/h264.mov",
};

export const sectionGroup = {
  imageCar: "/groupCar.png",
  imageFigure: "/groupFigure.svg",
  title: "GARDX GROUP",
  description:
    "We are one GardX. Whichever business we are representing, our brand mission and values should be at the heart of what we do.",
  buttonTitle: "BUTTON",
};

export const sectionEra = {
  title: "OUR NEW ERA STARTS HERE.",
  blocks: [
    {
      id: performance.now().toString(36) + Math.random().toString(36),
      year: "2003",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      id: performance.now().toString(36) + Math.random().toString(36),
      year: "2004",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      id: performance.now().toString(36) + Math.random().toString(36),
      year: "2007",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      id: performance.now().toString(36) + Math.random().toString(36),
      year: "2009-10",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      id: performance.now().toString(36) + Math.random().toString(36),
      year: "2012",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
  ],
};

export const sectionOurValues = [
  {
    id: performance.now().toString(36) + Math.random().toString(36),
    image: "/imageMission.png",
    title: "PURPOSE, VALUES & MISSION",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    buttonTitle: "BUTTON",
  },
  {
    id: performance.now().toString(36) + Math.random().toString(36),
    image: "/imageLeadership.png",
    title: "LEADERSHIP",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    buttonTitle: "BUTTON",
  },
  {
    id: performance.now().toString(36) + Math.random().toString(36),
    image: "/imageHistory.png",
    title: "HISTORY",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    buttonTitle: "BUTTON",
  },
];

export const sectionMap = {
  title: "WHERE WE OPERATE",
  blocks: [
    {
      id: performance.now().toString(36) + Math.random().toString(36),
      title: "6 MENA Countries",
      image: "/marker.svg",
    },
    {
      id: performance.now().toString(36) + Math.random().toString(36),
      title: "20 European countries",
      image: "/marker.svg",
    },
    {
      id: performance.now().toString(36) + Math.random().toString(36),
      title: "UK & Ireland",
      image: "/marker.svg",
    },
  ],
  mapDotsData: [
    {
      id: "example_1",
      cx: "1027.416",
      cy: "467.22",
      r: "6",
      country: "Country 1",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    },

    {
      id: "example_2",
      cx: "1002.348",
      cy: "81.183",
      r: "6",
      country: "Country 2",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    },
    {
      id: "example_3",
      cx: "563.521",
      cy: "144.562",
      r: "6",
      country: "Country 3",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    },
    {
      id: "example_4",
      cx: "334.981",
      cy: "365.438",
      r: "6",
      country: "Country 4",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    },
  ],
};

export const sectionPartners = {
  dealerGroups: {
    title: "DEALER GROUPS",
    items: [
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/cambria.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/citygate.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/hendy.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/vindis.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/superbike.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/renault.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/halliwell.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/acorn.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/jct600.png",
      },
    ],
  },
  manufactures: {
    title: "MANUFACTURERS",
    items: [
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/bmw.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/hyundai.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/harley.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/vauxhall.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/santander.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/bmwFinancial.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/psa.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/mg.png",
      },
      {
        id: performance.now().toString(36) + Math.random().toString(36),
        image: "/mazda.png",
      },
    ],
  },
};
