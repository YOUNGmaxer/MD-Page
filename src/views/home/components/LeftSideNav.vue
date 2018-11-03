<template>
  <aside class="md-leftside"
    :class="{ 'md-leftside-mask': isOpen }"
    @click="hideSideNav">
    <nav class="md-leftside-nav"
      @click="keepSideNav"></nav>
  </aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {

  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState('nav', ['isOpen'])
  },
  methods: {
    ...mapMutations('nav', [
      'CHANGE_OPEN_STATE',
      'KEEP_OPEN_STATE'
    ]),
    hideSideNav() {
      this.$store.commit('nav/CHANGE_OPEN_STATE');
    },
    keepSideNav() {
      // this.$store.commit('nav/KEEP_OPEN_STATE');
      console.log('hello');
    }
  }
}
</script>

<style lang="scss">
@import 'LeftSideNav.scss';
</style>
