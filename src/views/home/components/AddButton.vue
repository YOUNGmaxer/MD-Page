<template>
<label for="add-file-btn">
  <div class="md-addbtn">
    <input type="file" id="add-file-btn" @change="getFile"/>
  </div>
</label>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  
  methods: {
    ...mapMutations('nav', ['GET_CURRENT_CONTENT']),

    getFile(event) {
      // 获取选择的文件
      const file = event.target.files[0];
      let fileReader = new FileReader();
      fileReader.onload = event => {
        const result = event.target.result;
        this.$store.commit('nav/GET_CURRENT_CONTENT', result);
      }
      // 读取选择的文件
      fileReader.readAsText(file);
    }
  }
}
</script>

<style lang="scss">
@import 'AddButton.scss';
</style>
