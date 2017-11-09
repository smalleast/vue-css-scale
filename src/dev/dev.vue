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
    <div class="item">
      <VueCssScale position="" className="red" textClassName="bg" textPosition="top"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
        <div slot="text">
          <button class="btn-fav">收藏</button>
        </div>
      </VueCssScale>
    </div>
    <div class="item">
      <VueCssScale position="" className="red" textClassName="bg" textPosition="right"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
        <div slot="text">
          <button class="btn-fav">收藏</button>
        </div>
      </VueCssScale>
    </div>
    <div class="item">
      <VueCssScale position="" className="red" textClassName="bg" textPosition="bottom"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
        <div slot="text">
          <button class="btn-fav">收藏</button>
        </div>
      </VueCssScale>
    </div>
    <div class="item">
      <VueCssScale position="" className="red" textClassName="bg" textPosition="left"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
        <div slot="text">
          <button class="btn-fav">收藏</button>
        </div>
      </VueCssScale>
    </div>
    <div class="item">
      <VueCssScale position="" className="red" textClassName="bg" textPosition="normal"
                   url="http://oss.zhulogic.com/product_image/cp083b70a1d989419481acf884557c5a41.jpg?x-oss-process=style/w660">
        <div slot="text">
          <button class="btn-fav">收藏</button>
        </div>
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
        width: 200px;
        height: 200px;
      }
      .green {
        border: 1px solid #0f0;
        width: 200px;
        height: 200px;
      }
      .blue {
        border: 1px solid #00f;
        width: 200px;
        height: 200px;
      }
      .bg {
        background: rgba(0, 0, 0, .5);
      }
      .btn-fav {
        position: absolute;
        width: 80px;
        height: 40px;
        line-height: 40px;
        top: 0;
        right: 0;
        text-align: center;
        background: #f00;
        border-radius: 4px;
        border: none;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
      }
    }
  }


</style>

