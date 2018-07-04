<template>
    <div id="display">
        <iframe id="displayDomain" src="" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
  props: ['currentDomain']
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}
iframe {
  width: 100%;
  height: px(1080);
  z-index: 0;
  position: relative;
}
</style>
