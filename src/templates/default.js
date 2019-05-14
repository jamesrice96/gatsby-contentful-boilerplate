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
      <p>
        <b>{page.title}</b> has been dynamically created from the contentful
        api.
      </p>
      <p>
        <b>Page title:</b> {page.pageTitleSeo}
      </p>
      <p>
        <b>Page description:</b> {page.pageDescriptionSeo}
      </p>
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
