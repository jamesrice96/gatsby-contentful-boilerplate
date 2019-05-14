const path = require(`path`);

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === 'ContentfulPage') {
    console.log('pages fetching', node.internal.type);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  return graphql(`
    {
      allContentfulPage {
        edges {
          node {
            title
            slug
            pageTitleSeo
            pageDescriptionSeo
          }
        }
      }
    }
  `).then(result => {
    //For each page node
    result.data.allContentfulPage.edges.forEach(({ node }) => {
      //Create
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/default.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug
        }
      });
    });
  });
};
