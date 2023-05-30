<template>
  <div>
    <div class="container-posts">
      <br>
      <div class="card text-dark   info-card" >
        <div class="card-body">
          <h5 class="card-title">{{$t("Welcome to my page")}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">hjbello.com</h6>
          <p class="card-text">
            {{ $t("intro") }}
          </p>
          <RouterLink :to="'/about'" class="card-link">{{$t('More about me')}}</RouterLink>
        </div>
      </div>
      
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

.info-card{
  margin: 0 auto;
  max-width: 500px;
  border-width: 6px;
}
</style>
