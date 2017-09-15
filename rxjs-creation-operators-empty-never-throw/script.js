var foo = Rx.Observable.empty();

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