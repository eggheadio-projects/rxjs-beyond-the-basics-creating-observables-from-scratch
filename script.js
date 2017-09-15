var foo = Rx.Observable.interval(300);

var subscription = foo.subscribe({
  next: function (x) { console.log('next ' + x) || displayInPreview('next ' + x); },
  error: function (err) { console.log('error ' + err) || displayInPreview('error ' + err); },
  complete: function () { console.log('done') || displayInPreview('done'); },
});

setTimeout(function () {
  subscription.unsubscribe();  
}, 2000);


// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}