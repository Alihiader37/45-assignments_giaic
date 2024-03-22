let username = ["admin","anwer","imtiaz","faisal","gafar","ahmed"];

for(let i = 0; i < username.length; i++){
    if(username[i] == "admin"){
    console.log(`\n hello ${username[i]} would you like to see a status report?\n`);
    }else{
    console.log(`hello ${username[i]} thankyou for logging in again!`)
    }
}