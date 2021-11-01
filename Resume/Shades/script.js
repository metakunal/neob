const siteBtn = document.querySelector("#site-btn");

function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
}

//     //Making Editable Content as false
//     var editable_elements = document.querySelectorAll("[contenteditable=true]");
//     for (var i = 0; i < editable_elements.length; i++)
//         editable_elements[i].setAttribute("contenteditable", false);



let fileName = document.getElementById('fileName');
siteBtn.addEventListener('click', () => {
    html2pdf().from(page).save(fileName.value)
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