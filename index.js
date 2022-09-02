// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(res => res.json())
    .then(newUser => {
        const h1 = document.createElement('h1');
        h1.textContent = newUser.id
        document.body.appendChild(h1);
    })
    .catch(message => {
        const p = document .createElement('p');
        p.textContent = message
        document.body.appendChild(p);
    })
}