<template>
  <form class="toy-filter flex space-evenly">
    <div class="flex column">
      <label> search a toy: </label>
      <input
      type="text"
      v-model="filterBy.txt"
      @input="setFilter"
      placeholder="search a toy"
    />
    </div>
     <div class="flex column">
    <label> filter by type: </label>
    <select v-model="filterBy.type" @change="setFilter">
      <option value="all">All</option>
      <option value="Funny">Funny</option>
      <option value="Adult">Adult</option>
      <option value="Educational">Educational</option>
    </select>
     </div>
      <div class="flex column">
    <label> filter by stock: </label>
    <select
      @change="setFilter"
      v-model="filterBy.inStock"
    >
      <option value="all">All</option>
      <option value="true">In stock</option>
      <option value="false">Out of stock</option>
    </select>
     </div>
      <div class="flex column">
    <label>Sort by: </label>
      <select v-model="filterBy.sortBy" @change="setFilter">
        <option value="name">Name</option>
        <option value="price">Price</option>
    </select>
     </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: "",
        type: "all",
        inStock: "all",
        sortBy: "name",
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit("setFilter", this.filterBy);
    },
  },
};
</script>