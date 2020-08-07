const emailAddress = document.getElementById('email');
const password = document.getElementById('password');
const loginButton = document.getElementById('loginbutton');
const logoutButton = document.getElementById('logoutbutton');
const auth = firebase.auth();

loginButton.addEventListener('click', e=> {
    const email = emailAddress.value;
    const pass = password.value;

    const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.catch(e => console.log(e.message));

});

auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        location.href = 'dashboard.html';
    }else{
    }
});

