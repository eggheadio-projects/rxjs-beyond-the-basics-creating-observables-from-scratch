var bar = Rx.Observable.create(function (observer) {
  try {
    console.log('Hello');
    observer.next(42);
    observer.next(100);
    observer.next(200);
    setTimeout(function () {
      observer.next(300);
      observer.complete();
    }, 1000);
  } catch (err) {
    observer.error(err);
  }
});

bar.subscribe(
  function nextValueHandler(x) {
    console.log(x);
  },
  function errorHandler(err) {
    console.log('Something went wrong: ' + err);
  },
  function completeHandler() {
    console.log('done');
  }
);






