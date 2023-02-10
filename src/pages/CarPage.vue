<template>
    <div>
        <h1>Список транспортных средств</h1>
        <car-input
        v-model="carSearchQuery"
        placeholder="Поиск..."
        />
        <div class="car__app__btns">
        <car-button 
            @click="showCarDialog"
            >
            Добавить ТС
        </car-button>
        <car-select
         v-model="carSelectedSort"
         :options="carSortOptions"
        />
        </div>
        <car-dialog v-model:show="carDialogVisible">
            <car-form
            @create="createCar"
            />
        </car-dialog>
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
    import CarButton from "@/components/UI/CarButton";
    import axios from 'axios';
    import CarSelect from "@/components/UI/CarSelect";

    export default {
        components: {
            CarForm, CarList, CarButton, CarSelect
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
.car__app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}
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