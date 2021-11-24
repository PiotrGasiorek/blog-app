import { createStore } from 'vuex'

const store = createStore({
    state: {
        posts: [],
        api: {
            href: 'https://my-json-server.typicode.com/PiotrGasiorek/blog-app/posts'
        }
    },

    mutations: {
        deletePost: (state, post) => {
            fetch(`${state.api.href}${post.id}`, {
                method: 'DELETE',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                },
            });
            state.posts.splice(state.posts.indexOf(post), 1);
        },

        setPosts: state => {
            fetch(state.api.href)
              .then((response) => response.json())
              .then((response) => {
                state.posts = response;
              })
              .catch(error => console.log(error));
        },
    },

    actions: {
        deletePost: (context, post) => {
            context.commit('deletePost', post);
        },

        setPosts: (context) => {
            context.commit('setPosts');
        },
    },

    getters: {
        getPosts: state => {
            return state.posts
        },
    }
});

export default store;