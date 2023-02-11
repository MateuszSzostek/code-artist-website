import React from "react";
import Layout from "../components/Layout";
import SimpleTemplate from "../modules/SimpleTemplate";

const DemoTemplate = (props) => {
  console.log(props);
  return (
    <Layout>
      <SimpleTemplate templateContent={props?.pageContext?.demo} />
    </Layout>
  );
};

export default DemoTemplate;
