myDisplayDiv = document.getElementById('displayQuestions')
myDisplayDiv.style.visibility = "hidden"
questionDisplaySpan = document.getElementById('statementSpan')

//getbucket

baseUrl = 'https://sae-backend.el.r.appspot.com/getquestions'

fetch(baseUrl)
.then(response => response.json())
.then(data => addToGlobal(data))

var questionsArray = []
var currentIndex = 0

var userResponse = []


function addToGlobal(data){
    myDisplayDiv.style.visibility = "visible"
    questionsArray = data.questions
    currentIndex = 0
    questionDisplaySpan.innerHTML = questionsArray[0]
}


document.getElementById('goToNext').addEventListener('click', function() {

    responseValue = document.getElementById('responseRating').value
    userResponse.push(responseValue)
    console.log(userResponse);

    if(currentIndex == 8){
        document.getElementById('goToNext').innerHTML = 'Submit'
    }
    // Optional. The separator to be used. If omitted, the elements are separated with a comma

    if(currentIndex == 9){
        // Convert the response array in a comma string
        myStringReturn = userResponse.join()
        console.log(myStringReturn);
        // http://localhost:5000/getbucket?score=1,2,3,1,12
        fetch('https://sae-backend.el.r.appspot.com/getbucket?score=' + myStringReturn)
        .then((response => response.json()))
        .then(data => gotBucketFromServer(data))
        return
    }

    currentIndex ++
    questionDisplaySpan.innerHTML = questionsArray[currentIndex]

});


function gotBucketFromServer(data){
    alert(data.bucket)
    
}