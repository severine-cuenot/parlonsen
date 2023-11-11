import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getPostContent = async () => {
  const query = gql`
    query PostContent {
      post {
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
  `;
  const result = await request(graphqlAPI, query);

  return result.post;
};

export default getPostContent;
