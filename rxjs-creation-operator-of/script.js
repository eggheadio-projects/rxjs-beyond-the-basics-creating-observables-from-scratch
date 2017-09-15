var foo = Rx.Observable.of(42, 100, 200);

// var bar = Rx.Observable.create(function (observer) {
//   observer.next(42);
//   observer.next(100);
//   observer.next(200);
//   observer.complete();
// });

foo.subscribe(function (x) {
  console.log('next ' + x) || displayInPreview('next ' + x);
}, function (err) {
  console.log('error ' + err) || displayInPreview('error ' + err);
}, function () {
  console.log('done') || displayInPreview('done');
});


// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}