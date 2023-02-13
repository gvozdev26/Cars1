<template>
    <div>
        <h1>Список транспортных средств</h1>
        <my-input
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
        <div ref="observer"></div>   
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
        {value:'name', name: 'По гос.номеру'},
        {value:'email', name: 'По типу'},
        {value:'body', name: 'По статусу'}

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
                async fetchCars(){
                    try {
                        this.isCarsLoading=true;
                        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
                            params: {
                                _page: this.page, 
                                _limit: this.limit
                            }
                        });
                        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                        this.cars = response.data;                                      
                        } catch (e) {
                        alert ('Ошибка')
                    } finally {
                        this.isCarsLoading=false;
                     }
                   }, 
                   async loadMoreCars(){
                    try {
                        this.page +=1;
                        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
                            params: {
                                _page: this.page, 
                                _limit: this.limit
                            }
                        });
                        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                        this.cars = [...this.cars, ...response.data];                                      
                        } catch (e) {
                        alert ('Ошибка')
                    } 
                   } 
                },
                mounted() {
                    this.fetchCars ();
                    this.$refs.observer
                    const options = {
                        rootMargin: '0px',
                        threshold: 1.0
                    }
                    const callback = (entries, observer) => {
                        if (entries[0].isIntersecting && this.page < this.totalPages) {
                            this.loadMoreCars()
                        }
                    };
                    const observer = new IntersectionObserver(callback, options);
                    observer.observe(this.$refs.observer);
                    },
                computed: {
                  sortedCars () {
                    return [...this.cars].sort((car1, car2) =>
                         car1[this.carSelectedSort]?.localeCompare(car2[this.carSelectedSort]))
                  },
                  sortedAndSearchedCars() {
                    return this.sortedCars.filter(car => car.name.toLowerCase().includes(this.carSearchQuery.toLowerCase()))
                  }
                },
                watch: {
                }
            }    
</script>

<style>
.carPage {
    border: 1px solid teal;
    padding: 10px;
    margin-left: 2px;

}
</style>