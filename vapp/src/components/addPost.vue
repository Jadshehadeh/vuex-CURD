<template>
  <v-row justify="center right">
    <v-dialog v-model="dialog"  max-width="600px">
        <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on" class="  mt-5">Create Post</v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Title*"  id="title" v-model="title" name="text" required>title</v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Text*"  id="text" v-model="text" name="text" required>text</v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="savePost()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import PostDataService from "../services/PostDataService"

export default {
  name: "add-post",
  data() {
    return {
      dialog: false,
        id: null,
        title: "",
        text: "",
        
    }
  },
  methods: {
     savePost() {
      var data = {
        title: this.title,
        text: this.text
      };

      PostDataService.create(data)
        .then(response => {
          this.id = response.data.id;
          console.log(response.data);
          this.dialog = false;
          this.$router.go('/posts');
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>