// function foo() {
//   console.log('Hello');
//   return 42;
// }

// console.log('before');
// console.log(foo.call());
// console.log('after');

var bar = Rx.Observable.create(function (observer) {
  console.log('Hello') || displayInPreview('Hello');
  observer.next(42);
  observer.next(100);
  observer.next(200);
  setTimeout(function () {
    observer.next(300);
  }, 1000);
});

console.log('before');
bar.subscribe(function (x) {
  console.log(x) || displayInPreview(x);
});
console.log('after') || displayInPreview('after');


// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}