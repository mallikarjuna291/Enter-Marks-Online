import { gql } from '@apollo/client';


export const BIO_QUERY = gql`
query Bio_query {
    mytable(order_by: {marks: asc}) {
      id
      marks
      name
      remarks
    }
  }
  `