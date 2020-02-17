export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect('/table2');
  } else {
    return redirect('/');
  }
}