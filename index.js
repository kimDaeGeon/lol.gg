function Search() {
    var SummonerName = document.getElementById("summoner-name").value;
    location.href="search/search_result.html?" + "summoner_name=" + SummonerName;
    return SummonerName;
}