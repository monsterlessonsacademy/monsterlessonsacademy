const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLBoolean,
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
      resolve: async (_, args) => {
        try {
          return await Artists.create(args.artist);
        } catch (err) {
          throw new Error(err.message);
        }
      },
    },
    updateArtist: {
      type: artistType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        artist: {
          type: new GraphQLNonNull(artistInputType),
        },
      },
      resolve: async (_, args) => {
        try {
          return await Artists.update(args.id, args.artist);
        } catch (err) {
          throw new Error(err.message);
        }
      },
    },
    deleteArtist: {
      type: GraphQLBoolean,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, args) => {
        try {
          await Artists.delete(args.id);
          return true;
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
        try {
          return await Artists.all();
        } catch (err) {
          return new Error(err.message);
        }
      },
    },
    artist: {
      type: artistType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, args) => {
        try {
          return await Artists.findById(args.id);
        } catch (err) {
          return new Error(err.message);
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});
