import { useLogger } from "nuxt/kit";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [() => {
    const logger = useLogger();
    logger.info('Hello from a module!');
    logger.addReporter({
      log({ type, args, date }) {
        logger[type](date, JSON.stringify(args));
      }
    })
  }]
})
