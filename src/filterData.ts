import fs from 'fs';
import reverseString from './reverseString';
import { Fseq } from './fibSequance';

export default function filterData() {
  Fseq.shift();

  let sourceData: string[] = [];

  fs.readFile('text/source.txt', 'utf8', function (err, data) {
    if (err) throw err;
    sourceData = data.toString().split('\n');
    sourceData.unshift(' ');

    for (let number of Fseq) {
      if (reverseString(sourceData[number]).length > 0) {
        writeFile(sourceData, number);
      }
    }
  });
}

function writeFile(sourceData: string[], number: number) {
  fs.appendFileSync(
    'text/output.txt',
    reverseString(sourceData[number]).concat('\n')
  );
}
