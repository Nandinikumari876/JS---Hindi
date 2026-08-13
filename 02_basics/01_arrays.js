const myArr=[1,2,3,4,5]
// console.log(myArr[0]);

const heros=["ironman","capt amer","thor"]
// console.log(heroes);

const myArr2=new Array(1,2,3,4)
// console.log(myArr2)


/// array methods////
// myArr.push(6)
// myArr.push(12)
// myArr.pop()
// myArr.unShift(4)
//console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr=myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

const marvel_heros=["ironman","thor","captian"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
//console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // in this you add more than 2 arrays
//console.log(all_new_heros);


