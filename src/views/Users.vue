<template>
  <div>
    Users
    <users-list
      :users="users"
      @removeUser="removeUser"
      @addUser="addUser"
    ></users-list>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList";

export default {
  name: "Users",
  components: { UsersList },
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
    };
  },
  methods: {
    removeUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },
    addUser(newUserName) {
      const uniqueId = Math.random().toString(16);
      const newUser = {
        id: uniqueId,
        name: newUserName,
        age: 30,
      };
      this.users.push(newUser);
    },
  },
};
</script>
