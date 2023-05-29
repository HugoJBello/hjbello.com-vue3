<template>
  <SubmenuMultilanguage submenuName="docencia"></SubmenuMultilanguage>
</template>

<script lang="ts">
import SubmenuMultilanguage from '@/components/SubmenuMultilanguage.vue';  
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TeachingMenuView',
  components: { SubmenuMultilanguage }
});
</script>
