// SVG Europa Map
// Del 1

var rect = document.getElementById("svg2").addEventListener("click", targetLand);

var lastTarget;

//This function will be called by the eventListener
function targetLand(e) {

    //previous land will be colored grey
    if (lastTarget) {
        document.getElementById(lastTarget.id).style.fill = "grey";
    }
    //click target
    var target = e.target;

    //clicked land with be red
    document.getElementById(target.id).style.fill = "red";


    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + target.id)

        .then(res => res.json())
        .then(data => document.getElementById("land").innerHTML =
            "<h1>" + data[0].name + "</h1><br />" +
            "Capital: " + data[0].capital + "<br />" +
            "Population: " + data[0].population + "<br />" +
            "Area: " + data[0].area + "<br />" +
            "Currencies: " + data[0].currencies + "<br />" +
            "timezones: " + data[0].timezones + "<br />" +
            "Area: " + data[0].area + "<br />");


    lastTarget = target;
};

// Del 2
//The same-origin policy is a concept in the web application security model.
//Under the policy, a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin.
//An origin is defined as a combination of URI scheme, hostname, and port number.
//Fetch data via an adapter on the Origin server.
//If you have no control/influence of the API-server setup
//Since SOP is a policy implemented only by Browsers we can make a Proxy on our Origin-Server