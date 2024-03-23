//storage API endpoints
export const API_BASE = "https://v2.api.noroff.dev";
export const API_KEY = "c728c773-18ef-47ce-a8be-445c303dc69b";

export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_AUTH = "/auth";

export const API_POSTS = "/social/posts";

export const API_POSTS_PROFILE = (name) => `/social/profiles/${name}/posts/?_author=true&_comments=true&_reactions=true`;

export const API_POST_FOLLOWERS_PROFILE = (name) => `/social/profiles/${name}`;

// export const API_GET_POSTS_PARAMS = "?_author=true&limit=10"; // used for reload page API quickly in the development
export const API_GET_POSTS_PARAMS = "?_author=true";

export const API_SEARCH = "/social/posts/search?_author=true&q=";
