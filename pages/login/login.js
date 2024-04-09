
const date = new Date();
const hour = date.getHours();

const submit = document.getElementById('submit');
const container = document.getElementById('container');

if (hour > 19 && hour < 24 || hour < 6)
     wish.innerHTML = 'לילה טוב!';
 else if (hour >= 6 && hour <= 12)
     wish.innerHTML = 'בוקר טוב!';
 else if (hour <= 17)
     wish.innerHTML = 'צהרים טובים!';
 else if (hour <= 19)
    wish.innerHTML = 'ערב טוב!';


const newUser=document.querySelector("#newUser");
newUser.innerHTML = 'כדי להצטרף למועדון יש להשלים את טופס ההצטרפות';

const confirmPass = document.createElement('input');
confirmPass.type = 'password';
confirmPass.placeholder = 'אימות סיסמה';

const divPass = document.createElement('div');
divPass.classList.add('col-6', 'col-12-xsmall');
divPass.append(confirmPass);

const UserName = document.createElement('input');
UserName.type = 'text';
UserName.placeholder = 'שם';

const divName = document.createElement('div');
divName.classList.add('col-6', 'col-12-xsmall');
divName.append(UserName);

const email = document.createElement('input');
email.type = 'email';
email.placeholder = 'אימייל';

const divEmail = document.createElement('div');
divEmail.classList.add('col-6', 'col-12-xsmall');
divEmail.append(email);

const address = document.createElement('input');
address.type = 'address';
address.placeholder = 'כתובת';

const divaddress = document.createElement('div');
divaddress.classList.add('col-6', 'col-12-xsmall');
divaddress.append(address);

const tel = document.createElement('input');
tel.type = 'tel';
tel.placeholder =  'טלפון';
tel.onkeypress = (event) => {
    if (!(event.key >= 0 && event.key <= 9))
        event.preventDefault();
}

const divtel = document.createElement('div');
divtel.classList.add('col-6', 'col-12-xsmall');
divtel.append(tel);

container.append(divName,divPass, divtel, divEmail, divaddress);

submit.onclick = (event) => {
    event.preventDefault();

    if (tel.value.length > 10 || tel.value.length < 9) {
           alert('יש להכניס מספר טלפון תקין בן 9 או 10 ספרות');
         return;
    }

    if (confirmPass.value !== sessionStorage.getItem('password')) {
       alert("יש להקיש את הסיסמא שבחרתם לשני המקומות");
        return;
    }

    if (UserName.value === '' || confirmPass.value === '' || tel.value === '' || email.value === '' || address.value === '') {
        alert('יש למלא את כל השדות');
        return;
    }

    let p = {
        name: UserName.value,
        password: confirmPass.value,
        email: email.value,
        address: address.value,
        phone: tel.value,
        cart: [],
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(p);
    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem("club",true);
    alert("הצטרפת בהצלחה למועדון😀😀😀");
};