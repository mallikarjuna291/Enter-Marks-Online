import { gql } from '@apollo/client';

export const BIO_MUTATION = gql`

mutation Bio_mutation($marks: Int = 10, $name: String = "", $remarks: String = "") {
    insert_mytable(objects: {marks: $marks, name: $name, remarks: $remarks}) {
      returning {
        marks
        name
        remarks
        id
      }
    }
  }
  `