<template>
<div>                   
    <div v-for="post in posts" :key="post.id" >
        <v-card class="mx-auto mt-5" color="rgba(255,255,255, 1)" dark max-width="800">
            <v-card-title>
                <span class="title headline font-weight-bold t ">{{post.title}}</span>
            </v-card-title>
            <v-card-text class="font-weight-light t ">
                <div class="t" v-readMore:50="post.text "></div>
            </v-card-text>
            <v-card-actions>
                <v-list-item class="grow ">
                    <span class="t">Created by: <span id="bold">{{post.id}}</span></span>
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

</script>


<style>
.t{
  color:black
}
#bold{
  font-weight: bolder;
}
</style>