<script lang="ts" setup>
const { data, refresh } = await useAsyncData('test', () => useNuxtApp().$cfetch('/api/test'));
</script>
<template>
  <div>
    <button @click="() => refresh()">{{ data }}</button>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
