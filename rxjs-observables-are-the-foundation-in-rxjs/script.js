var foo = Rx.Observable.interval(300);

var subscription = foo.subscribe({
  next: function (x) { console.log('next ' + x); },
  error: function (err) { console.log('error ' + err); },
  complete: function () { console.log('done'); },
});

setTimeout(function () {
  subscription.unsubscribe();  
}, 2000);
