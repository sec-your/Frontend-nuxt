<template>
  <div class="card">
    <div class="container mt-24 mb-36 grid grid-cols-[20rem_auto] gap-16 grid-rows-1">
      <div class="self-center">
        <slot />
      </div>
      <MainInfoSlideshow />
    </div>
  </div>
</template>