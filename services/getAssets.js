import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getAssets = async () => {
  const query = gql`
  query MyQuery {
    assets(where: {photobox: true} first: 1000) {
      id
      nomDuFichier
      url
      handle
      height
      width
    }
  }
  
  `;
  const result = await request(graphqlAPI, query);

  return result.assets;
};

export default getAssets;
