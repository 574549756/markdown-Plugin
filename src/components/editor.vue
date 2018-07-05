<template>
  <div id="showOrHide">
    <div id="showMarkdown" v-on:click="displayMarkdown" v-show="markMode">
    </div>
    <div id="hideMarkdown" v-on:click="hideMarkdown" v-show="!markMode">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markMode: true
    }
  },
  components: {},
  methods: {
    showHtml(data) {
      console.log(data)
    },
    displayMarkdown() {
      $(main).addClass('active')
      this.markMode = !this.markMode
    },
    hideMarkdown() {
      $(main).removeClass('active')
      this.markMode = !this.markMode
    }
  }
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}

#main.active {
  display: block;
}
#main {
  position: absolute;
  right: px(0);
  top: px(0);
  width: px(436);
  display: none;
}
.markdown-body {
  height: 100vh;
  .v-note-panel.shadow {
    flex-direction: column;
    .v-note-edit.divarea-wrapper,
    .v-note-show {
      width: 100%;
    }
  }
}
#showOrHide {
  #showMarkdown {
    right: px(0);
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: px(8);
    background: rgb(50, 50, 50);
    cursor: pointer;
    transition: all 0.6s;
  }
  #showMarkdown:hover {
    width: px(30);
    background: rgba(50, 50, 50, 0.5);
  }
  #hideMarkdown {
    right: px(436);
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: px(8);
    background: rgb(50, 50, 50);
    cursor: pointer;
    transition: all 0.6s;
  }
  #hideMarkdown:hover {
    width: px(30);
    background: rgba(50, 50, 50, 0.5);
  }
}
</style>
