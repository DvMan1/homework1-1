const refInput = document.querySelector("#name-input")
const refOnput = document.querySelector("#name-output")

refInput.addEventListener('change',changeName)

function changeName(event){
    refOnput.textContent = event.currentTarget.value.trim()
    if(event.currentTarget.value.trim() === ""){
        refOnput.textContent = "Anonymous"
    }
}