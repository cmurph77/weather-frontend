const app = Vue.createApp({
    data(){
        return {
            name: 'N/A' ,
            age: 22,
            showResults: false,
            city: 'N/A',
            lat: 0,
            lon: 0,
            daily_weather: {
                day_one: {
                    unix_dt: 0,
                    formated_date: "N/A",
                    temp: 0,
                    rainfall_level: 0,
                    windspeed: 0,
                    weather_type: "N/A",
                    wear_mask: true
                },
                day_two: {
                    unix_dt: 0,
                    formated_date: "N/A",
                    temp: 0,
                    rainfall_level: 0,
                    windspeed: 0,
                    weather_type: "N/A",
                    wear_mask: false
                },
                day_three: {
                    unix_dt: 0,
                    formated_date: "N/A",
                    temp: 0,
                    rainfall_level: 0,
                    windspeed: 0,
                    weather_type: "N/A",
                    wear_mask: true
                },
                day_four: {
                    unix_dt:0,
                    formated_date: "N/A",
                    temp: 0,
                    rainfall_level: 0,
                    windspeed: 0,
                    weather_type: "N/A",
                    wear_mask: true
                },
                day_five: {
                    unix_dt: 0,
                    formated_date: "N/A",
                    temp: 0,
                    rainfall_level: 0,
                    windspeed: 0,
                    weather_type: "N/A",
                    wear_mask: true
                }
            }
        }
    },

    methods: {
        getWeather(city){
            console.log("Getting Weather Data for ", city)
            fetch('sample_data.json')
                .then(response => response.json())
                .then(data => {
                    // 'data' now contains the JSON object
                    this.daily_weather = data.days;  //todo get data through api
                })
                .catch(error => console.error('Error:', error)
            );
            this.city = city;


        },
        setData(data){
            this.daily_weather.day_one.formated_date = data.days.day_one.formated_date;
        },
        
        toggleShowResults(){
            this.showResults = !this.showResults
            console.log("show results has been pressed")
        }
    }
});



app.mount('#app');
