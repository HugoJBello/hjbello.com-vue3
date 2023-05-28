<template>
  <div class="hello">
    <h1>Home</h1>
     
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import FileReader from '@/components/FileReader.vue'; // @ is an alias to /src

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components:{FileReader}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
