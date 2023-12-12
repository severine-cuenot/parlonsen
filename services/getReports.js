import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getReports = async () => {
  const query = gql`
  query MyQuery {
    assets(where: {compteRendu: true}) {
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

export default getReports;
