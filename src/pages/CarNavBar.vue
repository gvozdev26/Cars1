<template>
    <div class="navbar">
        <div @click="$router.push('/')">Тачки</div>
        <div class="navbar__btns">
                <car-button @click="$router.push('/cars')">
                    Тачки
                </car-button>
        </div>
    </div>
</template>

<script>
    export default{
    }
</script>

<style scoped>
.navbar {
height: 50px;
background-color: lightblue;
box-shadow: 2px 2px 4px gray;
display: flex;
align-items: center;
padding: 0px 15px;
}
.navbar__btns{
    margin-left: auto;
}
</style>