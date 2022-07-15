import { gql } from '@apollo/client';

export const BIO_DELETE = gql`

mutation Bio_delete($id:uuid) {
    delete_mytable(where: {id: {_eq:$id}}) {
      returning {
        id
        marks
        name
        remarks
      }
    }
  }
  
  
  `