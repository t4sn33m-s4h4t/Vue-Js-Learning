

<template>
  
  <food-item 
  v-for="x in foods" 
  :key="x" 
  :food-name="x" 
  @toggle-favorite="receiveEmit"/>
  
</template>

<script>
export default{
  data(){
    return{
      foods:['apple','orrange', 'Chili']
    }
  },
  methods:{
    receiveEmit(foodId) {
      console.log(foodId)
    alert('you clicked: ' + foodId);
  }
  }
}
</script>
<style></style>