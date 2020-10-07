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
import axios from "axios";
import UsersList from "@/components/UsersList";

export default {
  name: "Users",
  components: { UsersList },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    removeUser(id) {
      axios.delete(`http://localhost:3000/users/${id}`).then(() => {
        this.users = this.users.filter((user) => user.id !== id);
      });
    },
    addUser(newUserName) {
      const newUser = {
        name: newUserName,
        age: 30,
      };
      axios.post("http://localhost:3000/users", newUser).then((createdUser) => {
        console.log("createdUser", createdUser);
        this.users.push(createdUser.data);
      });
    },
  },
  mounted() {
    console.log("initialized Users");
    axios.get("http://localhost:3000/users").then((users) => {
      this.users = users.data;
    });
  },
};
</script>
