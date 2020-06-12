<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="./posts"
        text
      >
        <span class="mr-2">Posts</span>
        
      </v-btn>
      <v-btn
        href="./add"
        text
      >
        <span class="mr-2">Add Post</span>
        
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <!-- <Dialog/> -->
      <addPost />
      <router-view />
      <!-- <Post /> -->
      <!-- <posts/> -->
      <!-- <Login/> -->
    </v-content>
  </v-app>
</template>



<script>
// import HelloWorld from './components/HelloWorld';
import addPost from './components/addPost';
// import Dialog from './components/Dialog';
// import Login from './components/Login';


export default {
  name: 'App',

  components: {
    addPost,
    // Dialog
    // HelloWorld,
    // Login
  },

  data: () => ({
  }),
};
</script>