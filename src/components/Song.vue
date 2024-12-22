<template>
    <div class="song-container">
        <p>{{ linktone.linktone_title }}</p>
        <div class="actions-container">
            <div><i class="fa-regular fa-heart"></i></div>
            <div><i class="fa-solid fa-download"></i></div>
            <div><i class="fa-solid fa-sliders"></i></div>
        </div>
    </div>
    <div class="icon"><i class="fa-solid fa-chevron-up"></i></div>
</template>

<script>
export default {
props: {
    linktone: {
        type: Object,
        required: true
    }
},
}
</script>

<style lang="scss" scoped>
    .song-container {display: flex; align-items: center; padding: 10px; justify-content: space-between; width: 100%;
    .actions-container{position: relative; display: flex; align-items: center; gap: 20px;
    .icon{position: absolute;}
    }
    }
</style>