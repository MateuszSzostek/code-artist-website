const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve("./src/templates/article.tsx");
  const projectTemplate = path.resolve("./src/templates/project.tsx");
  const demoTemplate = path.resolve("./src/templates/demo.tsx");
  const tipTemplate = path.resolve("./src/templates/tip.tsx");
  const technologyTemplate = path.resolve("./src/templates/technology.tsx");
  const caseStudyTemplate = path.resolve("./src/templates/case-study.tsx");
  const productTemplate = path.resolve("./src/templates/product.tsx");
  // Query for markdown nodes to use in creating pages.

  const allArticlesQuery = await graphql(
    `
      query allArticlesQuery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "article" } } }
        ) {
          edges {
            node {
              frontmatter {
                metaTags {
                  fbAppId
                  pageTitle
                  metaDescription
                  keywords
                  externalScripts
                  ogType
                  ogUrl
                  ogTitle
                  ogDescription
                  ogImage
                  ogLocale
                  ogVideo
                  ogVideoUrl
                  ogVideoSecureUrl
                  ogVideoType
                  ogVideoWidth
                  ogVideoHeight
                  ogImageUrl
                  ogImageSecureUrl
                  ogImageType
                  ogImageWidth
                  ogImageHeight
                  twCard
                  twSite
                  twCreator
                }
                id
                alternativeText
                relatedTechnologies
                similarContentIds
                description
                urlName
                title
                timestamp
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );

  const allTipsQuery = await graphql(
    `
      query allTipsQuery {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "tip" } } }) {
          edges {
            node {
              frontmatter {
                metaTags {
                  fbAppId
                  pageTitle
                  metaDescription
                  keywords
                  externalScripts
                  ogType
                  ogUrl
                  ogTitle
                  ogDescription
                  ogImage
                  ogLocale
                  ogVideo
                  ogVideoUrl
                  ogVideoSecureUrl
                  ogVideoType
                  ogVideoWidth
                  ogVideoHeight
                  ogImageUrl
                  ogImageSecureUrl
                  ogImageType
                  ogImageWidth
                  ogImageHeight
                  twCard
                  twSite
                  twCreator
                }
                id
                alternativeText
                relatedTechnologies
                similarContentIds
                description
                urlName
                title
                timestamp
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );

  const allDemosQuery = await graphql(
    `
      query allDemosQuery {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "demo" } } }) {
          edges {
            node {
              frontmatter {
                metaTags {
                  fbAppId
                  pageTitle
                  metaDescription
                  keywords
                  externalScripts
                  ogType
                  ogUrl
                  ogTitle
                  ogDescription
                  ogImage
                  ogLocale
                  ogVideo
                  ogVideoUrl
                  ogVideoSecureUrl
                  ogVideoType
                  ogVideoWidth
                  ogVideoHeight
                  ogImageUrl
                  ogImageSecureUrl
                  ogImageType
                  ogImageWidth
                  ogImageHeight
                  twCard
                  twSite
                  twCreator
                }
                id
                alternativeText
                relatedTechnologies
                similarContentIds
                description
                urlName
                title
                timestamp
                repoLink
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );

  const allProjectsQuery = await graphql(
    `
      query allProjectsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "project" } } }
        ) {
          edges {
            node {
              frontmatter {
                metaTags {
                  fbAppId
                  pageTitle
                  metaDescription
                  keywords
                  externalScripts
                  ogType
                  ogUrl
                  ogTitle
                  ogDescription
                  ogImage
                  ogLocale
                  ogVideo
                  ogVideoUrl
                  ogVideoSecureUrl
                  ogVideoType
                  ogVideoWidth
                  ogVideoHeight
                  ogImageUrl
                  ogImageSecureUrl
                  ogImageType
                  ogImageWidth
                  ogImageHeight
                  twCard
                  twSite
                  twCreator
                }
                id
                alternativeText
                relatedTechnologies
                similarContentIds
                description
                urlName
                title
                timestamp
                image {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );

  const allProductsQuery = await graphql(
    `
      query allProductsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "product" } } }
        ) {
          edges {
            node {
              frontmatter {
                metaTags {
                  fbAppId
                  pageTitle
                  metaDescription
                  keywords
                  externalScripts
                  ogType
                  ogUrl
                  ogTitle
                  ogDescription
                  ogImage
                  ogLocale
                  ogVideo
                  ogVideoUrl
                  ogVideoSecureUrl
                  ogVideoType
                  ogVideoWidth
                  ogVideoHeight
                  ogImageUrl
                  ogImageSecureUrl
                  ogImageType
                  ogImageWidth
                  ogImageHeight
                  twCard
                  twSite
                  twCreator
                }
                id
                alternativeText
                relatedTechnologies
                similarContentIds
                description
                urlName
                title
                timestamp
                image {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );

  const allTechnologiesQuery = await graphql(
    `
      query allTechnologiesQuery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "technology" } } }
        ) {
          edges {
            node {
              frontmatter {
                metaTags {
                  fbAppId
                  pageTitle
                  metaDescription
                  keywords
                  externalScripts
                  ogType
                  ogUrl
                  ogTitle
                  ogDescription
                  ogImage
                  ogLocale
                  ogVideo
                  ogVideoUrl
                  ogVideoSecureUrl
                  ogVideoType
                  ogVideoWidth
                  ogVideoHeight
                  ogImageUrl
                  ogImageSecureUrl
                  ogImageType
                  ogImageWidth
                  ogImageHeight
                  twCard
                  twSite
                  twCreator
                }
                id
                alternativeText
                relatedTechnologies
                similarContentIds
                description
                urlName
                title
                timestamp
                image {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );

  const allCaseStudyQuery = await graphql(
    `
      query allCaseStudyQuery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "case-study" } } }
        ) {
          edges {
            node {
              frontmatter {
                metaTags {
                  fbAppId
                  pageTitle
                  metaDescription
                  keywords
                  externalScripts
                  ogType
                  ogUrl
                  ogTitle
                  ogDescription
                  ogImage
                  ogLocale
                  ogVideo
                  ogVideoUrl
                  ogVideoSecureUrl
                  ogVideoType
                  ogVideoWidth
                  ogVideoHeight
                  ogImageUrl
                  ogImageSecureUrl
                  ogImageType
                  ogImageWidth
                  ogImageHeight
                  twCard
                  twSite
                  twCreator
                }
                id
                alternativeText
                relatedTechnologies
                similarContentIds
                description
                urlName
                title
                timestamp
                image {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );

  allArticlesQuery?.data?.allMarkdownRemark?.edges.forEach(({ node }) => {
    const path = node.frontmatter.urlName;
    const similarContent = allArticlesQuery.data.allMarkdownRemark.edges.filter(
      (el) =>
        node?.frontmatter?.similarContentIds?.includes(el.node.frontmatter.id)
    );

    const similarContentCards = similarContent?.map((el) => {
      return {
        id: el?.frontmatter?.id,
        title: el?.frontmatter?.title,
        description: el?.frontmatter?.description,
        image: el?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
        urlName: el?.frontmatter?.urlName,
        alternativeText: el?.frontmatter?.alternativeText,
      };
    });

    createPage({
      path: `/article/${path}`,
      component: articleTemplate,
      context: {
        article: node,
        pagePath: path,
        similarContentCards: similarContentCards,
      },
    });
  });

  allDemosQuery?.data?.allMarkdownRemark?.edges.forEach(({ node }) => {
    const path = node.frontmatter.urlName;
    const similarContent = allArticlesQuery.data.allMarkdownRemark.edges.filter(
      (el) =>
        node?.frontmatter?.similarContentIds?.includes(el.node.frontmatter.id)
    );

    const similarContentCards = similarContent?.map((el) => {
      return {
        id: el?.frontmatter?.id,
        title: el?.frontmatter?.title,
        description: el?.frontmatter?.description,
        image: el?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
        urlName: el?.frontmatter?.urlName,
        alternativeText: el?.frontmatter?.alternativeText,
      };
    });

    createPage({
      path: `/demo/${path}`,
      component: demoTemplate,
      context: {
        demo: node,
        pagePath: path,
        similarContentCards: similarContentCards,
      },
    });
  });

  allTipsQuery?.data?.allMarkdownRemark?.edges.forEach(({ node }) => {
    const path = node.frontmatter.urlName;
    const similarContent = allArticlesQuery.data.allMarkdownRemark.edges.filter(
      (el) =>
        node?.frontmatter?.similarContentIds?.includes(el.node.frontmatter.id)
    );

    const similarContentCards = similarContent?.map((el) => {
      return {
        id: el?.frontmatter?.id,
        title: el?.frontmatter?.title,
        description: el?.frontmatter?.description,
        image: el?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
        urlName: el?.frontmatter?.urlName,
        alternativeText: el?.frontmatter?.alternativeText,
      };
    });

    createPage({
      path: `/tip/${path}`,
      component: tipTemplate,
      context: {
        tip: node,
        pagePath: path,
        similarContentCards: similarContentCards,
      },
    });
  });

  allProjectsQuery?.data?.allMarkdownRemark?.edges.forEach(({ node }) => {
    const path = node.frontmatter.urlName;
    const similarContent = allArticlesQuery.data.allMarkdownRemark.edges.filter(
      (el) =>
        node?.frontmatter?.similarContentIds?.includes(el.node.frontmatter.id)
    );

    const similarContentCards = similarContent?.map((el) => {
      return {
        id: el?.frontmatter?.id,
        title: el?.frontmatter?.title,
        description: el?.frontmatter?.description,
        image: el?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
        urlName: el?.frontmatter?.urlName,
        alternativeText: el?.frontmatter?.alternativeText,
      };
    });

    createPage({
      path: `/project/${path}`,
      component: projectTemplate,
      context: {
        project: node,
        pagePath: path,
        similarContentCards: similarContentCards,
      },
    });
  });

  allProductsQuery?.data?.allMarkdownRemark?.edges.forEach(({ node }) => {
    const path = node.frontmatter.urlName;
    const similarContent = allArticlesQuery.data.allMarkdownRemark.edges.filter(
      (el) =>
        node?.frontmatter?.similarContentIds?.includes(el.node.frontmatter.id)
    );

    const similarContentCards = similarContent?.map((el) => {
      return {
        id: el?.frontmatter?.id,
        title: el?.frontmatter?.title,
        description: el?.frontmatter?.description,
        image: el?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
        urlName: el?.frontmatter?.urlName,
        alternativeText: el?.frontmatter?.alternativeText,
      };
    });

    createPage({
      path: `/product/${path}`,
      component: productTemplate,
      context: {
        product: node,
        pagePath: path,
        similarContentCards: similarContentCards,
      },
    });
  });

  allTechnologiesQuery?.data?.allMarkdownRemark?.edges.forEach(({ node }) => {
    const path = node.frontmatter.urlName;
    const similarContent = allArticlesQuery.data.allMarkdownRemark.edges.filter(
      (el) =>
        node?.frontmatter?.similarContentIds?.includes(el.node.frontmatter.id)
    );

    const similarContentCards = similarContent?.map((el) => {
      return {
        id: el?.frontmatter?.id,
        title: el?.frontmatter?.title,
        description: el?.frontmatter?.description,
        image: el?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
        urlName: el?.frontmatter?.urlName,
        alternativeText: el?.frontmatter?.alternativeText,
      };
    });

    createPage({
      path: `/technology/${path}`,
      component: technologyTemplate,
      context: {
        technology: node,
        pagePath: path,
        similarContentCards: similarContentCards,
      },
    });
  });

  allCaseStudyQuery?.data?.allMarkdownRemark?.edges.forEach(({ node }) => {
    const path = node.frontmatter.urlName;
    const similarContent = allArticlesQuery.data.allMarkdownRemark.edges.filter(
      (el) =>
        node?.frontmatter?.similarContentIds?.includes(el.node.frontmatter.id)
    );

    const similarContentCards = similarContent?.map((el) => {
      return {
        id: el?.frontmatter?.id,
        title: el?.frontmatter?.title,
        description: el?.frontmatter?.description,
        image: el?.frontmatter?.image?.childImageSharp?.gatsbyImageData,
        urlName: el?.frontmatter?.urlName,
        alternativeText: el?.frontmatter?.alternativeText,
      };
    });

    createPage({
      path: `/case-study/${path}`,
      component: caseStudyTemplate,
      context: {
        caseStudy: node,
        pagePath: path,
        similarContentCards: similarContentCards,
      },
    });
  });
};
