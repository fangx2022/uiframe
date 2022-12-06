<template>
  <a-sub-menu :key="menuInfo.key">
    <template v-if="menuInfo.icon" #icon>
      <img  v-bind:src="menuInfo.icon" id="sub-menu-icon"/>
    </template>
    <template #title>{{ menuInfo.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script lang="ts" src="./subMenu.ts">
</script>
<style src="./subMenu.css">
</style>
