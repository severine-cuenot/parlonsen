import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection(first: 1000) {
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
          fichier {
            handle
            id
            nomDuFichier
            url
          }
          dateArticle
        }
      }
    }
  }
    
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export default getPosts;
