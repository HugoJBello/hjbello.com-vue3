<template>
  <div>
    <div class="container-posts">
      <br>
      <h1>{{$t("Posts list") }}</h1>
      <br>
      <br>

      <PostsList/>
    </div>
    
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import PostsList from '@/components/PostsList.vue'; // @ is an alias to /src

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components:{PostsList},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container-posts{
  margin: 0 auto;
  max-width: 900px;
}
</style>
