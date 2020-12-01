//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinner = function(arr) {
  let newArr = arr.concat(arr);
  const len = newArr.length;
  //console.log(newArr);
  let timer = 100;
  for (let i = 0; i < len; i++) { 
    setTimeout(() => {process.stdout.write(`\r'${newArr[i]}`);}, timer);
    timer += 200;
  }
};
let paterns = ['| ', '/ ', '- ', '\ '];
spinner(paterns);



