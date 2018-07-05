<template>
    <div id="controller">
        <el-form id="domainForm">
            <el-form-item>
                <el-input v-model="currentDomain.domain"></el-input>
            </el-form-item>
        </el-form>
        <el-button id="enter" v-on:click="EnterDomain">Enter</el-button>               
    </div>
</template>

<script>
export default {
  props: ['currentDomain'],
  methods: {
    EnterDomain() {
      console.log(this.currentDomain.domain)
      document.getElementById('displayDomain').src = `${
        this.currentDomain.domain
      }`
    }
  }
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}

#controller {
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 76%;
  height: px(100);
  #enter,
  #showMarkdown {
    height: px(40);
  }
  #domainForm {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: px(10);
    width: 100%;
    .el-form-item {
      margin: 0;
      width: 100%;
    }
  }
}
</style>
