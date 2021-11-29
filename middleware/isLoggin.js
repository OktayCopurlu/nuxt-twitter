export default (context) => {
  if (process.client) {
    context.store.dispatch("user/initAuth");
  } else {
    context.store.dispatch("user/initAuth", context.req);
  }
};
