<template>
<div>                   
    <div v-for="post in posts" :key="post.id" >
        <v-card class="mx-auto mt-5" color="rgba(255,255,255, 1)" dark max-width="800">
            <v-card-title>
                <span class="title headline font-weight-bold t ">{{post.title}}</span>
            </v-card-title>
            <v-card-text class="font-weight-light t ">
                <div class="t" v-readMore:100="post.text "></div>
            </v-card-text>
            <v-card-actions>
                <v-list-item class="grow ">
                    <span class="t">Created by: <span id="bold">{{post.id}}</span></span>
                    <v-row align="center" justify="end">
                        <v-card-actions class="ml-1">
                            <v-btn color="warning" @click="editPost(post)" >EDIT</v-btn>
                            <v-btn  color="error" @click="deletePost(post)">DELETE</v-btn>
                        </v-card-actions>
                    </v-row>
                </v-list-item>
            </v-card-actions>
        </v-card>
    </div>
    <!-- <scroll-loader :loader-method="getImageList" :loader-disable="disable">
   <div>Loading...</div>
    </scroll-loader> -->
</div>
</template>

<script>
import PostDataService from "../services/PostDataService"

export default {
    data() {
        return {
          dialog: false,
            posts: [],
        };
    },
    methods: {
        retrievePosts() {
            PostDataService.getAll()
                .then(response => {
                    this.posts = response.data;
                })
                .catch(e => {
                    console.log(e);
                })
        },

      updatePost(post) {
      PostDataService.update(post.id, post)
        .then(response => {
          console.log(response.data);
          this.message = 'The post was updated successfully!';
          alert(this.message);
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePost(post) {
      console.log(post.id);
      PostDataService.delete(post.id)
        .then(response => {
          console.log(response.data);
          this.$router.go();
        })
        .catch(e => {
          console.log(e);
        });
    }

    },
    mounted() {
        this.retrievePosts();
    }
}
</script>
<style>
.t{
  color:black
}
#bold{
  font-weight: bolder;
}
</style>

 