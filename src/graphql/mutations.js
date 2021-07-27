/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createThing = /* GraphQL */ `
  mutation CreateThing(
    $input: CreateThingInput!
    $condition: ModelThingConditionInput
  ) {
    createThing(input: $input, condition: $condition) {
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
export const updateThing = /* GraphQL */ `
  mutation UpdateThing(
    $input: UpdateThingInput!
    $condition: ModelThingConditionInput
  ) {
    updateThing(input: $input, condition: $condition) {
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
export const deleteThing = /* GraphQL */ `
  mutation DeleteThing(
    $input: DeleteThingInput!
    $condition: ModelThingConditionInput
  ) {
    deleteThing(input: $input, condition: $condition) {
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
export const createAttribute = /* GraphQL */ `
  mutation CreateAttribute(
    $input: CreateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    createAttribute(input: $input, condition: $condition) {
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
export const updateAttribute = /* GraphQL */ `
  mutation UpdateAttribute(
    $input: UpdateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    updateAttribute(input: $input, condition: $condition) {
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
export const deleteAttribute = /* GraphQL */ `
  mutation DeleteAttribute(
    $input: DeleteAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    deleteAttribute(input: $input, condition: $condition) {
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
