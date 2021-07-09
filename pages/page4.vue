<template>
  <div class="">
    <!-- page 4 -->
    <div class="area1" id="wave">
      <div class="linear-gradiant-top"></div>
      <div
        class="min-w-full login-area flex justify-end items-center hover:underline"
      >
        <a class=" text-login text-right items-end p-4" href="">Login</a>
      </div>
      <div
        class="registration-box p-4 bg-white border-2 fixed min-w-full bottom-0 rounded-t-r rounded-t-l"
      >
        <button class="registration w-full">Kostenlos Registrieren</button>
      </div>
      <h1 class="headline1 text-5xl p-5 text-center">
        Deine Job website
      </h1>
      <Logo1 />
    </div>
    <!-- <div class="inline-flex text-gray-800 ">
      <button
        @click="activeIndex = 0"
        class="px-4 py-1 border border-r-0 rounded-l-12 border-indigo-400 focus:outline-none hover:bg-gray-900 hover:bg-indigo-400"
        :class="[activeIndex == 0 ? 'bg-indigo-400 text-white' : '']"
      >
        Arbeitnehmer
      </button>
      <button
        @click="activeIndex = 1"
        class="px-4 py-1 border border-r-0 border-indigo-400 focus:outline-none hover:bg-gray-900 hover:bg-indigo-400"
        :class="[activeIndex == 1 ? 'bg-indigo-400 text-white' : '']"
      >
        Arbeitgeber
      </button>
      <button
        @click="activeIndex = 2"
        class="px-4 py-1 border rounded-r border-indigo-400 focus:outline-none hover:bg-gray-900 hover:bg-indigo-400"
        :class="[activeIndex == 2 ? 'bg-indigo-400 text-white' : '']"
      >
        Temporärbüro
      </button>
    </div> -->
  </div>
</template>

<script>
import Logo1 from '@/components/svg/undraw_agreement_aajr.vue'
// import Hero from '@/components/Hero'
// import Features from '@/components/Features'
// import Teasers from '@/components/Teasers'
// import Prices from '@/components/Prices'
// import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    Logo1
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
.login-area {
  height: 62px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 12px 12px;
  opacity: 1;
}
.linear-gradiant-top {
  min-height: 5px;
  width: 100%;
  background: transparent linear-gradient(91deg, #319795 0%, #3182ce 100%) 0% 0%
    no-repeat padding-box;
  opacity: 1;
}
.text-login {
  text-align: left;
  font: normal normal 600 14px/17px Lato;
  letter-spacing: 0.84px;
  color: #319795;
  opacity: 1;
}
.text-login:hover {
  text-decoration-thickness: 2px;
  /* border-bottom: 4px solid red */
}
.registration {
  height: 40px;
  background: transparent linear-gradient(95deg, #319795 0%, #3182ce 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;
  opacity: 1;
}
.registration-box {
  border-radius: 12px 12px 0 0;
}
.area1 {
  background: transparent linear-gradient(141deg, #ebf4ff 0%, #e6fffa 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
}
.headline1 {
  text-align: center;
  font-family: Lato;
  font-weight: bold;
  letter-spacing: 1.26px;
  color: #2d3748;
  opacity: 1;
}
.rounded-l-12 {
  background: #81e6d9 0% 0% no-repeat padding-box;
  border-radius: 12px 0px 0px 12px;
  opacity: 1;
}

#wave {
  position: relative;
  height: 70px;
  width: 600px;
  background: #e0efe3;
}

#wave:before {
  content: '';
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 340px;
  height: 80px;
  background-color: white;
  right: -5px;
  top: 40px;
}

#wave:after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 300px;
  height: 70px;
  background-color: #e0efe3;
  left: 0;
  top: 27px;
}
</style>
