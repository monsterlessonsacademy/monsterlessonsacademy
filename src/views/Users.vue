<template>
  <div>
    Users
    <users-list
      :users="users"
      @removeUser="removeUser"
      @addUser="addUser"
    ></users-list>
    {{ queryParams }}
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
  computed: {
    queryParams() {
      return this.$route.query;
    },
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
        this.$router.push({ name: "home" });
      });
    },
  },
  mounted() {
    console.log("initialized Users", this.$route);
    axios.get("http://localhost:3000/users").then((users) => {
      this.users = users.data;
    });
  },
};
</script>
