<template>
<form>
    <div class="fo">
        <v-text-field v-model="post.title" label="Title" required></v-text-field>
        <v-text-field v-model="post.text" label="Text" required></v-text-field>
        <v-row justify="end">
            <v-btn class="mr-3" :href="'/'">Cancel</v-btn>
            <v-btn class="mr-3" color="green" @click="submit">submit</v-btn>
        </v-row>
    </div>
</form>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            post: {
                title: '',
                text: '',
            }
        }
    },

    methods: {
        submit() {
            let uri = 'http://localhost:8000/api/posts/' + this.$route.params.id;
            axios.put(uri, this.post).then(() => {
                this.$router.push({
                    name: 'posts'
                })
            })

        },
    },
}
</script>

<style>
.fo {
    padding: 10%;
}
</style>
