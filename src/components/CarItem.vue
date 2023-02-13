<template>
<div class="post">
   <div>
    <div>{{car.id}}</div>
    <div><b>Марка: </b>{{ car.title }}</div>
    <div><b>Модель: </b>{{ car.body }}</div>
   </div>
   <div class="post__btns">
      <my-button
      @click="$router.push(`/cars/${car.id}`)"
      >
       Подробнее...
       </my-button>
        <my-button style="margin-left: 5px;"
        @click="$emit('remove', car)"
        >
         Удалить...
         </my-button>
     </div>
</div>
</template>

<script>
    export default {
      props: {
       car: {
        type: Object,
        required: true
          }
       }
    }
</script>

<style>
.post {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>