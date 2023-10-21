const server = 'https://render-weather-api-2.onrender.com/weather'  // SERVER API ENDPOINT



const app = Vue.createApp({
    data(){
        return {
            name: 'N/A' ,
            age: 22,
            showResults: false,
            city: 'N/A',
            country: 'N/A',
            lat: 0,
            lon: 0,
            bring_umbrella: false,
            daily_weather : {}
        }
    },

    methods: {
        getWeatherFromAPI(city){
            console.log("Getting Weather Data for ", city)
            const url = `${server}/${city}`;
            fetch(url)
                .then((res) => res.json())
                .then((result) => {
                    console.log(JSON.stringify(result, null, 3));
                    this.daily_weather = result.days
                    this.lat = result.lat
                    this.lon = result.lon
                    this.city = result.city
                    this.country = result.country
                    this.bring_umbrella = bring_umbrella
                });


        }
    }
});



app.mount('#app');
