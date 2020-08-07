const loginButton = document.getElementById('loginbutton');
const logoutButton = document.getElementById('logoutbutton');
const auth = firebase.auth();



document.getElementById('signoutTag').style.visibility = 'hidden';
logoutButton.addEventListener('click', e=> {
    firebase.auth().signOut();

});


auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log('Logged In');
        document.getElementById('signoutTag').style.visibility = 'visible';
        document.getElementById('loginMenu').style.visibility = 'hidden'
    }else{
        console.log('Not Logged In');
        document.getElementById('signoutTag').style.visibility = 'hidden';  
        document.getElementById('loginMenu').style.visibility = 'visible'      
    }
});


