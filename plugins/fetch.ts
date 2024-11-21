import { createLogger } from "~/shared/utils/logging";

export default defineNuxtPlugin(nuxtApp => {
  const logger = createLogger();
  nuxtApp.provide('logger', logger);

  const customFetch = $fetch.create({
    onRequest: ({ request }) => {
      logger.info(import.meta.server ? "server" : "client", "fetch request", request);
    },
  })
  nuxtApp.provide('cfetch', customFetch);
})