<template>
  <div>
    <h1 v-if="!isUserLoggedIn">
      For authorization use the following data:
      <div>test@mail.ru</div>
      <div>123456</div>
    </h1>
    <h1 v-else>
      <span>w</span>
      <span>e</span>
      <span>l</span>
      <span>c</span>
      <span>o</span>
      <span>m</span>
      <span>e</span>
      <span>😋</span>
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      isUserLoggedIn() {
        return this.$store.getters.isUserLoggedIn;
      },
    },
  };
</script>

<style scoped>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: #000000;
    font-family: 'Arial', sans-serif;
    font-size: 2em;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }
  h1 span {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px) rotate(90deg);
    transform-origin: left;
    animation: in 0.5s forwards;
  }
  h1 span:nth-child(1) {
    animation-delay: 0.1s;
  }
  h1 span:nth-child(2) {
    animation-delay: 0.2s;
  }
  h1 span:nth-child(3) {
    animation-delay: 0.3s;
  }
  h1 span:nth-child(4) {
    animation-delay: 0.4s;
  }
  h1 span:nth-child(5) {
    animation-delay: 0.5s;
  }
  h1 span:nth-child(6) {
    animation-delay: 0.6s;
  }
  h1 span:nth-child(7) {
    animation-delay: 0.7s;
  }
  h1 span:nth-child(8) {
    animation-delay: 0.8s;
  }

  @keyframes in {
    0% {
      opacity: 0;
      transform: translateY(50px) rotate(90deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotate(0);
    }
  }

</style>
