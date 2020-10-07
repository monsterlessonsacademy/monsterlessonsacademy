<template>
  <div v-for="user in users" :key="user.id" class="user-container">
    {{ user.name }} is {{ user.age }} years old
  </div>
</template>

<script>
export default {
  name: "UsersList",
  data() {
    return {
      users: [
        {
          id: "1",
          name: "User 1",
          age: 20
        },
        {
          id: "2",
          name: "User 2",
          age: 25
        },
        {
          id: "3",
          name: "User 3",
          age: 30
        }
      ]
    };
  }
};
</script>

<style scoped>
.user-container {
  font-size: 18px;
  border-bottom: 1px solid grey;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
