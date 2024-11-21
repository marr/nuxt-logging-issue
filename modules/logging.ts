import { defineNuxtModule, addPlugin, useLogger } from '@nuxt/kit';

export default defineNuxtModule((options, nuxt) => {
  // const consola = createConsola({ fancy: false, formatOptions: { colors: false, date: true }, level: 5 });
  // consola.setReporters([
  //   {
  //     log({ type, tag, args, date }) {
  //       const newLogObj = {
  //         level: type,
  //         tag,
  //         args,
  //         date,
  //       };
  //       console.log(newLogObj)
  //       console.log(`${JSON.stringify(newLogObj)}\n`);
  //     },
  //   },
  // ]);
  // addPlugin((nuxtApp) => {
  //   nuxtApp.provide('logger', consola);
  // })
});