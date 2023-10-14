const filterInput=  (name)=> {
    name.forEach(i => {
        console.log(i)
    });
}


document.addEventListener("DOMContentLoaded", () =>{
    // task one
    const FORM_INPUT_NAME=  document.querySelector("#form__name")
    console.log(FORM_INPUT_NAME)
    FORM_INPUT_NAME.addEventListener("submit", (e)=>{
        e.preventDefault()
        const USER_NAME= document.querySelector("#nameInput").value

        filterInput(USER_NAME)
    })
})