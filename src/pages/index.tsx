import React from "react";
import Layout from "../components/Layout";
import Landing from "../modules/Landing";
import Services from "../modules/Content/Services";
import CaseStudies from "../modules/Content/CaseStudies";
import Technologies from "../modules/Content/Technologies";
import Products from "../modules/Content/Products/Products";
import AboutUs from "../modules/Content/AboutUs/AboutUs";
import { graphql } from "gatsby";
import SEO from "../components/SEO/SEO";
import { pagePrefix } from "../utils";

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <Services />
      <CaseStudies />
      <Technologies />
      <Products />
      <AboutUs />
    </Layout>
  );
};

export default IndexPage;

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
  console.log(props);
  console.log(process.env.GATSBY_DOMAIN);
  return (
    <SEO
      title="Code Artist - Software Development"
      description="We turn coffee into code and create websites faster than the speed of light. Need a new website? We've got you covered... or at least, covered in lines of code."
      keywords="Software development, Web development, Mobile app development, Custom software solutions, Full-stack development, Software architecture"
      canonicalUrl={process.env.GATSBY_DOMAIN?.replace(pagePrefix, "")}
      ogType="website"
      ogUrl={process.env.GATSBY_DOMAIN?.replace(pagePrefix, "")}
      ogTitle="Code Artist - Software Development"
      ogDescription="We turn coffee into code and create websites faster than the speed of light. Need a new website? We've got you covered... or at least, covered in lines of code."
      ogImage={`${process.env.GATSBY_DOMAIN?.replace(pagePrefix, "")}${
        props?.data?.allFile?.edges[0].node?.publicURL
      }`}
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
