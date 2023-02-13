<template>
    <div class="navbar">
        <div @click="$router.push('/')">Реактивная улитка</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/cars')">
                Транспортные средства
            </my-button>
        </div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">
                Водители
            </my-button>
    </div>
    <div class="navbar__btns">
        <my-button @click="$router.push('/about')">
            О нас
        </my-button>
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
    margin-left: 5px;
}
</style>