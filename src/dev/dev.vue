<template>
  <aside class="dev">
    <div class="item">
      <VueCssScale position="" className="red"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
      </VueCssScale>
    </div>
    <div class="item">
      <VueCssScale position="x" className="green"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
      </VueCssScale>
    </div>
    <div class="item">
      <VueCssScale position="y" className="blue"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
      </VueCssScale>
    </div>
  </aside>
</template>
<script>
  import VueCssScale from '../components/vue-css-scale.vue'

  export default {
    data() {
      return {};
    },
    methods: {},
    components: {VueCssScale}
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .dev {
    .item {
      float: left;
      margin-right: 20px;
      .red {
        border: 1px solid #f00;
      }
      .green {
        border: 1px solid #0f0;
      }
      .blue {
        border: 1px solid #00f;
      }
    }
  }


</style>

