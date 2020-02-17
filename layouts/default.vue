<template>
  <div>
    <b-navbar class="navbar header has-shadow is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="~assets/admin1.jpeg" alt="admin" height="28" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/table2">Users</b-navbar-item>
        <b-navbar-item href="/tags">Tag List</b-navbar-item>
        <b-navbar-item href="/notification">Notifications</b-navbar-item>
        <b-navbar-item>Search</b-navbar-item>

        <b-navbar-dropdown label="Settings">
          <b-navbar-item>Shut Down</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Log Out</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <section class="main-content columns">
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // items: [
      // {
      // title: 'Home',
      //icon: 'home',
      //to: { name: 'index' }
      //},
      //{
      //title: 'Inspire',
      //icon: 'lightbulb',
      //to: { name: 'inspire' }
      // }
      //]
    };
  }
};
</script>
