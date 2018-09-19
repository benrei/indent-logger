const log = (indent, str)=>{
  if(str){
    const log = `${" ".repeat(indent)}${str}`;
    console.log(log);
  }
};
module.exports.log = log;
