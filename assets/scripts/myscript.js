// button conecction add
document.querySelector("#button-add").addEventListener("click", event => {
    // console.log("u clicked")
    insertDiv()
})
// delete function
document.querySelector("#button-delete").addEventListener("click", () => {
    const listOfClass = document.getElementsByClassName("try-red")
    for (let i = 0; i < listOfClass.length; i++) {
        listOfClass[i].textContent = ""
    }
})
// logic add div
insertDiv = () => {
    const nuovoDiv = document.createElement("div")
    nuovoDiv.textContent = document.getElementById("insert").value

    nuovoDiv.addEventListener("click", function () {
        nuovoDiv.classList.toggle("try-red")
    })
    document.querySelector("#container-lista").appendChild(nuovoDiv)
    document.querySelector("#insert").value = ""
}

