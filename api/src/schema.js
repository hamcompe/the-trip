const { makeExecutableSchema } = require('graphql-tools')

const { resolvers } = require('./resolvers')

const typeDefs = `
type Channel {
  id: ID!
  name: String
  messages: [Message]!
}

input MessageInput{
  channelId: ID!
  text: String
}

type Message {
  id: ID!
  text: String
}

# This type specifies the entry points into our API
type Query {
  channels: [Channel]    # "[]" means this is a list of channels
  channel(id: ID!): Channel
}

# The mutation root type, used to define all mutations
type Mutation {
  addChannel(name: String!): Channel
  addMessage(message: MessageInput!): Message
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
module.exports = { schema }
