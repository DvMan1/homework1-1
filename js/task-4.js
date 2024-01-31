const refForm = document.querySelector(".login-form")
console.log(refForm);

refForm.addEventListener("submit",submitForm)

function submitForm(event){
    event.preventDefault()
    const email = refForm.elements.email.value.trim()
    const password = refForm.elements.password.value.trim()
    if(email === "" || password === ""){
       window.alert("Error")
    }
    else{
        console.log(email, password);
        refForm.reset()
    }
}
