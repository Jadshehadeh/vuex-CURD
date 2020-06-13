
import Vue from "vue";
import Vuex from "vuex";
import http from "../http-common"; 
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    posts:[],
    post: []
 },
 methods: {},
 getters: {},
 mutations: {
     SET_POSTS(state, posts){
         state.posts = posts;
     },
     SET_POST(state, post){
        state.post = post;
    },
    DELETE_POST(state, {post}){
        state.posts = state.posts.filter(p => p.id != post.id)
    }
 },
 actions: {

    async getPosts({commit}) {
        let response = await http.get("/posts");
        let posts = response.data;
        commit('SET_POSTS', posts);
           
    },
    async getPost({commit}, id) {
        let response = await http.get(`/posts/${id}`);
        let post = response.data;
        commit('SET_POST', post);

    },

    async deletePost({commit}, {post}) {
        let confirmed = confirm(`Are you sure you want to delete post with title: ${post.title} ?`)
        if( confirmed){
            await http.delete(`/posts/${post.id}`);
            commit('DELETE_POST', {post})
        }
    }

}

})



