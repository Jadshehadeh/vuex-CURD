<template>
<v-app>
    <v-app-bar app color="primary" dark>
        <v-btn href="/" text>
            <span class="mr-2">Posts</span>
        </v-btn>
        <div class="d-flex align-center">
        </div>
        <v-spacer></v-spacer>
        <v-btn href="/add" text>
            <span class="mr-2">Add Post</span>
        </v-btn>
    </v-app-bar>
    <v-content>
        <router-view />
    </v-content>
</v-app>
</template>

<script>
export default {
    name: 'App',

    components: {},

    data: () => ({}),
};
</script>
