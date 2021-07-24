# AWS-React Template

To make things easier.

## Steps

#### Clone this repo.

#### Run the following commands:

- `npm install`
- `amplify init` (yes to above configuration, profile, default)
- `amplify add api` (GraphQL, edit the schema now, vs code)

#### Change the schema as you desire. At the moment, the code works with the Item schema (Attribute not necessary):

```
type Item @model {
    id: ID!
    name: String!
    attributes: [Attribute] @connection(keyName: "byItem", fields: ["id"])
}

type Attribute @model @key(name: "byItem", fields: ["itemID"]) {
    id: ID!
    title: String!
    itemID: ID!
    item: Item @connection(fields: ["itemID"])
}
```

#### Run the following commands:

- `amplify add auth` (default configuration, username)
- `amplify update auth` (Create or update Cognito user pool groups)
- `amplify push`

#### Hosting:

1. Go to [https://console.aws.amazon.com/amplify]
2. Click your app
3. Click Frontend environments
4. Click Github (or your repo of choice)
5. Click Connect branch
6. Choose your branch of choice
7. Choose your role or create one
8. Click next
9. Click Save and deploy
