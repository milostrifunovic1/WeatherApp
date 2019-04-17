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
    let weatherIcon4 = document.querySelector(".weather-icon-4");
    let weatherIcon5 = document.querySelector(".weather-icon-5");
    let weatherIcon6 = document.querySelector(".weather-icon-6");
    let weatherIcon7 = document.querySelector(".weather-icon-7");
    let nextTemp1 = document.querySelector(".next-temp-1");
    let nextTemp2 = document.querySelector(".next-temp-2");
    let nextTemp3 = document.querySelector(".next-temp-3");
    let nextTemp4 = document.querySelector(".next-temp-4");
    let nextTemp5 = document.querySelector(".next-temp-5");
    let nextTemp6 = document.querySelector(".next-temp-6");
    let nextTemp7 = document.querySelector(".next-temp-7");
    let nextTemp11 = document.querySelector(".next-temp-11");
    let nextTemp22 = document.querySelector(".next-temp-22");
    let nextTemp33 = document.querySelector(".next-temp-33");
    let nextTemp44 = document.querySelector(".next-temp-44");
    let nextTemp55 = document.querySelector(".next-temp-55");
    let nextTemp66 = document.querySelector(".next-temp-66");
    let nextTemp77 = document.querySelector(".next-temp-77");
    let date1 = document.querySelector(".date1");
    let date2 = document.querySelector(".date2");
    let date3 = document.querySelector(".date3");
    let date4 = document.querySelector(".date4");
    let date5 = document.querySelector(".date5");
    let date6 = document.querySelector(".date6");
    let date7 = document.querySelector(".date7");
    let weatherSumNext1 = document.querySelector("#day1");
    let weatherSumNext2 = document.querySelector("#day2");
    let weatherSumNext3 = document.querySelector("#day3");
    let weatherSumNext4 = document.querySelector("#day4");
    let weatherSumNext5 = document.querySelector("#day5");
    let weatherSumNext6 = document.querySelector("#day6");
    let weatherSumNext7 = document.querySelector("#day7");
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/07fcb720f4f30e9f9d7f0f54c91bff07/${lat},${long}?&units=auto&lang=sr`;
            
            
            fetch(api)
                .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
            function mainPart(){ 
                const {temperature, summary, icon} = data.currently;
                cityTemperature.textContent = Math.round(temperature);
                cityLocation.textContent = data.timezone.replace("Europe/", "");
                weatherSummary.textContent = summary;
                setIcons(icon, weatherIcon);
            };
                
            function icon1(){
                const {icon} = data.daily.data[0];
                setIcons(icon, weatherIcon1);
                nextTemp1.textContent = Math.round(data.daily.data[0].temperatureMin);
                nextTemp11.textContent = Math.round(data.daily.data[0].temperatureMax);
                weatherSumNext1.textContent = data.daily.data[0].summary;
            };
            function icon2(){
                const {icon} = data.daily.data[1];
                setIcons(icon, weatherIcon2);
                nextTemp2.textContent = Math.round(data.daily.data[1].temperatureMin);
                nextTemp22.textContent = Math.round(data.daily.data[1].temperatureMax);
                weatherSumNext2.textContent = data.daily.data[1].summary;
            };
            function icon3(){
                const {icon} = data.daily.data[2];
                setIcons(icon, weatherIcon3);
                nextTemp3.textContent = Math.round(data.daily.data[2].temperatureMin);
                nextTemp33.textContent = Math.round(data.daily.data[2].temperatureMax);
                weatherSumNext3.textContent = data.daily.data[2].summary;
            };
             function icon4(){
                const {icon} = data.daily.data[3];
                setIcons(icon, weatherIcon4);
                nextTemp4.textContent = Math.round(data.daily.data[3].temperatureMin);
                nextTemp44.textContent = Math.round(data.daily.data[3].temperatureMax);
                weatherSumNext4.textContent = data.daily.data[3].summary;
            };
             function icon5(){
                const {icon} = data.daily.data[4];
                setIcons(icon, weatherIcon5);
                nextTemp5.textContent = Math.round(data.daily.data[4].temperatureMin);
                nextTemp55.textContent = Math.round(data.daily.data[4].temperatureMax);
                weatherSumNext5.textContent = data.daily.data[4].summary;
            };
             function icon6(){
                const {icon} = data.daily.data[5];
                setIcons(icon, weatherIcon6);
                nextTemp6.textContent = Math.round(data.daily.data[5].temperatureMin);
                nextTemp66.textContent = Math.round(data.daily.data[5].temperatureMax);
                weatherSumNext6.textContent = data.daily.data[5].summary;
            };
             function icon7(){
                const {icon} = data.daily.data[6];
                setIcons(icon, weatherIcon7);
                nextTemp7.textContent = Math.round(data.daily.data[6].temperatureMin);
                nextTemp77.textContent = Math.round(data.daily.data[6].temperatureMax);
                weatherSumNext7.textContent = data.daily.data[6].summary;
            };
                
                mainPart();
                icon1();
                icon2();
                icon3();
                icon4();
                icon5();
                icon6();
                icon7();
                
                
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
            function day4() {
                let day = new Date();
                let nextDay = new Date(day);
                nextDay.setDate(day.getDate()+4);
                date4.textContent = nextDay.toDateString().substring(0, 10);
            };
            function day5() {
                let day = new Date();
                let nextDay = new Date(day);
                nextDay.setDate(day.getDate()+5);
                date5.textContent = nextDay.toDateString().substring(0, 10);
            };
            function day6() {
                let day = new Date();
                let nextDay = new Date(day);
                nextDay.setDate(day.getDate()+6);
                date6.textContent = nextDay.toDateString().substring(0, 10);
            };
            function day7() {
                let day = new Date();
                let nextDay = new Date(day);
                nextDay.setDate(day.getDate()+7);
                date7.textContent = nextDay.toDateString().substring(0, 10);
            };
                
                day1();  
                day2();
                day3();
                day4();
                day5();
                day6();
                day7();
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