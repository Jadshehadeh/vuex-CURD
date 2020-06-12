<template>
<div>
    <div v-for="(post, index) in posts" :key="index">
        <v-card class="mx-auto mt-5" color="grey" dark max-width="900">
            <v-card-title>
                <span class="title headline font-weight-bold">{{post.title}}</span>
            </v-card-title>
            <v-card-text class="font-weight-light">
                <div v-readMore:100="post.text"></div>
            </v-card-text>
            <v-card-actions>
                <v-list-item class="grow">
                    <span>created by {{post.id}}</span>
                    <v-row align="center" justify="end">
                        <v-icon>mdi-heart</v-icon>
                        <span class="subheading ml-4">{{post.likes}}</span>
                        <v-card-actions class="ml-1">
                            <v-btn :href="'./post/'+ post.id" color="warning" @click="editItem(item)">EDIT</v-btn>
                            <v-btn color="error" @click="deleteItem(item)">DELETE</v-btn>
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
            posts: [],
            currentPost: null,
            currentIndex: -1
        };
    },
    methods: {
        retrievePosts() {
            PostDataService.getAll()
                .then(response => {
                    this.posts = response.data;
                    // console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                })
        },

        // async created() {
        //     try {
        //         const res = await axios.get(`http://localhost:8000/api/posts`);

        //         this.posts = res.data;
        //     } catch (e) {
        //         console.log(e);
        //     }
        // },

    },
    mounted() {
        this.retrievePosts();
    }
}
</script>

// editItem(item) {
    //     this.editedIndex = this.posts.indexOf(item)
    //     this.editedItem = Object.assign({}, item)
    //     this.dialog = true
    // },

    // deleteItem(item) {
    //     const index = this.desserts.indexOf(item)
    //     confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    // },

    // close() {
    //     this.dialog = false
    //     this.$nextTick(() => {
    //         this.editedItem = Object.assign({}, this.defaultItem)
    //         this.editedIndex = -1
    //     })
    // },

    // save() {
    //     if (this.editedIndex > -1) {
    //         Object.assign(this.desserts[this.editedIndex], this.editedItem)
    //     } else {
    //         this.desserts.push(this.editedItem)
    //     }
    //     this.close()
    // },




  <!-- <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Posts List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(post, index) in posts"
          :key="index"
          @click="setActivePost(post, index)"
        >
          {{ post.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllPosts">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPost">
        <h4>Post</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentPost.title }}
        </div>
        <div>
          <label><strong>Text:</strong></label> {{ currentPost.text }}
        </div>
        

        <a class="badge badge-warning"
          :href="'/posts/' + currentPost.id"
        >
          Edit
        </a>
      </div>
    </div>
  </div> -->


<script>
import PostDataService from "../services/PostDataService"

export default {
  name: "posts-list",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrievePosts() {
      PostDataService.getAll()
        .then(response => {
          this.posts = response.data;
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    setActivePost(post, index) {
      this.currentPost = post;
      this.currentIndex = index;
    },

    removeAllPosts() {
      PostDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      PostDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievePosts();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>