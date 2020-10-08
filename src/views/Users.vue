<template>
  <div>
    Users
    <users-list
      :users="users"
      @removeUser="removeUser"
      @addUser="addUser"
    ></users-list>
    <pagination
      :total="total"
      :limit="limit"
      :currentPage="currentPage"
      :url="url"
    />
  </div>
</template>

<script>
import axios from "axios";
import UsersList from "@/components/UsersList";
import Pagination from "@/components/Pagination";

export default {
  name: "Users",
  components: { UsersList, Pagination },
  data() {
    return {
      users: [],
      total: 500,
      limit: 20,
      currentPage: 5,
      url: "/tags/dragons",
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
