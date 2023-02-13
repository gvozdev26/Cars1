<template>
        <form @submit.prevent>
            <h4>Добавление ТС</h4>
            <my-input 
            v-model="car.name"
            type="text" 
            placeholder="Гос.номер"
            />
            <my-input 
            v-model="car.email" 
            type="text" 
            placeholder="Тип"
            />
            <my-input 
            v-model="car.body" 
            type="text" 
            placeholder="Статус"
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
                    name: '',
                    email: '',
                    body: ''
                }
            }
        },
        methods: {
            createCar() {
            this.car.id = Date.now();
            this.$emit('create', this.car)
            this.car = {
                name: '',
                email: '',
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