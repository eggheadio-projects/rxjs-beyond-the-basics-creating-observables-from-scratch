// Function
// function foo() {
//   console.log('Hello');
//   throw new Error('invalid something');
//   return 42;
// }

// try {
//   console.log(foo.call());
// } catch (err) {
//   console.log('Something wrong happened: ' + err);
// }
// console.log('This here still runs');

// Observable
var bar = Rx.Observable.create(function (observer) {
  try {
    console.log('Hello') || displayInPreview('Hello');
    observer.next(42);
    observer.next(100);
    observer.next(200);
    setTimeout(function () {
      observer.next(300);
    }, 1000);
  } catch (err) {
    observer.error(err);
  }
});

bar.subscribe(function nextValueHandler(x) {
  console.log(x) || displayInPreview(x);
}, function errorHandler(err) {
  console.log('Something went wrong: ' + err) || displayInPreview('Something went wrong: ' + err);
});



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}