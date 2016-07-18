import session from './models/username';
import Posts from '.collections/posts';

let store = {
  session: session,
  posts: new Posts()
};

export default store;
