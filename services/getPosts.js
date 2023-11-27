import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          createdAt
          extrait
          slug
          titre
          auteur {
            biographie
            nom
            id
          }
          categories {
            nom
            slug
          }
          contenu {
            raw
          }
          images {
            handle
            url
            titreDeLimage
          }
        }
      }
    }
  }  
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export default getPosts;
