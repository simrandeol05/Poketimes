const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle laid an egg",
      body: "Squirtle laid an eggSquirtle laid an egg"
    },
    {
      id: "2",
      title: "Charmander laid an egg",
      body: " Charmander laid an egg Squirtle laid an eggSquirtle laid an egg"
    },
    {
      id: "3",
      title: "a helix fossil was found",
      body:
        "A helix fossil was found Charmander laid an egg Squirtle laid an eggSquirtle laid an egg"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
