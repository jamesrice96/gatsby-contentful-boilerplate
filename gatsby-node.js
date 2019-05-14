exports.onCreateNode = ({ node }) => {
  if (node.internal.type === 'ContentfulPage') {
    console.log('pages fetching', node.internal.type);
  }
};

exports.createPages = ({ graphql, actions }) => {
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
    console.log(JSON.stringify(result, null, 4));
  });
};
