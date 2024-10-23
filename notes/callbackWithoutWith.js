//without callback
function task1(){
    setTimeout(()=>{
        console.log("Task 1 Completed");
    },2000);
}
function task2(){
    setTimeout(()=>{
        console.log("Task 2 Completed");
    },1000);
}
function task3(){
    setTimeout(()=>{
        console.log("Task 3 Completed");
    },3000);
}
function task4(){
    setTimeout(()=>{
        console.log("Task 4 Completed");
    },1500);
}
task1();
task2();
task3();
task4();
console.log("All task completed");
//output will be
// All task completed
// Task 2 Completed
// Task 4 Completed
// Task 1 Completed
// Task 3 Completed

//with callback
function task5(callback){
    setTimeout(()=>{
        console.log("Task 5 Completed");
        callback();
    },2000);
}
function task6(callback){
    setTimeout(()=>{
        console.log("Task 6 Completed");
        callback();
    },1000);
}
function task7(callback){
    setTimeout(()=>{
        console.log("Task 7 Completed");
        callback();
    },3000);
}
function task8(callback){
    setTimeout(()=>{
        console.log("Task 8 Completed");
        callback();
    },1500);
}
task5(()=>{
    task6(()=>{
        task7(()=>{
            task8(()=>console.log("All Task completed"));
        });
    });
});

