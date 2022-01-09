// INBUILT MODULES
// OS,PATH,FS(File System),HTTP

const os = require("os");
// importing inbuilt doesn't require"./"

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the systems uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
