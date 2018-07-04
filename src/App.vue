<template>
  <div id="app">
    <display v-bind:currentDomain="currentDomain" class="display"/>
    <editor v-bind:class="{previewMode:previewMode}"/>
    <controller v-bind:currentDomain="currentDomain"/>
    <el-button id="exitMarkdown" v-on:click="exitMarkdown">Exit</el-button>    
  </div>
</template>

<script>
import controller from './components/controller'
import display from './components/display'
import editor from './components/editor'

let pageWidth = window.innerWidth
styleTag.innerHTML = 'html{font-size:' + pageWidth / 10 + 'px;}'

export default {
  data: function() {
    return {
      previewMode: false,
      currentDomain: [
        {
          domain: ''
        }
      ]
    }
  },
  components: {
    display,
    editor,
    controller
  },
  methods: {
    showHtml(data) {
      console.log(data)
    },
    preview() {
      this.previewMode = true
    },
    exitMarkdown() {
      this.previewMode = false
    },
  }
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
body {
  font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  fill: white;
  flex-direction: column;
}
</style>
