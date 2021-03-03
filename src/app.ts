import fs from 'fs';
import path from 'path';

path.join(__dirname + '');

let array: string[] = [' '];

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
  let Fcurent: number = 0;
  let i: number = 0;

  while ((i = N)) {
    Fcurent = F0 + F1;
    FS.push(Fcurent);
    F0 = F1;
    F1 = Fcurent;

    N--;
    console.log('Fc = ', FS, 'iterations left:', N);
  }
};

//read file
fs.readFile('in-file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  array = data.toString().split('\n');
  for (let i in array) {
    console.log(array[i]);
    ////////// непрвильный цикл подумай как его сделать
    if (array.indexOf(array[i]) == FS[i]) {
      console.log(FS[i]);
      console.log(reverseString(array[i]));
    }
  }
});

fibonacci(6);
