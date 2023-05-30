<template>
  <div>
    <div class="container-posts">
      <h1>{{$t("Posts list") }}</h1>

      <PostsList/>
    </div>
    
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import PostsList from '@/components/PostsList.vue'; // @ is an alias to /src

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostsView',
  components:{PostsList},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container-posts{
  margin: 0 auto;
  padding-left: 10px;
}
</style>
