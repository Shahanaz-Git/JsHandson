const datas = [
    { name: "Sultana", role: "Software Engineer" },
    { name: "Ravali", role: "Doctor" }
];

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data) => {
            output += `<li>${data.name}</li>`; // Append data
        });
        const lstObj = document.getElementById('data-container');
        lstObj.innerHTML = `<ul>${output}</ul>`; // Display the output in the container
    }, 1000);
}
function createdData(newdata,callback){
    setTimeout(()=>{
        datas.push(newdata);
        callback;
    },2000);
}
// Automatically call the function to display data
//getDatas();
createdData({name:"Bhavya",role:"HR"},getDatas);
