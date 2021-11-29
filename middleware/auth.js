export default ({ app, redirect, route }) => {
  const hasToken = !!app.$apolloHelpers.getToken();
  if (!hasToken) {
    return redirect("/login");
  } else if (route.path == "/login") {
    return redirect("/twitter");
  }
};
