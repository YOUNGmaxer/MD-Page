<template>
<label for="add-file-btn">
  <div class="md-addbtn">
    <input type="file" id="add-file-btn" @change="getFile"/>
  </div>
</label>
</template>

<script>
import showdown from 'showdown';
import { mapActions } from 'vuex';

export default {

  data() {
    return {
      showdownOpt: {
        tables: true,
      }
    }
  },
  
  methods: {
    ...mapActions('nav', ['openNewFile']),

    getFile(event) {
      const converter = new showdown.Converter(this.showdownOpt);

      // 获取选择的文件
      const file = event.target.files[0];

      let fileReader = new FileReader();
      fileReader.onload = ((_file) => {
        // TODO 暂时只接受 MarkDown 文件
        if (_file.name.slice(-3) !== '.md') {
          alert('文件格式不符');
          return;
        }
        return (event) => {
          const result = event.target.result;
          const content = converter.makeHtml(result);
          // 存储最近打开文件的信息
          const fileInfo = {
            name: _file.name,
            lastOpenTime: Date.now(),
            content: content
          }
          this.$store.dispatch('nav/openNewFile', fileInfo);
        }
      })(file);

      fileReader.onerror = (event, err) => {
        console.log(event, err);
      };
          
      // 读取选择的文件
      fileReader.readAsText(file);
    }
  }
}
</script>

<style lang="scss">
@import 'AddButton.scss';
</style>
