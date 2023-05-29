<template>
  <SubmenuMultilanguage submenuName="research"></SubmenuMultilanguage>
</template>

<script lang="ts">
import SubmenuMultilanguage from '@/components/SubmenuMultilanguage.vue';  
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ResearchMenuView',
  components: { SubmenuMultilanguage }
});
</script>
