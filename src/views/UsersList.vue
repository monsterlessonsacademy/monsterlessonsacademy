<template>
  <div>
    <input type="text" v-model="newUserName" />
    <button @click="addUser()">Add user</button>
    <div v-for="user in users" :key="user.id" class="user">
      {{ user.name }} <span @click="removeUser(user.id)">Remove</span>
    </div>
    <a :href="url">Some url</a>
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
          age: 20,
        },
        {
          id: "2",
          name: "User 2",
          age: 25,
        },

        {
          id: "3",
          name: "User 3",
          age: 30,
        },
      ],
      newUserName: "",
      url: "https://google.com",
    };
  },
  methods: {
    removeUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },
    addUser() {
      const uniqueId = Math.random().toString(16);
      const newUser = {
        id: uniqueId,
        name: this.newUserName,
        age: 30,
      };
      this.users.push(newUser);
    },
  },
};
</script>

<style scoped>
.user {
  font-size: 18px;
  border-bottom: 1px solid grey;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
