// function countToN(n){
//     for(var i = 0; i <= n; i++){
//         console.log(i);
//     }   
// }

// // get value from input
// var input1 = document.getElementById('text1');
// var input1Value = input1.value;
// console.log(input1Value);
// // var input1Value = input1.
// countToN(input1Value);


function countToN(){
    var n = document.getElementById('text1').value;
    var out = document.getElementById("output1");
    var result = "";
    for(var i = 0; i <= n; i++){
        result += i + " ";
        // console.log(result);
    }
    out.innerHTML = "Rezultatul este: " + result;   
}
