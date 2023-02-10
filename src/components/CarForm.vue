<template>
        <form @submit.prevent>
            <h4>Добавление ТС</h4>
            <car-input 
            v-model="car.title"
            type="text" 
            placeholder="Название"
            />
            <car-input 
            v-model="car.body" 
            type="text" 
            placeholder="Описание"
            />
            <car-button 
            style="align-self: flex-end; margin-top: 15px;"
            @click="createCar" 
            >
            Добавить
            </car-button>
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