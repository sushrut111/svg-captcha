let captchacreator = require('./lib');
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let obj = {};
// captchacreator.create(chars[0]);

for(let i=0; i<chars.length; i++){
    obj[chars[i]] = captchacreator.create(chars[i]).data;
}
let ans = JSON.stringify(obj);
console.log(ans);

const fs = require('fs')



try {
  const data = fs.writeFileSync('texts.json', ans)
  //file written successfully
} catch (err) {
  console.error(err)
}

// let a = captchacreator.create("A");
// console.log(a);