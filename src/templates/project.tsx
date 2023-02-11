import React from "react";
import Layout from "../components/Layout";
import SimpleTemplate from "../modules/SimpleTemplate";

const ProjectTemplate = (props) => {
  console.log(props);
  return (
    <Layout>
      <SimpleTemplate templateContent={props?.pageContext?.project} />
    </Layout>
  );
};

export default ProjectTemplate;
