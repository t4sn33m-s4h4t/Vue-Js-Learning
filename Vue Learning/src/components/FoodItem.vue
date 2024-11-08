<template>
    <div>
        
        <h1 @click="toggleFavorite">{{ foodName }}</h1>
        
    </div>
</template>
<script>
export default {
    props: {
        foodName: String,
    },
    
    methods: {
        toggleFavorite() {
            
            this.$emit('toggle-Favorite', this.foodName);
        }
    },
}</script>

<style></style>