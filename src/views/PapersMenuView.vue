<template>
  <SubmenuMultilanguage submenuName="papers"></SubmenuMultilanguage>
</template>

<script lang="ts">
import SubmenuMultilanguage from '@/components/SubmenuMultilanguage.vue';  
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PapersMenuView',
  components: { SubmenuMultilanguage }
});
</script>
