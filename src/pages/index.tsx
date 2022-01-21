import React, { useReducer } from "react";
import Layout from "../domain/Layout";
import Landing from "../domain/Landing";
import Services from "../domain/Services";
import CaseStudies from "../domain/CaseStudies";
import Technologies from "../domain/Technologies";
import { graphql } from "gatsby";
import { createContext } from "react";

interface IPageContext {
    pageData: {
        caseStudyData: any;
    };
    dispatchPageData: any;
}

const PageContextValue = {
    pageData: {
        caseStudyData: {},
    },
    dispatchPageData: {},
};

export const PageContext = createContext<IPageContext>(PageContextValue);
export { PageContextValue };

const IndexPage = ({ data: { allFile } }) => {
    console.log(allFile);

    const [pageData, dispatchPageData] = useReducer(
        (state: object, payload: any) => ({ ...state, ...payload }),
        {
            caseStudyData: allFile,
        }
    );

    return (
        <PageContext.Provider value={{ pageData, dispatchPageData }}>
            <Layout>
                <Landing />
                <Services />
                <CaseStudies />
                <Technologies />
            </Layout>
        </PageContext.Provider>
    );
};

export const indexPageData = graphql`
    query CaseStudyQuery {
        allFile(
            filter: {
                name: {
                    in: [
                        "case-study-1"
                        "case-study-2"
                        "case-study-3"
                        "case-study-4"
                        "case-study-5"
                        "case-study-6"
                        "case-study-7"
                        "case-study-8"
                    ]
                }
            }
        ) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

export default IndexPage;
