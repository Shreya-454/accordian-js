let accordianheader = document.querySelectorAll(".accordianheader");


accordianheader.forEach((e) => e.addEventListener("click", () => {
    let hide = e.classList.contains("active");
    accordianheader.forEach((e) => {
        e.classList.remove("active");
    })
    if (!hide) {
        e.classList.toggle("active");
    }
}))