const siteBtn = document.querySelector("#site-btn");

function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
}

siteBtn.addEventListener("click", () => {
    //Making Editable Content as false
    var editable_elements = document.querySelectorAll("[contenteditable=true]");
    for (var i = 0; i < editable_elements.length; i++)
        editable_elements[i].setAttribute("contenteditable", false);
    //Coding for the coding download link
    const a = document.createElement("a")
    const blob = new Blob(["<!doctype html><html><head><title>Print<\/title><\/head><body>" + code.innerHTML + "<\/body><\/html>"])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = "yourSite.html"
    a.click()
})

const pf = document.querySelector(".profile-photo");
const bgColor = document.querySelector("#bgcolor");
pf.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of your image, preferable square:")

    pf.src = photoUrl;
});



bgColor.addEventListener("input", () => {
    // const containerCOlor = document.querySelector(".container");
    document.querySelector(".container").style.backgroundColor = bgColor.value;
    // document.execCommand("forecolor", false, colorBtn.value)
})