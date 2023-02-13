<template>
        <form @submit.prevent>
            <h4>Добавление ТС</h4>
            <my-input 
            v-model="car.title"
            type="text" 
            placeholder="Название"
            />
            <my-input 
            v-model="car.body" 
            type="text" 
            placeholder="Описание"
            />
            <my-button 
            @click="createCar" 
            style="margin-top: 15px;">
            Добавить
            </my-button>
        </form>
</template>

<script>
    export default {
        data() {
            return {
                car: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createCar() {
            this.car.id = Date.now();
            this.$emit('create', this.car)
            this.car = {
                title: '',
                body: ''
               }
            }
        }
    }
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
}

</style>