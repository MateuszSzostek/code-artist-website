import React from "react";
import Layout from "../components/Layout";
import Landing from "../modules/Landing";
import Services from "../modules/Content/Services";
import CaseStudies from "../modules/Content/CaseStudies";
import Technologies from "../modules/Content/Technologies";
import Products from "../modules/Content/Products/Products";
import AboutUs from "../modules/Content/AboutUs/AboutUs";

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
