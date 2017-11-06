<template>
  <div class="vue-css-scale" :class="[position,className]">
    <img :src="url" >
  </div>
</template>
<script type="text/javascript">

  export default {
    props: {
      position: {
        type: String,
        default: ''
      },
      className: {
        type: String
      },
      url: {
        type: String
      }
    },
    methods: {},
    mounted() {

    }
  }

</script>
<style rel="stylesheet/scss" lang="scss">
  .vue-css-scale {
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid #ddd;
    overflow: hidden;
    img {
      display: inline-block;
      width: 100%;
      vertical-align: middle;
      transition: transform 1s, -webkit-transform 1s;
    }
    &:hover {
      img {
        transform: scale(1.25);
      }
    }
    &.x:hover {
      img {
        transform: scaleX(1.25);
      }
    }
    &.y:hover {
      img {
        transform: scaleY(1.25);
      }
    }
  }
</style>
