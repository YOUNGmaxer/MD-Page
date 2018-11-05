<template>
  <aside class="md-leftside"
    :class="{ 'md-leftside-mask': isOpen }"
    @click="hideSideNav">
    <nav class="md-leftside-nav"
      :class="{ 'md-leftside-nav--open': isOpen }"
      @click.stop>
      <section class="md-last-section">
        <h2 class="md-last-header">最近打开</h2>
        <ul class="md-last-list"
          v-for="file of lastFiles"
          :key="file.lastOpenTime">
          <li class="md-last-item">{{ file.name }}</li>
        </ul>
      </section>
    </nav>
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
    ...mapState('nav', ['isOpen', 'lastFiles'])
  },
  methods: {
    ...mapMutations('nav', [
      'CHANGE_OPEN_STATE'
    ]),
    hideSideNav() {
      this.$store.commit('nav/CHANGE_OPEN_STATE');
    }
  }
}
</script>

<style lang="scss">
@import 'LeftSideNav.scss';
</style>
