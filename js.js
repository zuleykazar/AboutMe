/*Menu button*/

const btn=document.querySelector("button.menu-button");
const menu=document.querySelector(".mobile-menu");

btn.addEventListener('click', () => {
    menu.classList.toggle("hidden");
})

/*Form*/
const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarme!')
    }
}   