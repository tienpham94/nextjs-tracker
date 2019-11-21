import { ApolloServer, gql } from "apollo-server-micro";
import "../../lib/mongoose"

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: () => {
      return "Hello there!"
    }
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
