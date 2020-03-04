const students = [
    {id:12,name:"John"},
    {id:73,name:"raj"},
    {id:44,name:"Alia"}
];

// const names = [];


// for(let i = 0;i<students.length;i++){
//     const element = students[i];
//     names.push(element.name);
// }


const names = students.map(s=>s.name)

console.log(names);
