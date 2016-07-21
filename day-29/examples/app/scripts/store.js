// import Session from './models/session';
import BlogPosts from './collections/blogPosts';
// import Users from './collections/users';

// store keeps track of 'application state', or the up to date data represented by our application
let store = {
  // session: new Session(),
  blogPosts: new BlogPosts(),
  // this would be a more fancy way:
  // blogPosts: {
  //   fetching: false,
  //   totalCount: 0,
  //   currentPage: 0,
  //   totalPages: 50,
  //   postList: new BlogPosts()
  // },
  // users: new Users()
};

export default store;
