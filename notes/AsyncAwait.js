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
async function dochores(){
    
    try{
        const walkdogResult = await walkdog();
       console.log(walkdogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeTrashResult = await takeTrash();
    console.log(takeTrashResult);
    }catch(error){
        console.error(error);
    }

}
dochores();

//************************************************************* */

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {
    try {      
        let result = await promise; 
        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}
// calling the async function
asyncFunc();