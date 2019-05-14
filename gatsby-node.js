exports.onCreateNode = ({ node }) => {
  //We are specifically looking for a page node
  if (node.internal.type === 'ContentfulPage') {
    console.log('pages fetching', node.internal.type);
  }
};
