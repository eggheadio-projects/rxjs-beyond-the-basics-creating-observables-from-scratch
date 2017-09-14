var foo = new Rx.Observable(function subscribe(observer) {
  var id = setInterval(function () {
    observer.next('hi');
  }, 1000);
  return function unsubscribe() {
    clearInterval(id);
  };
});

var subscription = foo.subscribe({
  next: function (x) { console.log('next ' + x); },
  error: function (err) { console.log('error ' + err); },
  complete: function () { console.log('done'); },
});

setTimeout(function () {
  subscription.unsubscribe();  
}, 4500);
