export default () => {
  return new Promise((resolve) => {
    resolve({
      "greeting": "Hi, {name}",
      "nearbyWorkers": "Nearby Social Workers",
      "subHeaders": {
        "findWorker": "Let's find you a social worker"
      },
      "work": "work please"
    });
  });
};