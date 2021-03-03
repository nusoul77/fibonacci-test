let Fseq: number[] = [];
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
      Fseq.push(Fcurent);
      Fcurent = F0 + F1;
      F0 = F1;
      F1 = Fcurent;

      N--;
    }
  } else {
    console.log('N must be >= 0 &&  N < Infinity');
  }
};

export { Fseq, fibonacci };
