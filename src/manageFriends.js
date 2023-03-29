export function manageFriends(state, action) {
  switch (action.type) {
    case "friends/add":
      return {
        friends: [...state.friends, action.payload],
      };
      case "friends/remove":
        return {
          friends: state.friends.filter((f) => f.id !== action.payload),
        };
        default:
          return state;
  }
}

// When our reducer receives "friends/add", it should return a new state with this friend object added to the friends array.
// When removing a friend, instead of an object, the action will include an id key with an integer. Find the friend with the matching id and remove them. Thought of in another way, the reducer is really returning a new state with an array of friends that includes everyone except the removed friend.