/// get querry string

var SummonerName = "";
var API_KEY = "RGAPI-29ae83fb-99e1-4698-ab07-fd3fb2e7b9fc";

window.onload = function() {
    var querryString = "summoner_name=";
    var currentURL = window.location.href;

    document.getElementById("page_info").innerHTML = currentURL;
    SummonerName = currentURL.slice(currentURL.indexOf("summoner_name=") + querryString.length);

    GetRequest();
}


function GetRequest(){
    /// get request
    var URL = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ SummonerName + "?api_key=" + API_KEY;

    document.getElementById("page_info").innerHTML = URL;

    var request = new XMLHttpRequest();

    request.open('GET', URL, true);
    request.send(null);

    document.write(request.responseText);

}