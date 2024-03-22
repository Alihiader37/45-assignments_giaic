let myfriend = ["zain","umer","mustafa","noman","husain","ahmed"];
console.log(`table is not available i can invite only 2 person`);

let friend1 = myfriend.pop();
console.log(`sorry mr.${friend1} you are not invited!`);

let friend2 = myfriend.pop();
console.log(`sorry mr.${friend2} you are not invited!`);

let friend3 = myfriend.pop();
console.log(`sorry mr.${friend3} you are not invited!`);

let friend4 = myfriend.pop();
console.log(`sorry mr.${friend4} you are not invited!`);

for(let i = 0; i < myfriend.length; i++){
    console.log(`mr.${myfriend[i]} you are still invited`)
}