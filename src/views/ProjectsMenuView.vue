<template>
  <SubmenuMultilanguage submenuName="cool_projects"></SubmenuMultilanguage>
</template>

<script lang="ts">
import SubmenuMultilanguage from '@/components/SubmenuMultilanguage.vue';  
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectsMenuView',
  components: { SubmenuMultilanguage }
});
</script>
