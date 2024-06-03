<template>
  <div class="bubble-writing flex items-center relative">
    <img class="image mr-1 ml-2" src="/src/assets/images/yo.png" alt="photo" />
    <div class="text-lg flex w-full">
      writing

      <div class="dots text-lg hide ml-1">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  clip-path: circle(50% at 50% 50%);
  width: 30px;
  height: 30px;
}

.bubble-writing {
  margin: 10px 0 0 !important;
  animation: fadeIn 0.3s ease-out;
  width: 100%;
  color: #9c9c9c;
  background-color: transparent;
}
.dots {
  span {
    display: inline-block;
    animation: dots 2s linear infinite;
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

.hide {
  animation: hide 1s steps(1, end) infinite;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes dots {
  0%,
  20% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
}

@keyframes hide {
  0%,
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
