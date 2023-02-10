<template>
        <select v-on="modelValue" @change="changeCarOption">
         <option disabled value="">Выберите из списка</option>
         <option 
         v-for="option in options" 
         :key="option.value" 
         :value="option.value"
         >
         {{ option.name }}
         </option>
        </select>
</template>

<script>
    export default {
        name: 'car-select',
        props: {
            modelValue: {
                type:String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
        changeCarOption (event) {
            this.$emit('update:modelValue', event.target.value)
           }
        }
    }
</script>

<style scoped>

</style>