
document.querySelector("#insert").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        console.log("u press enter")
        insertDiv()
    }
})
document.querySelector("#button").addEventListener("click", event => {
    console.log("u clicked")
    insertDiv()

})


insertDiv = () => {
    console.log("u run insertDiv")
    const nuovoDiv = document.createElement("div")
    console.log(nuovoDiv)
    nuovoDiv.textContent = document.getElementById("insert").value
    console.log(nuovoDiv)



    nuovoDiv.addEventListener("click", function () {
        nuovoDiv.style.textDecoration = "line-throught"
    })



    document.querySelector("#container-lista").appendChild(nuovoDiv)
}
