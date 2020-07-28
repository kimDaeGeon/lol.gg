/// get querry string
var API_KEY = "RGAPI-63383576-64d8-4b63-9c74-004b146caeff";
var URL_summoner = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

window.onload = function() {
    var querryString = "summoner_name=";
    var currentURL = window.location.href;

    var SummonerName = currentURL.slice(currentURL.indexOf("summoner_name=") + querryString.length);

    URL_summoner += SummonerName;
    URL_summoner += "?api_key=" + API_KEY;
    console.log(URL_summoner);

    // Get Request

    var request = new Request(URL_summoner, {method:'GET', mode:'no-cors'});


/*
    fetch(URL_summoner)
        .then(response => response.json())
        .then((out) => {
            console.log("checkout this json! ", out);
        })
        .catch(err => {throw err});

    */
   getJSON(URL_summoner, function(err, data){
       if(err != null) alert("something went wrong: " + err);
       console.log(data);


       // json
       document.getElementById("summoner-name").innerHTML = data.name;

       document.getElementById("summoner-level").innerHTML = "Level : " + data.summonerLevel;

   });
   

}

var getJSON = function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', URL_summoner, true);
    request.responseType = "json";
    request.onload = function() {
        if(request.status == 200){
            callback(null, request.response);
        }
        else{
            callback(status, request.response);
        }
    };
    request.send();
};