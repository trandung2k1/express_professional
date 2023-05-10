// process.nextTick(function () {
//     console.log('Hi1');
// });
// setTimeout(function () {
//     console.log('Timeout');
// }, 0);
// process.nextTick(function () {
//     console.log('Hi2');
// });
// console.log('Hello');

// process.nextTick(function () {
//     console.log('Hi');
// });

setTimeout(function () {
    console.log('Hi');
});
console.log('Hello');
