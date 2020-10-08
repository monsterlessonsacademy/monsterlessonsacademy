<template>
  <div>
    <h1>Vue for beginners</h1>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'users' }">Users</router-link>
    <router-view />
  </div>
</template>

<style></style>
