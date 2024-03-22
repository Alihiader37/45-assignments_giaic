let myfriend = ["zain","umer","mustafa","noman"];
console.log(myfriend);

myfriend.unshift("gafar");
//["gafar","zain","umer","mustafa","noman"];
console.log(myfriend);

myfriend.splice( 3,0,"hammad");
//add a midle
console.log(myfriend);

myfriend.push("tahir");
//add at last
console.log(myfriend);

for(let i = 0; i < myfriend.length;i++){
    console.log(`mr. ${myfriend[i]} you are invited to my dinner`);
}
