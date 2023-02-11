import React from "react";
import Layout from "../components/Layout";
import SimpleTemplate from "../modules/SimpleTemplate";

const CaseStudyTemplate = (props) => {
  console.log(props);
  return (
    <Layout>
      <SimpleTemplate templateContent={props?.pageContext?.caseStudy} />
    </Layout>
  );
};

export default CaseStudyTemplate;
