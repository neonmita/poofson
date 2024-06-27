$('.btnSearch').on('click', (event) => {
    $('#search').show('')
    $('.btnSearch').hide('')
})

let closeWind = document.getElementById("close");
let openWind = document.getElementById("error");
let wind = document.getElementById("sorry");

openWind.addEventListener("click", function () {
    wind.style.display = "block";
});

closeWind.addEventListener("click", function () {
    wind.style.display = "none";
});
