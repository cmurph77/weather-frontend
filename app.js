const app = Vue.createApp({
    data(){
        return {
            name: 'cian' ,
            age: 22,
            showResults: false,
            city: 'Enter City...',
            lat: 0,
            lon: 0,
            daily_weather: {
                day_one: {
                    unix_dt: 10000000000,
                    formated_date: "1.12.2023",
                    temp: 23.4,
                    rainfall_level: 12,
                    windspeed: 20,
                    weather_type: "HOT",
                    wear_mask: true
                },
                day_two: {
                    unix_dt: 20000000000,
                    formated_date: "2.12.2023",
                    temp: 23.4,
                    rainfall_level: 12,
                    windspeed: 20,
                    weather_type: "HOT",
                    wear_mask: false
                },
                day_three: {
                    unix_dt: 30000000000,
                    formated_date: "3.12.2023",
                    temp: 23.4,
                    rainfall_level: 12,
                    windspeed: 20,
                    weather_type: "HOT",
                    wear_mask: true
                },
                day_four: {
                    unix_dt: 40000000000,
                    formated_date: "4.12.2023",
                    temp: 23.4,
                    rainfall_level: 12,
                    windspeed: 20,
                    weather_type: "HOT",
                    wear_mask: true
                },
                day_five: {
                    unix_dt: 50000000000,
                    formated_date: "5.12.2023",
                    temp: 23.4,
                    rainfall_level: 12,
                    windspeed: 20,
                    weather_type: "HOT",
                    wear_mask: true
                }
            },
            days: {
                day_one: {
                    title: 'Monday'
                },
                day_two: {
                    title: 'Tuesday'
                },
                day_three: {
                    title: 'Wednesday'
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
                    //this.weatherData = data.daily_weather;
                    console.log(data);})
                .catch(error => console.error('Error:', error)
            );
            this.city = city;
            console.log("Set city data field to", city)

        },
        
        toggleShowResults(){
            this.showResults = !this.showResults
            console.log("show results has been pressed")
        }
    }
});



app.mount('#app');
