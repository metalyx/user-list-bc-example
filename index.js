const fetchButton = document.getElementById('fetchButton');
const root = document.getElementById('root');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

fetchButton.addEventListener('click', async () => {
    const userList = await fetch(USERS_URL).then(res => res.json());
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < userList.length; i++) {
        const { name, username, email, address } = userList[i];
        const { city, street, suite } = address;
        const div = document.createElement('div');
        const ul = document.createElement('ul');
        
        const nameLi = document.createElement('li');
        nameLi.innerHTML = `<span>Name: </span>${name}`;

        const usernameLi = document.createElement('li');
        usernameLi.innerHTML = `<span>Username: </span>${username}`;

        const emailLi = document.createElement('li');
        emailLi.innerHTML = `<span>Email: </span>${email}`;

        const cityLi = document.createElement('li');
        cityLi.innerHTML = `<span>City: </span>${city}`;

        const streetLi = document.createElement('li');
        streetLi.innerHTML = `<span>Street: </span>${street}`;

        const suiteLi = document.createElement('li');
        suiteLi.innerHTML = `<span>Suite: </span>${suite}`;

        ul.appendChild(nameLi);
        ul.appendChild(usernameLi);
        ul.appendChild(emailLi);
        ul.appendChild(cityLi);
        ul.appendChild(streetLi);
        ul.appendChild(suiteLi);


        div.classList.add('userCard');
        div.appendChild(ul);

        fragment.appendChild(div);
    }

    root.innerHTML = '';
    root.appendChild(fragment)
});
