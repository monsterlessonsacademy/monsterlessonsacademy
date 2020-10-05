<template>
  <div>
    <input type="text" v-model="newUserName" />
    <button @click="addUser()">Add user</button>
    <div v-for="user in users" :key="user.id" class="user">
      {{ user.name }} <span @click="removeUser(user.id)">Remove</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newUserName: "",
    };
  },
  methods: {
    removeUser(id) {
      this.$emit("removeUser", id);
    },
    addUser() {
      this.$emit("addUser", this.newUserName);
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
