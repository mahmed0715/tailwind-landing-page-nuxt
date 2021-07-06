<template>
  <div class="flex justify-center ">
    <!-- page 4 -->


    <div class="inline-flex text-gray-800 ">
      <!-- active -->
      <button
        @click="activeIndex = 0"
        class="px-4 py-1 border border-r-0 rounded-l border-indigo-400 focus:outline-none hover:bg-gray-900 hover:bg-indigo-400"
        :class="[activeIndex == 0 ? 'bg-indigo-400 text-white' : '']"
      >
        Left
      </button>
      <button
        @click="activeIndex = 1"
        class="px-4 py-1 border border-r-0 border-indigo-400 focus:outline-none hover:bg-gray-900 hover:bg-indigo-400"
        :class="[activeIndex == 1 ? 'bg-indigo-400 text-white' : '']"
      >
        Middle
      </button>
      <button
        @click="activeIndex = 2"
        class="px-4 py-1 border rounded-r border-indigo-400 focus:outline-none hover:bg-gray-900 hover:bg-indigo-400"
        :class="[activeIndex == 2 ? 'bg-indigo-400 text-white' : '']"
      >
        Right
      </button>
    </div>
  </div>
</template>

<script>
// import Hero from '@/components/Hero'
// import Features from '@/components/Features'
// import Teasers from '@/components/Teasers'
// import Prices from '@/components/Prices'
// import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    // hero: Hero,
    // features: Features,
    // teasers: Teasers,
    // prices: Prices,
    // 'call-to-action': CallToAction
  },
  data() {
    return {
      activeIndex: 0
    }
  }
}
</script>

<style scoped>
.button-group :first-child:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
}
.button-group :not(:first-child):not(:last-child) {
  border-radius: 0;
  border-right: 0;
}
.button-group :last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
