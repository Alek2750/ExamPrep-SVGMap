// JavaScript_DOM_JSON_AJAX_JPA

document.getElementById("btnsend").addEventListener("click", event);

function event() {
    var number = document.getElementById("amount").value;


    fetch("https://uinames.com/api/" + "?amount=" + number)

            .then(res => res.json())
            .then(data => {
                let uinames = data.map(n => "<tr>" + "<td>" + n.name + "</td>" + "<td>" + n.surname + "</td>" + "<td>" + n.gender + "</td>" + "</tr>")
                document.getElementById("tblbody").innerHTML = uinames.join("")
            });

}

const saveddata = fetch("https://uinames.com/api/" + "?amount=" + document.getElementById("amount").value);

document.getElementById("btnsql").addEventListener("click", event);
function convertSQL() {
    
}