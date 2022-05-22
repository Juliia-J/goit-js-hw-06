const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    
    if (email === '' || password === '') {
        alert('Fill in all fields');
        
    } else {
        console.log({ email, password });
        form.reset();
    }
}
