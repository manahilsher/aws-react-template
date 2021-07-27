/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getThing = /* GraphQL */ `
  query GetThing($id: ID!) {
    getThing(id: $id) {
      id
      name
      attributes {
        items {
          id
          title
          thingID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listThings = /* GraphQL */ `
  query ListThings(
    $filter: ModelThingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        attributes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAttribute = /* GraphQL */ `
  query GetAttribute($id: ID!) {
    getAttribute(id: $id) {
      id
      title
      thingID
      thing {
        id
        name
        attributes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAttributes = /* GraphQL */ `
  query ListAttributes(
    $filter: ModelAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttributes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        thingID
        thing {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
