<template>
  <SubmenuMultilanguage submenuName="about"></SubmenuMultilanguage>
</template>

<script lang="ts">
import SubmenuMultilanguage from '@/components/SubmenuMultilanguage.vue';  
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutMenuView',
  components: { SubmenuMultilanguage }
});
</script>
