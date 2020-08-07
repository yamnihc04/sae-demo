$(document).ready(function() {
    $('.computer.only .dropdown.item')
      .popup({
        inline     : true,
        hoverable  : true,
        position   : 'bottom left',
        delay: {
          show: 300,
          hide: 800
        }
      })
    ;
    $('.ui.dropdown').dropdown();
    $('.ui.accordion').accordion();
  
    // bind "hide and show vertical menu" event to top right icon button 
    $('.ui.toggle.button').click(function() {
      $('.ui.vertical.menu').toggle("250", "linear")
    });
  });


function goToLogin(){
    location.href = 'login.html';
}

function goToSignup(){
    location.href = 'signup.html';
}

function goToSignout(){
    firebase.auth().signOut();
}