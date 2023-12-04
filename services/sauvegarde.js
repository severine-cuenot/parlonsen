import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getPosts = async () => {
  const query = gql`
    query MyQuerySauvegarde {
      postsConnection {
        edges {
          node {
            auteur {
              id
              nom
              biographie
              photo {
                url
              }
            }
            createdAt
            slug
            titre
            extrait
            image {
              url
            }
            categories {
              nom
              slug
            }
            contenu {
              raw
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
