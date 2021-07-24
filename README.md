# AWS-React Template

To make things easier. Includes AppSync, Cognito, and DynamoDB. Includes redux, routing, and scss for styling.

## Steps

#### Use this repo as a template to build a new one.

#### Delete the amplify folder.

It is using the data from this template, so you want to get rid of it to input your own.

### Run the following commands:

- `npm install`
- `amplify init` (yes to above configuration, profile, default)
- `amplify add auth` (default configuration, username)
- `amplify update auth` (Create or update Cognito user pool groups)
- `amplify add api` (GraphQL, edit the schema now, vs code)

#### Change the schema as you desire. The path is `amplify/backend/api/awsreacttemplate/schema.graphql`. At the moment, the code works with Item (Attribute not necessary):

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

#### Then you can just go ahead and:

- `amplify push`

#### Hosting:

1. Go to [https://console.aws.amazon.com/amplify]
2. Click your app
3. Click Frontend environments
4. Click Github (or your repo of choice)
5. Click Connect branch
6. Choose your branch of choice
7. Choose your role or create one
8. Add the amplify.yml file to the root directory of your project, changing the commands to `npm` as follows:
```
version: 1
backend:
  phases:
    build:
      commands:
        - '# Execute Amplify CLI with the helper script'
        - amplifyPush --simple
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
9. Click Next
10. Click Save and deploy
