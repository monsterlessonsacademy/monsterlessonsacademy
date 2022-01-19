const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInputObjectType,
} = require("graphql");
const Artists = require("../models/artists");

const artistType = new GraphQLObjectType({
  name: "Artist",
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID",
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the category.",
    },
  }),
});

const artistInputType = new GraphQLInputObjectType({
  name: "ArtistInput",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the category.",
    },
  },
});

const rootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createArtist: {
      type: artistType,
      args: {
        artist: {
          type: new GraphQLNonNull(artistInputType),
        },
      },
      resolve: async (root, args) => {
        console.log("artist", root, args.artist.name);
        try {
          const doc = await Artists.create(args.artist);
          return doc;
        } catch (err) {
          throw new Error(err.message);
        }
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
