import fs from 'fs';

let array: any[] = [];

//reverse string
function reverseString(str: string) {
  let newString: string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

//fibonacci sequance
let FS: any[] = [];
const fibonacci = (N: number) => {
  let F0: number = 0;
  let F1: number = 1;
  let Fcurent: number = F1;
  let i: number = 0;

  if (N >= 0 && N <= 1) {
    Fcurent = N;
    return Fcurent;
  } else if (N > 0 && N < Infinity) {
    while ((i = N)) {
      FS.push(Fcurent);
      Fcurent = F0 + F1;
      F0 = F1;
      F1 = Fcurent;

      N--;
      console.log('Fc = ', FS, 'iterations left:', N);
    }
  } else {
    console.log('N must be >= 0 &&  N < Infinity');
  }
};
fibonacci(6);

// read file
FS.shift();
fs.readFile('source.txt', 'utf8', function (err, data) {
  if (err) throw err;
  array = data.toString().split('\n');
  array.unshift(' ');

  try {
    for (let i in array) {
      let data = reverseString(array[FS[i]]);
      // console.log(data);

      fs.appendFile('output.txt', data, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`data was writen to file`);
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
});
