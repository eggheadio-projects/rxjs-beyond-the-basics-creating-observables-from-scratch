var arr = [42, 100, 200];

// var foo = Rx.Observable.fromArray(arr);

// var foo = Rx.Observable.fromPromise(
//   fetch('https://null.jsbin.com')
// );

function* generator() {
  yield 10;
  yield 20;
  yield 30;
}

var iterator = generator();
var foo = Rx.Observable.from(iterator);

foo.subscribe(function (x) {
  console.log('next ' + x) || displayInPreview('next ' + x);
}, function (err) {
  console.log('error ' + err) || displayInPreview('error ' + err);
}, function () {
  console.log('done') || displayInPreview('done');
});

// noprotect

// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}