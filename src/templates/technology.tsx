import React from "react";
import Layout from "../components/Layout";
import SimpleTemplate from "../modules/SimpleTemplate";

const TechnologyTemplate = (props) => {
  console.log(props);
  return (
    <Layout>
      <SimpleTemplate templateContent={props?.pageContext?.technology} />
    </Layout>
  );
};

export default TechnologyTemplate;
