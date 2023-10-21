const app = Vue.createApp({
    data(){
        return {
            name: 'cian' ,
            age: 22,
            showResults: false,
            weatherData : {}
        }
    },

    methods: {
        changeTitle(title){
            console.log("change title pressed")
            this.name = title
        },

        getWeather(city){
            console.log("Getting Weather Data for ", city)
            fetch('sample_data.json')
                .then(response => response.json())
                .then(data => {
                 // 'data' now contains the JSON object
                 this.weatherData = data;
                 this.weatherData.city = city;
                 console.log(data);
                })
                .catch(error => console.error('Error:', error)
            );

        },
        
        toggleShowResults(){
            this.showResults = !this.showResults
            console.log("show results has been pressed")
        }
    }
});

app.mount('#app')
