<template>
<div class="d">
    <v-card class="mx-auto " color="rgba(255,255,255, 1)" dark max-width="800">
        <v-card-title>
            <span class="title headline font-weight-bold t ">{{post.title}}</span>
        </v-card-title>
        <v-card-text class="font-weight-light t ">
            <div class="t">{{post.text}}</div>
        </v-card-text>
        <v-card-actions>
            <v-list-item class="grow ">
                <span class="t">ID: <span id="bold">{{post.id}}</span></span>
            </v-list-item>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'

export default {
    props: ['id'],
    computed: {
        ...mapState(['post'])
    },
    mounted() {
        this.getPost(this.id);
    },
    methods: {
        ...mapActions(['getPost'])
    }
}
</script>

<style>
.t {
    color: black
}

#bold {
    font-weight: bolder;
}
.d{
    padding: 20%;
}


@media only screen and (max-width: 600px) {
  .d{
      padding: 5%;
  }
}
</style>
