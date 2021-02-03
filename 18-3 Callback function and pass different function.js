function callBack(name,age,job) {
    console.log("Hello I/'m ", name);
    console.log("Age is :", age);
    job(); //step:02 calling function and return the output of function
}
function freelancer() {
    console.log("I/'m Freelancer");
}
function iltes() {
    console.log("I/'m Doing ILTES Preparation");
}
function Developer() {
    console.log("Developer");
}

callBack("Anthor",16,freelancer); // step:01--calling function from here and Passing step : 2
callBack("Anthor",16,iltes);