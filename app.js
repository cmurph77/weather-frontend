const server = 'https://render-weather-api-2.onrender.com'  // SERVER API ENDPOINT



const app = Vue.createApp({
    data(){
        return {
            name: 'N/A' ,
            age: 22,
            showResults: false,
            showPollution: false,
            city: 'N/A',
            country: 'N/A',
            lat: 0,
            lon: 0,
            pm2: 0,
            bring_umbrella: false,
            daily_weather : {}
        }
    },

    methods: {
        getWeatherFromAPI(city){
            console.log("Getting Weather Data for ", city)
            const url = `${server}/weather/${city}`;
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


        },
        getPolutionFromAPI(){
            lat = this.lat
            lon = this.lon
            console.log("Getting Polution Data for  ( ",lat, ", ", lon, ")")
            const url = `${server}/polution/${lat}/${lon}`;
            fetch(url)
                .then((res) => res.json())
                .then((result) => {
                    console.log(JSON.stringify(result, null, 3));
                    this.pm2 = result.pm2_5
                });
        } 
    }
});



app.mount('#app');
