window.addEventListener('load', ()=>{
    let long;
    let lat;
    let cityLocation = document.querySelector(".city-location");
    let cityTemperature = document.querySelector(".city-temperature");
    let weatherIcon = document.querySelector(".weather-icon");
    let weatherSummary = document.querySelector(".weather-summary");
    let weatherIcon1 = document.querySelector(".weather-icon-1");
    let weatherIcon2 = document.querySelector(".weather-icon-2");
    let weatherIcon3 = document.querySelector(".weather-icon-3");
    let nextTemp1 = document.querySelector(".next-temp-1");
    let nextTemp2 = document.querySelector(".next-temp-2");
    let nextTemp3 = document.querySelector(".next-temp-3");
    let nextTemp11 = document.querySelector(".next-temp-11");
    let nextTemp22 = document.querySelector(".next-temp-22");
    let nextTemp33 = document.querySelector(".next-temp-33");
    let date1 = document.querySelector(".date1");
    let date2 = document.querySelector(".date2");
    let date3 = document.querySelector(".date3");
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/07fcb720f4f30e9f9d7f0f54c91bff07/${lat}, ${long} `;
            
            
            fetch(api)
                .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
            function icon1(){ 
                const {temperature, summary, icon} = data.currently;
                cityTemperature.textContent = Math.round((temperature - 32) / 1.8);
                cityLocation.textContent = data.timezone.replace("Europe/", "");
                weatherSummary.textContent = summary;
                setIcons(icon, weatherIcon)
            };
                
            function icon2(){
                const {icon} = data.daily.data[0];
                setIcons(icon, weatherIcon1);
                nextTemp1.textContent = Math.round((data.daily.data[0].temperatureMin - 32) / 1.8);
                nextTemp11.textContent = Math.round((data.daily.data[0].temperatureMax - 32) / 1.8);
            };
            function icon3(){
                const {icon} = data.daily.data[1];
                setIcons(icon, weatherIcon2);
                nextTemp2.textContent = Math.round((data.daily.data[1].temperatureMin - 32) / 1.8);
                nextTemp22.textContent = Math.round((data.daily.data[1].temperatureMax - 32) / 1.8);
            };
            function icon4(){
                const {icon} = data.daily.data[2];
                setIcons(icon, weatherIcon3);
                nextTemp3.textContent = Math.round((data.daily.data[2].temperatureMin - 32) / 1.8);
                nextTemp33.textContent = Math.round((data.daily.data[2].temperatureMax - 32) / 1.8);
            };
                icon1();
                icon2();
                icon3();
                icon4();
                
            function day1() {
                let day = new Date();
                let nextDay = new Date(day);
                nextDay.setDate(day.getDate()+1);
                date1.textContent = nextDay.toDateString().substring(0, 10);
            };
            function day2() {
                let day = new Date();
                let nextDay = new Date(day);
                nextDay.setDate(day.getDate()+2);
                date2.textContent = nextDay.toDateString().substring(0, 10);
            };
            function day3() {
                let day = new Date();
                let nextDay = new Date(day);
                nextDay.setDate(day.getDate()+3);
                date3.textContent = nextDay.toDateString().substring(0, 10);
            };
                day1();  
                day2();
                day3();
            });
        });       
    } 
            function setIcons(icon, iconID){
                const skycons = new Skycons({color:"white"});
                const currentIcon = icon.replace(/-/g, "_").toUpperCase();
                skycons.play();
                return skycons.set(iconID, Skycons[currentIcon]);
            } 
});