const emailAddress = document.getElementById('email');
const password = document.getElementById('password');
const signupButton = document.getElementById('signupbutton');

//adding signup event

signupButton.addEventListener('click', e=> {
    const email = emailAddress.value;
    const pass = password.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);

    promise.catch(e => console.log(e.message));

});

//adding a realtime listener

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        alert('Account created successfully!');
        console.log(firebaseUser.uid);
        location.href = 'dashboard.html';
    }else{
        console.log('Not Signed Up');
    }
})