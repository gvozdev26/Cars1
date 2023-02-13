<template>
    <div>
        <h1>Список транспортных средств</h1>
        <car-input
        v-model="carSearchQuery"
        placeholder="Поиск..."
        />
        <div class="app__btns">
        <my-button 
            @click="showCarDialog"
            >
            Добавить ТС
        </my-button>
        <my-select
         v-model="carSelectedSort"
         :options="carSortOptions"
        />
        </div>
        <my-dialog v-model:show="carDialogVisible">
            <car-form
            @create="createCar"
            />
        </my-dialog>
        <car-list 
        :cars="sortedAndSearchedCars"
        @remove="removeCar"
        v-if="!isCarsLoading"
        />
        <div v-else>Идет загрузка...</div>   
        <div class="car__page__wrapper">
            <div 
            v-for="pageNumber in totalPages" 
            :key="pageNumber"
            class="carPage"
            :class="{
                'current__car__page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
            >
            {{pageNumber}}
        </div>
    </div> 
</div>
</template>

<script>
    import CarForm from "@/components/CarForm";
    import CarList from "@/components/CarList";
    import axios from 'axios';
    import MySelect from "@/components/UI/MySelect";

    export default {
        components: {
            CarForm, CarList, MySelect
        },
        data() {
         return {   
            cars: [],
       carDialogVisible: false,
       isCarsLoading: false,
       carSelectedSort: '',
       carSearchQuery: '',
       page: 1,
       limit: 10,
       totalPages: 0,
       carSortOptions: [
        {value:'title', name: 'По марке'},
        {value:'body', name: 'По модели'},

       ]
        }
         },
         methods: {
          createCar(car) {
            this.cars.push(car);
            this.carDialogVisible = false;
            },
            removeCar(car) {
                this.cars = this.cars.filter(p => p.id !== car.id)
            },
            showCarDialog() {
                this.carDialogVisible = true;
            },
            changePage(pageNumber){
                this.page = pageNumber
                this.fetchCars()
            },
            async fetchCars() {
                try {
                    this.isCarsLoading = true;                
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit:this.limit
                        }
                    }); 
                    this.totalPages = Math.ceil (response.headers['x-total-count'] / this.limit)
                    this.cars = response.data;
                } catch (e) {
                    alert ('Ошибка')
                } finally {
                    this.isCarsLoading = false;
                }
            }
        },
        mounted() {
            this.fetchCars();
        },
        computed: {
            sortedCars() {
                return [...this.cars].sort((car1, car2) => 
                   car1[this.carSelectedSort]?.localeCompare(car2[this.carSelectedSort]))
            },
            sortedAndSearchedCars() {
                return this.sortedCars.filter(car => car.title.toLowerCase().includes(this.carSearchQuery.toLowerCase()))
            }
          },
        }     
</script>

<style>
.carPage {
    border: 1px solid teal;
    padding: 10px;
    margin-left: 2px;

}
.car__page__wrapper {
    display: flex;
    margin-top: 15px;
}
.current__car__page{
    border: 3px solid black;
}
</style>