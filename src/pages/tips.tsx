import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import SEO from "../components/SEO/SEO";
import ListMenuBackgroundTemplate from "../modules/ListMenuBackgroundTemplate";
import ListContentTemplate from "../modules/ListContentTemplate";
import { IContentCard } from "../types/components";

const TipsPage = (props) => {
  console.log(props);

  const contentCards: IContentCard[] =
    props?.data?.allMarkdownRemark?.edges.map((el) => {
      return {
        id: el?.node?.id,
        title: el?.node?.frontmatter?.title,
        description: el?.node?.frontmatter?.description,
        image: el?.node?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
        altImg: el?.node?.frontmatter?.alternativeText,
        timestamp: el?.node?.frontmatter?.timestamp,
        action: {
          cta: {
            to: `/tip/${el?.node?.frontmatter?.urlName}`,
          },
        },
      };
    });

  return (
    <Layout>
      <ListMenuBackgroundTemplate />
      <ListContentTemplate cards={contentCards} />
    </Layout>
  );
};

export default TipsPage;

export const query = graphql`
  query allTipsQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "tip" } } }) {
      edges {
        node {
          frontmatter {
            timestamp
            title
            urlName
            description
            alternativeText
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          id
        }
      }
    }
  }
`;

export const Head = (props) => {
  console.log(props);
  console.log(process.env.DOMAIN);
  return (
    <SEO
      title="Code Artist - Demos"
      description="We turn coffee into code and create websites faster than the speed of light. Need a new website? We've got you covered... or at least, covered in lines of code."
      keywords="Software development, Web development, Mobile app development, Custom software solutions, Full-stack development, Software architecture"
      canonicalUrl={process.env.GATSBY_DOMAIN}
      ogType="website"
      ogUrl={process.env.GATSBY_DOMAIN}
      ogTitle="Code Artist - Software Development"
      ogDescription="We turn coffee into code and create websites faster than the speed of light. Need a new website? We've got you covered... or at least, covered in lines of code."
      ogImage={`${process.env.GATSBY_DOMAIN}${props?.data?.allFile?.edges[0].node?.publicURL}`}
      ogLocale="en_gb"
      //ogVideo,
      //ogVideoUrl,
      //ogVideoSecureUrl,
      //ogVideoType,
      //ogVideoWidth,
      //ogVideoHeight,
      //ogImageUrl,
      //ogImageSecureUrl,
      //ogImageType,
      //ogImageWidth,
      //ogImageHeight,
      //fbAppId,
      //twCard,
      //twSite,
      //twCreator,
    />
  );
};
