<template>
    <div class="car_dialog" v-if="show" @click="hideCarDialog">
        <div @click.stop class="car_dialog_content">
            <slot></slot>
        </div> 
    </div>
</template>

<script>
    export default {
     name: 'car-dialog',
     props: {
        show:{
            type:Boolean,
            default: false
          }
       },
     methods: {
        hideCarDialog() {
            this.$emit('update:show', false)
        }
     }
    }
</script>

<style scoped>
.car_dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}
.car_dialog_content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
}
    
</style>