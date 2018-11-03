<template>
  <div class="md-header-container">
    <left-side-nav/>
    <div class="md-header shadow">
      <div class="md-header-menu material-icons"
        @click="openSideNav">menu</div>
      <div class="md-header-title">MD Reader</div>
      <div class="md-header-search material-icons">search</div>
    </div>
  </div>
</template>

<script>
import LeftSideNav from './LeftSideNav.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    LeftSideNav
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState('nav', ['isOpen'])
  },
  methods: {
    ...mapMutations('nav', ['CHANGE_OPEN_STATE']),
    openSideNav() {
      this.$store.commit('nav/CHANGE_OPEN_STATE');
    }
  }
}
</script>

<style lang="scss">
@import 'Header.scss';
</style>
