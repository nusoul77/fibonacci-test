import fs from 'fs';
import reverseString from './reverseString';
import { Fseq } from './fibSequance';

export default function filterData() {
  Fseq.shift();
  let sourceData: string[] = [];

  fs.readFile('text/source.txt', 'utf8', async function (err, data) {
    if (err) throw err;
    sourceData = data.toString().split('\n');
    sourceData.unshift(' ');

    await Fseq.forEach(async (number) => {
      if (reverseString(sourceData[number]).length > 0) {
        await fs.appendFile(
          'text/output.txt',
          reverseString(sourceData[number]).concat('\n'),
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    });
  });
}
