var foo = new Rx.Observable(function subscribe(observer) {
  var id = setInterval(function () {
    observer.next('hi');
  }, 1000);
  return function unsubscribe() {
    clearInterval(id);
  };
});

var subscription = foo.subscribe({
  next: function (x) { console.log('next ' + x) || displayInPreview('next ' + x); },
  error: function (err) { console.log('error ' + err) || displayInPreview('error ' + err); },
  complete: function () { console.log('done') || displayInPreview('done'); },
});

setTimeout(function () {
  subscription.unsubscribe();  
}, 4500);


// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}