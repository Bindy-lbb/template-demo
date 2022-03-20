<!-- src/menu/leftMenu.vue -->
<template>
    <div id="top-menu">
        <img class="logo" :src="logoPath" />
        <p class="name">11111111</p>
    </div>
</template>
<script>
export default {
    name: 'topMenu',
    props: ['logoPath', 'name']
}
</script>

<style lang="scss" scoped>
  // $topMenuWidth: 80px;
  // $logoWidth: 50px;
  // $bg-color: #409EFF;
  // $name-color: #fff;
  // $name-size: 18px;
  #top-menu{
    height: 80px;
    text-align: left;
    background-color: #409EFF;
    padding: 20px 20px 0px 20px;
    .logo {
        width: 50px;
        display: inline-block;
    }
    .name{
      display: inline-block;
      vertical-align: bottom;
      color: #fff;
      font-size:  18px;
    }
  }
</style>


