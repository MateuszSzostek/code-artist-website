import React from "react";
import Layout from "../components/Layout";
import SimpleTemplate from "../modules/SimpleTemplate";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const ArticleTemplate = (props) => {
  console.log(props);
  return (
    <Layout>
      <SimpleTemplate templateContent={props?.pageContext?.article} />
    </Layout>
  );
};

export default ArticleTemplate;

export const query = graphql`
  query articlePageQuery {
    allFile(filter: { name: { eq: "ca-logo" }, extension: { eq: "png" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

export const Head = (props) => {
  console.log(props);
  console.log(process.env.GATSBY_DOMAIN);
  return (
    <SEO
      title="Code Artist - Software Development"
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
