### Nuxt Logging Bug

When trying to add a custom reporter to nuxt, it appears the `args` that the logger sends into the `log` function are recursively appended to.

The custom reporter looks like this as seen in `nuxt.config.ts`:

```ts
const logger = useLogger();
logger.info('Hello from a module!');
logger.addReporter({
  log({ type, args, date }) {
    logger[type](date, JSON.stringify(args));
  }
})
```

The output quickly blows up when running `nuxt build`:

```
ℹ Building client...                                                                                                                                                           10:18:33 AM
ℹ 2024-11-20T15:18:33.287Z ["Building client..."]                                                                                                                              10:18:33 AM
ℹ 2024-11-20T15:18:33.288Z ["2024-11-20T15:18:33.287Z","[\"Building client...\"]"]                                                                                             10:18:33 AM
ℹ 2024-11-20T15:18:33.291Z ["2024-11-20T15:18:33.288Z","[\"2024-11-20T15:18:33.287Z\",\"[\\\"Building client...\\\"]\"]"]                                                      10:18:33 AM
ℹ 2024-11-20T15:18:33.291Z ["2024-11-20T15:18:33.291Z","[\"2024-11-20T15:18:33.288Z\",\"[\\\"2024-11-20T15:18:33.287Z\\\",\\\"[\\\\\\\"Building client...\\\\\\\"]\\\"]\"]"]   10:18:33 AM
[10:18:33 AM] ℹ 2024-11-20T15:18:33.291Z ["2024-11-20T15:18:33.291Z","[\"2024-11-20T15:18:33.291Z\",\"[\\\"2024-11-20T15:18:33.288Z\\\",\\\"[\\\\\\\"2024-11-20T15:18:33.287Z\\\\\\\",\\\\\\\"[\\\\\\\\\\\\\\\"Building client...\\\\\\\\\\\\\\\"]\\\\\\\"]\\\"]\"]"]
```

As show, the previous function call's arguments are appended to after each call and balloon into a max callstack error.