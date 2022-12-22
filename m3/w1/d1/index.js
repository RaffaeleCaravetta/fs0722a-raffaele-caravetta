var body = document.getElementById("body");
body === null || body === void 0 ? void 0 : body.addEventListener("load", function () {
    var input = document.createElement("input");
    var anotherInput = document.createElement("input");
    input.setAttribute("id", "input");
    anotherInput.setAttribute("id", "anotherInput");
});
var interval = setInterval(function () {
    var inpuT = document.getElementById("input");
    var anotherInpuT = document.getElementById("anotherInput");
}, 1000);
