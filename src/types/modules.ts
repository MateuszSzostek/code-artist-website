interface INavigation {}

interface INavigationLink {
  id: string | number;
  name: string;
  to: string;
}

interface ILandingCTA {
  to: string;
  name: string;
}

interface ISimpleTemplate {
  templateContent?: ISingleTemplateContent;
}

interface IContentEntertainment extends ISimpleTemplate {}

interface ISingleTemplateContent {
  html: string;
  frontmatter: IFrontmatter;
}

interface IFrontmatter {
  alternativeText: string;
  description: string;
  id: string;
  image: GatsbyImage;
  metaTags: MetaTags;
  relatedTechnologies: string[];
  similarContentIds: string[];
  timestamp: number;
  title: string;
  urlName: string;
  repoLink?: string;
}

type GatsbyImage = {
  childImageSharp: {
    gatsbyImageData: {
      backgroundColor: string;
      height: number;
      images: {
        fallback: Fallback;
        sources: Fallback[];
      };
      layout: string;
      width: number;
    };
  };
};

type Fallback = {
  sizes: string;
  src: string;
  srcSet: string;
};

type MetaTags = {
  externalScript: string;
  fbAppId: string;
  keywords: string;
  metaDescription: string;
  ogDescription: string;
  ogImage: string;
  ogImageHeight: string;
  ogImageSecureUrl: string;
  ogImageType: string;
  ogImageUrl: string;
  ogImageWidth: string;
  ogLocale: string;
  ogTitle: string;
  ogUrl: string;
  ogVideo: string;
  ogVideoHeight: string;
  ogVideoSecureUrl: string;
  ogVideoType: string;
  ogVideoUrl: string;
  ogVideoWidth: string;
  pageTitle: string;
  twCard: string;
  twCreator: string;
  twSite: string;
};

export type {
  INavigation,
  INavigationLink,
  ILandingCTA,
  ISimpleTemplate,
  IContentEntertainment,
};
