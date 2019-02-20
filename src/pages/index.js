import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";


const ContentWrapper = styled.div`
  padding:30px;
  background-color: #B4D455;
`

const HomePage = () => (
  <StaticQuery
    query={graphql`
        query HomePage {
          contentfulHomePage {
            title
            date
            content {
              content
            }
            image {
              file {
                url
              }
            }
          }
        }
      `}
    render={({
      contentfulHomePage: {
        title,
        date,
        content: { content },
        image: {
          file: { url }
        }
      }
    }) => (
        <>
          <ContentWrapper>
            <h1>{title}</h1>
            <small>Created on {date}</small>
            <img src={url} />
            <p>{content}</p>
          </ContentWrapper>
        </>
      )}
  />
);

export default HomePage;