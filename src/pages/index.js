import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const ContentWrapper = styled.div`
  padding: 30px;
  background-color: #b4d455;
`;

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulPage {
          title
          pageTitleSeo
          pageDescriptionSeo
        }
      }
    `}
    render={({
      contentfulPage: { title, pageTitleSeo, pageDescriptionSeo }
    }) => (
      <>
        <ContentWrapper>
          <h1>{title}</h1>
          <p>{pageTitleSeo}</p>
          <p>{pageDescriptionSeo}</p>
        </ContentWrapper>
      </>
    )}
  />
);

export default HomePage;
