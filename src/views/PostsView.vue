<template>
  <div>
    <PostsList/>
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
</style>
