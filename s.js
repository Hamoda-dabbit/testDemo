console.log("sssssssss");

let d = {}

for (let i = 0; i < 5; i++) {
d[i]=i;
}

console.log(d);

let x=25;
d[2]=x;
x=50;
console.log(d);
d[2]=50;
console.log(x);
console.log(d);
delete d[4]
delete x;
console.log(x);
console.log(d);