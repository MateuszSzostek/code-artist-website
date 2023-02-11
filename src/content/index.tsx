import React from "react";
import { INavigationLink, ILandingCTA } from "../types/modules";
import { IContentCard } from "../types/components";
import ProductIconSVG from "../assets/images/vector/components/ProductSVGIcon";
import WebDevelopmentIconSVG from "../assets/images/vector/components/WebDevelopmentSVGIcon";
import WebDesignIconSVG from "../assets/images/vector/components/WebDesignSVGIcon";
import CustomSolutionIconSVG from "../assets/images/vector/components/CustomSolutionSVGIcon";
import CSharpSVGIcon from "../assets/images/vector/components/CSharpSVGIcon";
import Css3SVGIcon from "../assets/images/vector/components/Css3SVGIcon";
import GatsbySVGIcon from "../assets/images/vector/components/GatsbySVGIcon";
import GraphQlSVGIcon from "../assets/images/vector/components/GraphqlSVGIcon";
import Html5SVGIcon from "../assets/images/vector/components/Html5SVGIcon";
import JavascriptSVGIcon from "../assets/images/vector/components/JavascriptSVGIcon";
import NodeJsSVGIcon from "../assets/images/vector/components/NodeJsSVGIcon";
import ReactSVGIcon from "../assets/images/vector/components/ReactSVGIcon";
import TypescriptSVGIcon from "../assets/images/vector/components/TypescriptSVGIcon";

const companyName: string = "Code Artist";
const companyEmail: string = "codeartist.network@gmail.com";
const phoneNumber: string = "+09 876 543 210";

const navigationLinks: INavigationLink[] = [
  { id: 1, to: "/about", name: "About" },
  { id: 2, to: "/services", name: "Services" },
  { id: 3, to: "/contact", name: "Contact" },
];

const subNavigationLinks: INavigationLink[] = [
  { id: 1, to: "/brief", name: "Brief" },
  { id: 2, to: "/helpdesk", name: "Helpdesk" },
  { id: 3, to: "/demo", name: "Demo" },
  { id: 4, to: "/statement", name: "Statement" },
  { id: 5, to: "/privacy-policy", name: "Privacy Policy" },
];

const landingTitle: string = "Unleash Your Business's Full Potential.";
const landingSubTitle: string =
  "Welcome to our software development company, where we turn boring code into amazing software that will make your computer do backflips. Whether you're looking for a new website, mobile app or custom software solution, we've got you covered. Our software development is like a rollercoaster, lots of ups and no downs and we turn your tech troubles into tech-sational success.";
const landingCTA: ILandingCTA = {
  to: "/",
  name: "Boost Your Business",
};

const servicesTitle: string = "We speak your language";
const servicesDescription: string =
  "Our services include custom software development where we'll turn your tech nightmares into tech-tastic dreams, mobile app development that will make sure your app is the apple of everyone's eye, and website development that will create a website that's too hot to handle.";

const caseStudyDescription =
  "The software development company is a symphony of technical expertise and artistic flair. Their process begins with a carefully crafted composition of client requirements, setting the stage for their developers to bring the project to life with their creative coding abilities. Each line of code is a brush stroke on the canvas of the software they build. And when the time comes to present their masterpiece, the team conducts a beautifully choreographed demonstration that showcases the software's functionality and design in harmony. The end result is a work of art that both delights and inspires.";

const servicesCards: IContentCard[] = [
  {
    id: 1,
    title: "PRODUCT",
    description:
      "We help in the development of products by creating and enhancing them to fulfill consumer requirements and introduce them in the market.",
    ImageComponent: <ProductIconSVG width={128} height={128} />,
    action: {
      name: "PRODUCT",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT",
    description:
      "We build and design websites to meet clients' goals, utilizing programming languages and tools to create user-friendly, responsive, and visually appealing online platforms.",
    ImageComponent: <WebDevelopmentIconSVG width={128} height={128} />,
    action: {
      name: "WEB DEVELOPMENT",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 3,
    title: "WEB DESIGN",
    description:
      "We craft visually appealing and user-friendly website designs, balancing aesthetics and functionality to bring clients' ideas to life online..",
    ImageComponent: <WebDesignIconSVG width={128} height={128} />,
    action: {
      name: "WEB DESIGN",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 4,
    title: "CUSTOM SOLUTION",
    description:
      "We develop customized software solutions tailored to clients' unique business needs, utilizing the latest technologies to increase efficiency and productivity.",
    ImageComponent: <CustomSolutionIconSVG width={128} height={128} />,
    action: {
      name: "CUSTOM SOLUTION",
      cta: {
        to: "/",
      },
    },
  },
];

const technologyCards: IContentCard[] = [
  {
    id: 1,
    ImageComponent: <CSharpSVGIcon width={64} height={64} />,
    action: {
      name: "C SHARP",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 2,
    ImageComponent: <Css3SVGIcon width={64} height={64} />,
    action: {
      name: "CSS3",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 3,
    ImageComponent: <GatsbySVGIcon width={64} height={64} />,
    action: {
      name: "GATSBY",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 4,
    ImageComponent: <GraphQlSVGIcon width={64} height={64} />,
    action: {
      name: "GRAPHQL",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 5,
    ImageComponent: <Html5SVGIcon width={64} height={64} />,
    action: {
      name: "HTML5",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 6,
    ImageComponent: <JavascriptSVGIcon width={64} height={64} />,
    action: {
      name: "JAVASCRIPT",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 7,
    ImageComponent: <NodeJsSVGIcon width={64} height={64} />,
    action: {
      name: "NODEJS",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 8,
    ImageComponent: <ReactSVGIcon width={64} height={64} />,
    action: {
      name: "REACTJS",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 9,
    ImageComponent: <TypescriptSVGIcon width={64} height={64} />,
    action: {
      name: "TYPESCRIPT",
      cta: {
        to: "/",
      },
    },
  },
];

const contentCards: IContentCard[] = [
  {
    id: 1,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
    tags: ["Gaming"],
  },
  {
    id: 2,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
    tags: ["Manufacture", "Gaming"],
  },
  {
    id: 3,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 4,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 5,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 6,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 7,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
  },
  {
    id: 8,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
  },
];

const productsCards: IContentCard[] = [
  {
    id: 1,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
    tags: ["Gaming", "Technology"],
  },
  {
    id: 2,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
    tags: ["Gaming", "Technology"],
  },
  {
    id: 3,
    title: "Test Card Title",
    description:
      "Nulla dignissim nibh nec nisi tincidunt pulvinar. Nunc quis porttitor est. Pellentesque.",
    action: {
      name: "Call the action!",
      cta: {
        to: "/",
      },
    },
    tags: ["Gaming", "Technology"],
  },
];

export {
  companyName,
  companyEmail,
  phoneNumber,
  navigationLinks,
  subNavigationLinks,
  landingTitle,
  landingSubTitle,
  landingCTA,
  servicesTitle,
  servicesDescription,
  contentCards,
  servicesCards,
  caseStudyDescription,
  technologyCards,
  productsCards,
};
