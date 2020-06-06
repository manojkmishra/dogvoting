<template>
<div>
Result.vue
<div v-for="(dog, index) in dogs" :key="index">
    <div 
       
        >{{ dog.name }}　{{ dog.percentage }}% ({{ dog.vote }} votes)</div>
</div>
</div>
</template>

<script>
export default {
  computed: {
    dogs() {
        return this.$store.getters.dogs
    },
  },
}
</script>