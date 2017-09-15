// Function
// function foo() {
//   console.log('Hello');
//   return 42;
// }

// console.log(foo.call());

// Observable (PUSH)
// Producer determines when the values are sent
var bar = Rx.Observable.create(function (observer) {
  console.log('Hello') || displayInPreview('Hello');
  observer.next(42);
  observer.next(100);
  observer.next(200);
  setTimeout(function () {
    observer.next(300);
  }, 1000);
});

// Consumer
bar.subscribe(function (x) {
  console.log(x) || displayInPreview(x);
});

// Generator (PULL)
// Producer
function* baz() {
  console.log('Hello') || displayInPreview('Hello');
  yield 42;
  yield 100;
  yield 200;
}

// Consumer determines when the value are sent
var iterator = baz();
console.log(iterator.next().value) || displayInPreview(iterator.next().value);
console.log(iterator.next().value) || displayInPreview(iterator.next().value);
console.log(iterator.next().value) || displayInPreview(iterator.next().value);



// noprotect

// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}