var people = document.getElementById("people");
var height = document.getElementById("height");

var mass = document.getElementById("mass");
var birthYear = document.getElementById("birthYear");
var gender = document.getElementById("gender");

var people2 = document.getElementById("people2");
var height2 = document.getElementById("height2");

var mass2 = document.getElementById("mass2");
var birthYear2 = document.getElementById("birthYear2");
var gender2 = document.getElementById("gender2");

var people3 = document.getElementById("people3");
var height3 = document.getElementById("height3");

var mass3 = document.getElementById("mass3");
var birthYear3 = document.getElementById("birthYear3");
var gender3 = document.getElementById("gender3");

var planets = document.getElementById("planets");

var films = document.getElementById("films");

function reqListener () {
    var data = JSON.parse(this.responseText);
    people.innerHTML = data.name;
    height.innerHTML = data.height;

    mass.innerHTML = data.mass;
    birthYear.innerHTML = data.birth_year;
    gender.innerHTML = data.gender;
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.co/api/people/1/");
oReq.send();

function reqListener2 () {
    var data2 = JSON.parse(this.responseText);
    people2.innerHTML = data2.name;
    height2.innerHTML = data2.height;

    mass2.innerHTML = data2.mass;
    birthYear2.innerHTML = data2.birth_year;
    gender2.innerHTML = data2.gender;
}

var oReq2 = new XMLHttpRequest();
oReq2.addEventListener("load", reqListener2);
oReq2.open("GET", "https://swapi.co/api/people/5/");
oReq2.send();

function reqListener3 () {
    var data3 = JSON.parse(this.responseText);
    people3.innerHTML = data3.name;
    height3.innerHTML = data3.height;

    mass3.innerHTML = data3.mass;
    birthYear3.innerHTML = data3.birth_year;
    gender3.innerHTML = data3.gender;
}

var oReq3 = new XMLHttpRequest();
oReq3.addEventListener("load", reqListener3);
oReq3.open("GET", "https://swapi.co/api/people/4/");
oReq3.send();

function reqListener4 () {
    var data4 = JSON.parse(this.responseText)
    for (var i = 0; i < data4.results.length; i++){
        var div = document.createElement("div")
        console.log(data4.results[i].name)
        div.innerHTML = data4.results[i].name
        planets.appendChild(div);
    }
  }
  
var oReq4 = new XMLHttpRequest();
oReq4.addEventListener("load", reqListener4);
oReq4.open("GET", "https://swapi.co/api/planets/");
oReq4.send();

  function reqListener5 () {
    var data5 = JSON.parse(this.responseText)
    
  }
  
  var oReq5 = new XMLHttpRequest();
  oReq5.addEventListener("load", reqListener5);
  oReq5.open("GET", "http://www.example.com/api");
  oReq5.send();









