const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} = require("graphql");

const artistType = new GraphQLObjectType({
  name: "Artist",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The categoryId",
    },
    name: {
      type: GraphQLString,
      description: "The name of the category.",
    },
  }),
});

const artistInputType = new GraphQLObjectType({
  name: "ArtistInput",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "The name of the category.",
    },
  }),
});

const rootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createArtist: {
      type: artistType,
      args: {
        artist: new GraphQLNonNull(artistInputType),
      },
      resolve: async (_, { artist }) => {
        return await Artists.create(artist);
      },
    },
  },
});

const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    artists: {
      type: new GraphQLList(artistType),
      resolve: async () => {
        return [];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});
