import { graphql, useStaticQuery } from "gatsby";

const useBackgroundImage = () => {
    const {
        file: {
            childImageSharp: { gatsbyImageData },
        },
    } = useStaticQuery(graphql`
        query LandingQuery {
            file(name: { eq: "LandingImage" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `);
    return gatsbyImageData;
};

export default useBackgroundImage;
