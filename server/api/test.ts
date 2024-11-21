export default defineEventHandler(async (event) => {
  await $fetch('/debug');
  setResponseHeader(event, 'x-debug', 'true');
  return new Date();
})
