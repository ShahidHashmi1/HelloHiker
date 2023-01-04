const { AuthenticationError } = require('apollo-server-express');
const { Profile, Trails } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return Profile.find();
    },

    user: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.profile) {
        return Profile.findOne({ _id: context.profile._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const profile = await Profile.create( args );
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addTrail: async (parent, { profileId, trail }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.profile) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { trails: trail },
          },
          {
            new: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, {profileId}, context) => {
      if (context.profile) {
        return Profile.findOneAndDelete({ _id: profileId });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    removeTrail: async (parent, { profileId, trail }, context) => {
      if (context.profile) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { $pull: { trails: trail } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    newTrail: async (parent, args, context) => {
      if (context.profile) {
      const trail = await Trails.create(args)
      return trail;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;
