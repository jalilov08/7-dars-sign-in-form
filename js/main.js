document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const ageInput = document.getElementById('age');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const surname = surnameInput.value.trim();
        const age = ageInput.value.trim();

        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        localStorage.setItem('age', age);

        form.reset();
    });
});