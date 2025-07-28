var userName = "kalai";


function handleTask(taskName, onComplete) {
  console.log(` User: ${userName}`);
  console.log(` Task Received: ${taskName}`);
  
  setTimeout(() => {
    console.log(` Task "${taskName}" Completed!`);
    onComplete(); 
  }, 2000);
}

function notifyUser() {
  console.log(" Notification sent to user.");
}

handleTask("Generate Report", notifyUser);

function scopeCheck() {
  var globalCheck = " Declared with var";
  let blockLet = " Let Scoped";
  const blockConst = " Const Scoped";

  console.log("Inside Function:");
  console.log(globalCheck); 
  console.log(blockLet);    
  console.log(blockConst); 

  if (true) {
    var globalCheck = " Re-declared with var in block";
    let blockLet = " Block Scoped Let";
    const blockConst = " Block Scoped Const";

    console.log("Inside Block:");
    console.log(globalCheck); 
    console.log(blockLet);    
    console.log(blockConst);  
  }

  console.log("After Block:");
  console.log(globalCheck); 
  console.log(blockLet);    
  console.log(blockConst);  
}

scopeCheck();
