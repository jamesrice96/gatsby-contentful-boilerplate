import React from 'react';
import { graphql } from 'gatsby';
//Components
import Header from '../components/Header';

export default ({ data }) => {
  const page = data.contentfulPage;
  return (
    <>
      <Header />
      <h1>Hello from the default template</h1>
      <p>{page.title}</p>
      <p>{page.pageTitleSeo}</p>
      <p>{page.pageDescriptionSeo}</p>
    </>
  );
};

export const query = graphql`
  query {
    contentfulPage {
      title
      pageTitleSeo
      pageDescriptionSeo
    }
  }
`;
