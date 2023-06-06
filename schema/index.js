import {GraphQLSchema, GraphQLObjectType} from "graphql";
import AccountQuery from "./queries/accounts.query.js";
import AccountMutation from "./mutations/accounts.mutation.js";

const Schema = new GraphQLSchema({
    types: null,
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            ...AccountQuery
        }
    }),
    mutation: new GraphQLObjectType({
        name: "RootMutation",
        fields:{
            ...AccountMutation
        }
    })
});

export default Schema;