<template>
  <div class='share-content clearfix'>
    <div class="title">Save Your Diwail Card</div>
    <div class="head-img clearfix">
      <img class="header-bg-img" src="@/assets/share/head-bg.png">
    </div>
    <div class="save-image">
      <div class="en">Long press image to save</div>
      <div class="hindi">सेव करने के 'लए फोटो को दबाकर रख</div>
    </div>
    <div class="share clearfix">
      <div class="share-title">Invite Others to Design Card</div>
      <div class="share-icon">
        <a @click="whatsApp" data-action="share/whatsapp/share">
          <img src="@/assets/share/phone-icon.png">
          <p>Whatsapp</p>
        </a>
        <a @click="feceBook" data-action="share/fecebook/share">
          <img src="@/assets/share/face-book.png">
          <p>Facebook</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      imgUrl: require('@/assets/share/head-bg.png')
    }
  },
  mounted () {
    this.removeMeta()
    var ogUrl = document.createElement('meta')
    var ogTitle = document.createElement('meta')
    var ogDesc = document.createElement('meta')
    var ogImage = document.createElement('meta')
    var fbAppId = document.createElement('meta')
    this.shareParameters(ogUrl, ogTitle, ogDesc, ogImage, fbAppId)
  },
  methods: {
    // 分享到whatsApp
    whatsApp (contentId) {
      var url = window.location.href
      var title = '分享的标题'
      var desc = '描述描述描述描述'
      window.location = 'whatsapp://send?text=' + encodeURIComponent(title) + encodeURIComponent('\n' + desc) + encodeURIComponent('\n\n' + url) + '&via=lopscoop'
    },
    // 分享到fecebook
    feceBook () {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
    },
    // fecebook分享的参数
    shareParameters (ogUrl, ogTitle, ogDesc, ogImage, fbAppId) {
      // 分享的url
      ogUrl.setAttribute('property', 'og:url')
      ogUrl.content = window.location.href // 分享的链接
      // 分享的标题
      ogTitle.setAttribute('property', 'og:title')
      ogTitle.content = '分享的标题'
      // 分享的描述
      ogDesc.setAttribute('property', 'og:description')
      ogDesc.content = '分享的描述分享的描述分享的描述'
      // 分享的图片
      ogImage.setAttribute('property', 'og:image')
      ogImage.content = this.imgUrl
      // 分享的app_id
      fbAppId.setAttribute('property', 'fb:app_id')
      fbAppId.content = 'app_id'

      document.getElementsByTagName('head')[0].appendChild(ogUrl)
      document.getElementsByTagName('head')[0].appendChild(ogTitle)
      document.getElementsByTagName('head')[0].appendChild(ogDesc)
      document.getElementsByTagName('head')[0].appendChild(ogImage)
      document.getElementsByTagName('head')[0].appendChild(fbAppId)
    },
    removeMeta () {
      // 判断页面是否存在相关标签，如果有先移除
      var meta = document.querySelectorAll('meta')
      for (let i = 0; i < meta.length; i++) {
        if (meta[i].hasAttribute('property')) {
          meta[i].parentNode.removeChild(meta[i])
        }
      }
    }
  },
  beforeDestroy () {
    this.removeMeta()
  }
}
</script>
<style lang="less">
.share-content {
  width: 10.8rem;
  height: 19.2rem;
  background: url("~@/assets/share/share-bg.jpg") no-repeat center top;
  background-size: 100% 100%;
  .title {
    margin-top: 1.6rem;
    line-height: 0.78rem;
    text-align: center;
    font-size: 0.66rem;
    color: #fff;
  }
  .head-img {
    position: relative;
    margin: 1.08rem auto 0;
    width: 7.56rem;
    height: 7.56rem;
    box-sizing: border-box;
    border: solid 0.14rem #fff;
    .header-bg-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
    }
  }
  .save-image {
    margin-top: 0.38rem;
    text-align: center;
    font-size: 0.51rem;
    color: #fff;
    .en {
      line-height: 0.84rem;
    }
    .hindi {
      line-height: 0.72rem;
    }
  }

  .share {
    margin-top: 1.42rem;
    .share-title {
      position: relative;
      margin: auto;
      width: 7.56rem;
      font-size: 0.42rem;
      color: #ffffff;
      text-align: center;
      line-height: 0.78rem;
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 0.84rem;
        /* prettier-ignore */
        height: 1PX;
        background-color: #ff7e73;
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
    }
    .share-icon {
      margin: 0.46rem auto;
      width: 4.32rem;
      display: flex;
      justify-content: space-between;
      align-content: center;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          display: inline-block;
          width: 1.04rem;
          height: 1.04rem;
        }
        p {
          margin: 0.04rem 0 0 0;
          padding: 0;
          line-height: 0.78rem;
          font-size: 0.36rem;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
}
</style>
