<template>
        <div id="main">
        </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  methods: {
    showHtml(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}

#main {
  position: absolute;
  right: px(0);
  top: px(0);
  width: px(436);
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
</style>
