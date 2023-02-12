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

const PrivacyPolicy = () => {
  return <Layout></Layout>;
};

export default PrivacyPolicy;

export const query = graphql`
  query privacyPolicyPageQuery {
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
