import { gql } from 'apollo-boost';


const listArtickesQuery = gql`
    {
      listArtickes {
            name
            id
        }
    }
`;

export {
  listArtickesQuery, 
};