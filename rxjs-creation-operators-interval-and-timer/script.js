var date = new Date(new Date().getTime() + 3000);
var foo = Rx.Observable.timer(date, 1000);

foo.subscribe(function (x) {
  console.log('next ' + x);
}, function (err) {
  console.log('error ' + err);
}, function () {
  console.log('done');
});
