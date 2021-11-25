import { createStore } from 'vuex'

const store = createStore({
    state: {
        posts: [],
        currentPost: {},
        loading: true,
        api: {
            href: 'https://my-json-server.typicode.com/PiotrGasiorek/blog-app/posts/'
        }
    },

    mutations: {
        deletePost: (state, post) => {
            fetch(state.api.href + post.id, {
                method: 'DELETE',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                },
            });
            state.posts.splice(state.posts.indexOf(post), 1);
        },

        getBlog: state => {
            fetch(state.api.href)
              .then((response) => response.json())
              .then((response) => {
                state.posts = response;
              })
              .catch(error => console.log(error));
        },

        getPost: (state, id) => {
            let noPosts = !state.posts;
            let noSuchPost = state.posts.filter(post => post.id === id).length === 0;

            if(noPosts || noSuchPost || state.currentPost){
                fetch(state.api.href + id)
                    .then((response) => response.json())
                    .then((response) => {
                        state.currentPost = [response];
                        state.loading = false;
                    })
                    .catch(error => console.log(error));
            }
        },
    },

    actions: {
        deletePost: (context, post) => {
            context.commit('deletePost', post);
        },

        getBlog: context => {
            context.commit('getBlog');
        },

        getPost: (context, id) => {
            context.commit('getPost', id);
        },
    },

    getters: {
        getPosts: state => {
            return state.posts
        },
    }
});

export default store;