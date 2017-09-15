var arr = [42, 100, 200];
var foo = Rx.Observable.from(arr);

function addEventHandler(handler) {
  document.addEventListener('click', handler);
}
function removeEventHandler(handler) {
  document.removeEventListener('click', handler);
}

// var foo = Rx.Observable.fromEventPattern(
//   addEventHandler, removeEventHandler
// );

var foo = Rx.Observable.fromEvent(document, 'click');

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