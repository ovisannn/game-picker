import { gql, useQuery } from '@apollo/client'


const getUser = gql`
    query MyQuery {
        user {
        id
        id_detail
        password
        }
    }
`