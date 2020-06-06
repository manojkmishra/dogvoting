<template> <div>
    <div v-for="(dog, index) in dogs" :key="index">
     <button type="button" @click="vote(dog.id)">{{ dog.name }}</button> 
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
 /* data(){
      return { dogs: [
          { id: 0, name: 'Dog1', vote: 0, percentage: 0 },
          { id: 1, name: 'Dog2', vote: 0, percentage: 0 },
          { id: 2, name: 'Dog3', vote: 0, percentage: 0 },
          { id: 3, name: 'Dog4', vote: 0, percentage: 0 },
          { id: 4, name: 'Dog5', vote: 0, percentage: 0 }
      ]}  
  },*/
  mounted(){

  },
  computed: {
    dogs() {
        return this.$store.getters.dogs
    }
  },
  methods: {
    vote(id) {
      console.log('clicked id-',id)
        this.$store.dispatch('voteAction', id);
    },
  }
}
</script>