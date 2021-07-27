/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateThing = /* GraphQL */ `
  subscription OnCreateThing {
    onCreateThing {
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
export const onUpdateThing = /* GraphQL */ `
  subscription OnUpdateThing {
    onUpdateThing {
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
export const onDeleteThing = /* GraphQL */ `
  subscription OnDeleteThing {
    onDeleteThing {
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
export const onCreateAttribute = /* GraphQL */ `
  subscription OnCreateAttribute {
    onCreateAttribute {
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
export const onUpdateAttribute = /* GraphQL */ `
  subscription OnUpdateAttribute {
    onUpdateAttribute {
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
export const onDeleteAttribute = /* GraphQL */ `
  subscription OnDeleteAttribute {
    onDeleteAttribute {
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
