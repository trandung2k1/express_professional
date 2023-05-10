// const compute = () => {
//     console.log('Hi');
//     compute();
// };
// compute();

const compute = () => {
    console.log('Hi');
    process.nextTick(compute);
};
compute();
