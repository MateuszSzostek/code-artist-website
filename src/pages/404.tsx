import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

export const query = graphql`
  query indexPageQuery {
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
  return (
    <SEO
      title="Code Artist - Software Development"
      description="We turn coffee into code and create websites faster than the speed of light. Need a new website? We've got you covered... or at least, covered in lines of code."
      keywords="Software development, Web development, Mobile app development, Custom software solutions, Full-stack development, Software architecture"
      canonicalUrl={process.env.DOMAIN}
      ogType="website"
      ogUrl={process.env.DOMAIN}
      ogTitle="Code Artist - Software Development"
      ogDescription="We turn coffee into code and create websites faster than the speed of light. Need a new website? We've got you covered... or at least, covered in lines of code."
      ogImage={`${process.env.DOMAIN}${props?.data?.allFile?.edges[0].node?.publicURL}`}
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
