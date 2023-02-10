<template>
    <div v-show="cars.length > 0">
      <h3>Список транспортных средств</h3>
      <transition-group name="car-list">
        <car-item 
        v-for="car in cars"
        :car="car"
        :key="car.id"
        @remove="$emit('remove', car)"
      />
      </transition-group>
    </div>
    <h2 v-show="cars.length === 0" style="color: red">Список транспортных средств пуст</h2>
    </template>

<script>
    import carItem from "@/components/CarItem";
    export default {
        components: {carItem},
        props: {
            cars: {
          type: Array,
          required: true
            }
        }
    }
</script>

<style scoped>
.car-list-item {
  display: inline-block;
  margin-right: 10px;
}
.car-list-enter-active,
.car-list-leave-active {
  transition: all 0.4s ease;
}
.car-list-enter-from,
.car-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.car-list-move {
  transition: transform 0.4s ease;
}
</style>