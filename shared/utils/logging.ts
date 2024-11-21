import { createConsola } from 'consola';

export const createLogger = () => {
  const logger = createConsola({ fancy: true, level: 5, formatOptions: { colors: true, date: true } });
  if (!import.meta.dev) {
    logger.setReporters([
      {
        log({ type, tag, args, date }) {
          const newLogObj = {
            level: type,
            tag,
            args,
            date,
          };
          console.log(newLogObj)
        },
      },
    ]);
  }
  return logger;
};