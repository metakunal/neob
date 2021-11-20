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

const pf = document.querySelector(".profile-photo");
pf.addEventListener("click", function () {
    let photoUrl = prompt("Enter the url of your image, preferably square:")
    if (photoUrl != '')
        pf.src = photoUrl;
});


// const bgColor = document.querySelector("#bgcolor");
// bgColor.addEventListener("input", () => {

//     // document.querySelector(".linkContainer").style.backgroundColor = bgColor.value;
//     document.execCommand("forecolor", false, bgColor.value)
// })

