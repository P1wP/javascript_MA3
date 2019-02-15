//Use RegEx to validate form
/*
When you click the button, call a JavaScript function that should validate that the first number is 0 and the last number is 7. The number should only be 7 digits long. If it is not it should log to the console.
*/

document.getElementById("btn").addEventListener("click", function () {
    var form = document.getElementsByTagName("input");
    for (var i = 0; i < form.length; i++){
        var myInput = form[i].value;
        console.log(myInput);
        var rules = new RegExp(form[i].pattern);
        var theTest = rules.test(myInput);
        console.log(theTest);
    }
});

