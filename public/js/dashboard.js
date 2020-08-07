const logoutButton = document.getElementById('logoutbutton');
const auth = firebase.auth();

var checkScoreButton = document.getElementById('startCheckScore').addEventListener('click', function() {
    location.href = 'checkquestions.html';
});

logoutButton.addEventListener('click', e=> {
    firebase.auth().signOut();

});


auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log('Logged In');
    }else{
        console.log('Not Logged In');
        location.href = 'home.html';
    }
});

function goToSignout(){
    firebase.auth().signOut();
    location.href = 'home.html';
}