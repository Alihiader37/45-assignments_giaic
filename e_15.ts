let myfriends: string [] = ["zain","umer","mustafa","noman"];

console.log(`due to some personal resons mr. ${myfriends[2]} will not come on my dinner`);
myfriends[2]  = "sameer" ;

console.log(`new list of my friend who are comming to my dinner\n`);
for(let i = 0; i < myfriends.length; i++){
    console.log(`${i + 2}. ${myfriends[i]}`);
}