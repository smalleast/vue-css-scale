<template>
  <div class="vue-css-scale" :class="[position,className]">
    <img class="scale-img" :src="url">
    <div class="scale-text" v-if="" :class="[textPosition,textClassName]">
      <slot name="text"></slot>
    </div>
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
      },
      textClassName: {
        type: String
      },
      textPosition: {
        type: String,
        default: 'none'
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
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    overflow: hidden;
    &:hover {
      .scale {
        &-img {
          transform: scale(1.15);
        }
        &-text {
          &.top {
            transform: translate(0%, 100%);
          }
          &.bottom {
            transform: translate(0%, -100%);
          }
          &.left {
            transform: translate(100%, 0%);
          }
          &.right {
            transform: translate(-100%, -0%);
          }
        }
      }
    }
    &.x:hover {
      img {
        transform: scaleX(1.15);
      }
    }
    &.y:hover {
      img {
        transform: scaleY(1.15);
      }
    }
    .scale {
      &-img {
        position: relative;
        display: inline-block;
        width: 100%;
        vertical-align: middle;
        transition: transform 1s, -webkit-transform 1s;
        z-index: 1;
      }
      &-text {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 2;
        transition: transform .6s, -webkit-transform .6s;
        &.top {
          top: -100%;
        }
        &.bottom {
          top: 100%;
        }
        &.left {
          left: -100%;
        }
        &.right {
          left: 100%;
        }
        &.normal {
          left: 0;
          top: 0;
        }
        &.none {
          display: none;
        }
      }
    }
  }
</style>
