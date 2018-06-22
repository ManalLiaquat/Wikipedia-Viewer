function func1() {
    var srch = document.getElementById("search").value;
    var url = "https://en.wikipedia.org/w/index.php?search=";
    var iframe = document.getElementById("iframe");

    url = url + srch;
    iframe.setAttribute("src", url);
}

/* custom button's behaviour */
var input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myBtn").click();
    }
});