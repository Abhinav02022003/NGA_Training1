export function fakeApiCall() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data loaded after delay");
    }, 1500);
  });
}
