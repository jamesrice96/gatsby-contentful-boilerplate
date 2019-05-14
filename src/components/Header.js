import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulPage {
          edges {
            node {
              id
              title
              slug
              pageTitleSeo
              pageDescriptionSeo
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <nav>
          {data.allContentfulPage.edges.map(({ node }) => (
            <Link key={node.id} to={node.slug}>
              {node.title}
            </Link>
          ))}
        </nav>
      </header>
    )}
  />
);

export default Header;
