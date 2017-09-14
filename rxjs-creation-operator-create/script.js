function subscribe(observer) {
  observer.next(42);
  observer.next(100);
  observer.next(200);
  observer.complete();
}

var foo = new Rx.Observable(subscribe);

foo.subscribe(
  function (x) { console.log('next ' + x); },
  function (err) { console.log('error ' + err); },
  function () { console.log('done'); },
);
