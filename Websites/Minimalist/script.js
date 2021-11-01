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

const pf1 = document.querySelector(".pf1");
pf1.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pf1.src = photoUrl;
});
const pf2 = document.querySelector(".pf2");
pf2.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pf2.src = photoUrl;
});
const pf3 = document.querySelector(".pf3");
pf3.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of the image you want to insert :")
    if (photoUrl != '')
        pf3.src = photoUrl;
});

const pb1 = document.querySelector("#pb1");
pb1.addEventListener("click", function () {

    let percentage = prompt("Enter the percentage width of the bar you want, just enter the number : ")
    if (percentage != '')
        pb1.style.width = percentage + "%";
});
const pb2 = document.querySelector("#pb2");
pb2.addEventListener("click", function () {

    let percentage = prompt("Enter the percentage width of the bar you want, just enter the number : ")
    if (percentage != '')
        pb2.style.width = percentage + "%";
});
const pb3 = document.querySelector("#pb3");
pb3.addEventListener("click", function () {

    let percentage = prompt("Enter the percentage width of the bar you want, just enter the number : ")
    if (percentage != '')
        pb3.style.width = percentage + "%";
});
const pb4 = document.querySelector("#pb4");
pb4.addEventListener("click", function () {

    let percentage = prompt("Enter the percentage width of the bar you want, just enter the number : ")
    if (percentage != '')
        pb4.style.width = percentage + "%";
});
// const bgColor = document.querySelector("#bgcolor");
// bgColor.addEventListener("input", () => {

//     // document.querySelector(".linkContainer").style.backgroundColor = bgColor.value;
//     document.execCommand("forecolor", false, bgColor.value)
// })