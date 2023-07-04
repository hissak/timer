const alarms = (process.argv).slice(2)

const alarm = (input) => {
  for (val of input) {
    if (Number(val) >= 0 && Number(val) == val) {
      let timer = val * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer);
    }
  }
}

alarm(alarms)