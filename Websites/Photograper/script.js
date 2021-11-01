const siteBtn = document.querySelector("#site-btn");
function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
}

siteBtn.addEventListener("click", () => {
    //Making Editable Content as false
    var editable_elements = document.querySelectorAll("[contenteditable=true]");
    for (var i = 0; i < editable_elements.length; i++)
        editable_elements[i].setAttribute("contenteditable", false);


    //Coding for the creating html download link
    const a = document.createElement("a")
    const blob = new Blob(["<!doctype html><html><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Portfolio<\/title><\/head><body>" + code.innerHTML + "<\/body><\/html>"])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = "yourSite.html"
    a.click()
})

const pt1 = document.querySelector("#pt1");
pt1.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pt1.src = photoUrl;
});
const pt2 = document.querySelector("#pt2");
pt2.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pt2.src = photoUrl;
});
const pt3 = document.querySelector("#pt3");
pt3.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pt3.src = photoUrl;
});
const pt4 = document.querySelector("#pt4");
pt4.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pt4.src = photoUrl;
});
const pt5 = document.querySelector("#pt5");
pt5.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pt5.src = photoUrl;
});
const pt6 = document.querySelector("#pt6");
pt6.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pt6.src = photoUrl;
});
const pt7 = document.querySelector("#pt7");
pt7.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pt7.src = photoUrl;
});
const pt8 = document.querySelector("#pt8");
pt8.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pt8.src = photoUrl;
});


// const bgColor = document.querySelector("#bgcolor");
// bgColor.addEventListener("input", () => {

//     // document.querySelector(".linkContainer").style.backgroundColor = bgColor.value;
//     document.execCommand("forecolor", false, bgColor.value)
// })