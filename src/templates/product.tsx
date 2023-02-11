import React from "react";
import Layout from "../components/Layout";
import SimpleTemplate from "../modules/SimpleTemplate";

const ProductTemplate = (props) => {
  console.log(props);
  return (
    <Layout>
      <SimpleTemplate templateContent={props?.pageContext?.product} />
    </Layout>
  );
};

export default ProductTemplate;
