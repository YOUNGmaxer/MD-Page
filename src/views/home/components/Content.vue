<template>
  <main class="md-content" v-html="currentContent">
  </main>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('nav', ['currentContent'])
  }
}
</script>

<style lang="scss">
@import 'Content.scss';
</style>
