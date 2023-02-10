<template>
<div class="post">
   <div>
    <div>{{car.id}}</div>
    <div><b>Марка: </b>{{ car.title }}</div>
    <div><b>Модель: </b>{{ car.body }}</div>
   </div>
   <div class="post__btns">
      <car-button
      @click="$router.push(`/cars/${car.id}`)"
      >
       Подробнее
       </car-button>
        <car-button style="margin-left: 5px;"
        @click="$emit('remove', car)"
        >
         Удалить
         </car-button>
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

<style scoped>
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