function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML= 
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
let myPromise = new Promise(function(resolve, reject) {

    let x = 0;
  
    if (x == 0) {
      resolve("OK");
    } else {
      reject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  
  