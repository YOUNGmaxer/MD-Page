<template>
  <div>
    <div>文件</div>
    <input type="file" @change="readFile"/>
    <section v-html="fileContent"></section>
  </div>
</template>

<script>
import showdown from 'showdown';

const options = {
  tables: true,
  tablesHeaderId: true,
  prefixHeaderId: true
}
const converter = new showdown.Converter(options);

export default {
  name: "Home",

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
