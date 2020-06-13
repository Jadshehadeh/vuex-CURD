<template>
<div class="d">
    <div v-for="(post, index) in posts " :key="index">
        <v-card class="mx-auto mt-5" color="rgba(255,255,255, 1)" dark max-width="800">
            <v-card-title>
                <span class="title headline font-weight-bold t ">{{post.title}}</span>
            </v-card-title>
            <v-card-text class="font-weight-light t ">
                <div v-if="post.text.length > 50">
                    <div class="t">{{post.text.slice(0, 50)}}
                        <router-link :to="{ name: 'post-details', params: { id: post.id }}">...Read more</router-link>
                    </div>
                </div>
                <div class="t" v-else="">{{post.text}}</div>
            </v-card-text>
            <v-card-actions>
                <v-list-item class="grow ">
                    <span class="t">ID: <span id="bold">{{post.id}}</span></span>
                    <v-row justify="end">
                        <v-card-actions class="ml-1">
                            <v-btn class="btn" color="grey" ><router-link :to="{ name: 'edit-post', params: { id: post.id }}">EDIT</router-link></v-btn>
                            <v-btn color="error" @click="deletePost(post)">DELETE</v-btn>
                        </v-card-actions>
                    </v-row>
                </v-list-item>
            </v-card-actions>
        </v-card>
    </div>
</div>
</template>

<script>

import {
    mapState
} from 'vuex';

export default {

    props: ['id'],

    computed: {
        ...mapState(['posts'])
    },

    mounted() {
        this.getPosts()
    },

    methods: {
        getPosts() {
            this.$store.dispatch('getPosts')
        },
        deletePost(post) {
            this.$store.dispatch('deletePost', {
                post
            })
        },
    },

}
</script>

<style>
.t {
    color: black
}
.btn{
  text-decoration: none;

}
#bold {
    font-weight: bolder;
}

@media only screen and (max-width: 600px) {
  .d{
      padding: 5%;
  }
}
</style>
