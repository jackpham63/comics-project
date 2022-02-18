<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'http://adsmg.fanfox.net/4/2018/12/28/63903f3765294921.jpg',
        },
        {
          src: 'http://adsmg.fanfox.net/3/2018/11/22/ff6f97db68c5485e.jpg',
        },
        {
          src: 'http://adsmg.fanfox.net/4/2019/4/16/9406be4ce25d4879.jpg',
        },
        {
          src: 'http://adsmg.fanfox.net/3/2018/11/26/6fca8776b1f847c6.jpg ',
        },
      ],
    }
  },
}
</script>
