const InputName = document.getElementById("nom");
const InputLast = document.getElementById("prenom")
const InputTelephone = document.getElementById("telephone")
const InputEmail = document.getElementById("email")
const TextArea = document.getElementById('message')
const spanName = document.getElementById('spanName')
const spanLastName = document.getElementById('spanLast')
const spanTelephone = document.getElementById('spanTelephone')
const spanEmail = document.getElementById("spanEmail")
const spanTextArea = document.getElementById("spanTextArea")
const listRendez = document.getElementById("list")
let users = [];



const changerInputEmail = () => {
    if (!InputEmail.value.includes("@gmail.com")) {
        spanEmail.innerText = `Doit etre avec @gmail.com`;
        spanEmail.style.color = 'red';
    } else {
        spanEmail.style.color = "green";
        spanEmail.innerText = `C'EST BIEN`;
    }
}

const formSubmit = (event) => {
    event.preventDefault();

    if (InputName.value === '' || InputLast.value === '' || InputEmail.value === '' || InputTelephone.value === '') {
        spanName.innerText = "Obligatoire*";
        spanLastName.innerText = "Obligatoire*";
        spanTelephone.innerText = "Obligatoire*";
        spanEmail.innerText = "Obligatoire*";
        spanTextArea.innerText = "Obligatoire*";
        spanName.style.color = spanEmail.style.color = spanLastName.style.color = spanTelephone.style.color = spanTextArea.style.color = 'red';

    } else {
        spanName.innerText = "";
        spanLastName.innerText = "";
        spanTelephone.innerText = "";
        spanEmail.innerText = "";
        spanTextArea.innerText = "";
    }

    // stockage en local storage : 

    const user = {
        name: InputName.value,
        lastName: InputLast.value,
        telephone: InputTelephone.value,
        email: InputEmail.value,
        message: TextArea.value
    }

    let get = JSON.parse(localStorage.getItem('user'));
    users = [get];
    users.push(user);

    localStorage.setItem('user', JSON.stringify(users))
    // console.table(JSON.stringify(users))
    console.table(users)
};


// console.log(users)


users.map((value) => {
    listRendez.innerHTML += ` <div class="card">
            <div class="card__header">
                <h2 class="card__name">${value.InputName}</h2>
                <p class="card__contact">Contact professionnel</p>
            </div>
            <div class="card__body">
                <div class="card__info">
                    <span class="card__icon">📞</span>
                    <span class="card__label">Téléphone:</span>
                    <span class="card__value">${value.InputTelephone}</span>
                </div>
                <div class="card__info">
                    <span class="card__icon">✉️</span>
                    <span class="card__label">Email:</span>
                    <span class="card__value">${value.InputEmail}</span>
                </div>
                <div class="card__message">
                    <span class="card__label">Message:</span>
                    <span class="card__value">${value.TextArea}</span>
                </div>
            </div>
        </div>`;
})


