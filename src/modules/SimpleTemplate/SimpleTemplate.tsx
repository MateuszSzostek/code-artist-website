import React from "react";
import "./styles.css";

import ContentLanding from "../ContentLanding";
import ContentEntertainment from "../ContentEntertainment";
import { ISimpleTemplate } from "../../types/modules";

const SimpleTemplate = (props: ISimpleTemplate) => {
  return (
    <>
      <ContentLanding />
      <ContentEntertainment templateContent={props.templateContent} />
    </>
  );
};

export default SimpleTemplate;
