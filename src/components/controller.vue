<template>
    <div id="controller">
        <el-form>
            <el-form-item label="Domain">
                <el-input v-model="currentDomain.domain"></el-input>
            </el-form-item>
        </el-form>
        <el-button id="showMarkdown" v-on:click="preview">markdown</el-button>
        <el-button id="enter" v-on:click="EnterDomain">Enter</el-button>        
    </div>
</template>

<script>
export default {
  props: ['currentDomain'],
  methods: {
    preview() {
      this.$emit('preview')
    },
    EnterDomain() {
      console.log(this.currentDomain.domain)
      document.getElementById('displayDomain').src =
        'http://' + `${this.currentDomain.domain}`
    }
  }
}
</script>

<style lang="scss">
#controller {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
