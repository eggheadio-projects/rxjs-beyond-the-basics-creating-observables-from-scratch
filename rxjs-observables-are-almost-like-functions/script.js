// function foo() {
//   console.log('Hello');
//   return 42;
// }

// console.log('before');
// console.log(foo.call());
// console.log('after');

var bar = Rx.Observable.create(function (observer) {
  console.log('Hello');
  observer.next(42);
  observer.next(100);
  observer.next(200);
  setTimeout(function () {
    observer.next(300);
  }, 1000);
});

console.log('before');
bar.subscribe(function (x) {
  console.log(x);
});
console.log('after');

