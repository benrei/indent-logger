const indent = (indent, str)=>{
  if(str){
    const log = `${" ".repeat(indent)}${str}`;
    console.log(log);
  }
};
module.exports.log = log;

const indentTimestamp = (indent, str)=>{
  if(str){
    const now = new Date();
    const time = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} -> `
    const log = `${time}${" ".repeat(indent)}${str}`;
    console.log(log);
  }
};
module.exports.indentTimestamp = indentTimestamp;

const timestamp = (str)=>{
  if(str){
    const now = new Date();
    const time = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} -> `
    const log = `${time} ${str}`;
    console.log(log);
  }
};
module.exports.timestamp = timestamp;
