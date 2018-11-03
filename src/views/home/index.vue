<template>
  <div>
    <readerHeader></readerHeader>
    <el-button>默认按钮</el-button>
    <!-- <input type="file" @change="readFile"/> -->
    <section v-html="fileContent"></section>
  </div>
</template>

<script>
import showdown from 'showdown';
import readerHeader from './components/Header.vue';

const options = {
  tables: true,
  tablesHeaderId: true,
  prefixHeaderId: true
}
const converter = new showdown.Converter(options);

export default {
  name: "Home",

  components: {
    readerHeader
  },

  data() {
    return {
      fileContent: ''
    }
  },

  methods: {
    readFile(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      // onload 表示读取成功后触发
      reader.onload = e => {
        this.fileContent = converter.makeHtml(e.target.result);
      };
      reader.readAsText(file);
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
