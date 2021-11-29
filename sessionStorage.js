// export function setItem(key, value) {
//   console.log(app.$apolloHelpers);
//   if (process.browser) {
//     sessionStorage.setItem(key, value);
//   }
// }

export function getItem(key) {
  if (process.browser) {
    return sessionStorage.getItem(key);
  }
}

export function removeItem(key) {
  if (process.browser) {
    sessionStorage.removeItem(key);
  }
}
