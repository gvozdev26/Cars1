<template>
    <form @submit.prevent>
        <h4>Добавить водителя</h4>
        <my-input 
         v-model="post.name"
         type="text" 
         placeholder="Гос.номер"
         />
         <my-input 
         v-model="post.email"
         type="text" 
         placeholder="ФИО водителя"
         />
         <my-input
         v-model="post.body" 
         type="text" 
         placeholder="Статус"
         />
         <my-button
         style="align-self: flex-end;
          margin-top: 15px;"
         @click="createPost"
         >
         Добавить водителя
         </my-button>
        </form>
</template>

<script>
    export default {
       data() {
        return {
            post: {
                title: '',
                body: ''
               }
            }
        },
        methods: {
             createPost() {
              this.post.id = Date.now();
              this.$emit('create', this.post)
              this.post = {
                title: '',
                body: ''
               }
            }
        }
    }
</script>

<style scoped>
   form { 
    display: flex;
    flex-direction: column;
   }

</style>