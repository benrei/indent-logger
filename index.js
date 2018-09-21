const indent = (indent, stringOrObject)=>{
  if(typeof stringOrObject === 'object') stringOrObject = '\n' + JSON.stringify(stringOrObject, null, 2);
  if(stringOrObject){
    const log = `${" ".repeat(indent)}${stringOrObject}`;
    console.log(log);
  }
};
module.exports.indent = indent;

const indentTimestamp = (indent, stringOrObject)=>{
  if(typeof stringOrObject === 'object') stringOrObject = '\n' + JSON.stringify(stringOrObject, null, 2);
  if(stringOrObject){
    const now = new Date();
    const time = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} -> `
    const log = `${time}${" ".repeat(indent)}${stringOrObject}`;
    console.log(log);
  }
};
module.exports.indentTimestamp = indentTimestamp;

const timestamp = (stringOrObject)=>{
  if(typeof stringOrObject === 'object') stringOrObject = '\n' + JSON.stringify(stringOrObject, null, 2);
  if(stringOrObject){
    const now = new Date();
    const time = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} -> `
    const log = `${time} ${stringOrObject}`;
    console.log(log);
  }
};
module.exports.timestamp = timestamp;
