import React, { useReducer } from "react";
import Layout from "../domain/Layout";
import Landing from "../domain/Landing";
import Services from "../domain/Services";
import CaseStudies from "../domain/CaseStudies";
import Technologies from "../domain/Technologies";
import Products from "../domain/Products";
import AboutUs from "../domain/AboutUs";
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
                <Products />
                <AboutUs />
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
                        gatsbyImageData(
                            transformOptions: {
                                duotone: {
                                    highlight: "#000000"
                                    opacity: 50
                                    shadow: "#000000"
                                }
                            }
                        )
                    }
                }
            }
        }
    }
`;

export default IndexPage;
