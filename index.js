const indent = (indent, str)=>{
  if(typeof str === 'object') str = '\n' + JSON.stringify(str, null, 2);
  if(str){
    const log = `${" ".repeat(indent)}${str}`;
    console.log(log);
  }
};
module.exports.indent = indent;

const indentTimestamp = (indent, str)=>{
  if(typeof str === 'object') str = '\n' + JSON.stringify(str, null, 2);
  if(str){
    const now = new Date();
    const time = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} -> `
    const log = `${time}${" ".repeat(indent)}${str}`;
    console.log(log);
  }
};
module.exports.indentTimestamp = indentTimestamp;

const timestamp = (str)=>{
  if(typeof str === 'object') str = '\n' + JSON.stringify(str, null, 2);
  if(str){
    const now = new Date();
    const time = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} -> `
    const log = `${time} ${str}`;
    console.log(log);
  }
};
module.exports.timestamp = timestamp;
