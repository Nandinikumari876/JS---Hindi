const myObject={
    js: 'javascipt',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
   // console.log(`${key} shortcut is for ${ myObject[key]}`)
}


const programming =["js","rb","py","java","cpp"]
for( const key in programming){
    //console.log(programming[key]);
}

// const map =new Map()
// map.set(`In`,`India`)
// map.set(`USA`,` united state of america`)
// map.set(`Fr`,` France`)

// for(const key in map){
//     console.log(key);
//} //---->>>> map is not iterable that's why it's not run on for in loop