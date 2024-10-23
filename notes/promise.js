//3 functions - walk dog , Clean kitchen , takeout trash
function walkdog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dogwalked = true;
            if(dogwalked){
                resolve("You walk the dog");
            }else{
                reject("You didn't walk the dog");
            }
        },1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const Clean = true;
            if(Clean){
                resolve("You clean the kitchen");
            }else{
                reject("You didn't clean the kitchen");
            }
        },2500);
    });
}
function takeTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const takeout = true;
            if(takeout){
                resolve("You takeout the trash");
            }else{
                reject("You didn't takeout the trash");
            }
        },1000);
    });
}
walkdog().then(value=>{console.log(value); return cleanKitchen()})
       .then(value=>{console.log(value); return takeTrash()})
       .then(value=>{console.log(value); return console.log("You finished all the chores")})
       .catch(error=>console.error(error));
