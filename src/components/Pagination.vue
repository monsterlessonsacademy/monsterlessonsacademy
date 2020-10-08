<template>
  <div>Pagination</div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
