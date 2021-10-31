const func = () => {
  const data = new Promise((res, rej) => {
    const myArray = [
      [
        "Acetobacter aurantius",
        "Acinetobacter baumannii",
        "Bacillus fusiformis",
        "Campylobacter fetus",
      ],
      [
        "Bacillus fusiformis",
        "Acetobacter aurantius",
        "Acinetobacter baumannii",
      ],
      [
        "Haemophilus vaginalis",
        "Bacillus fusiformis",
        "Acetobacter aurantius",
        "Lactobacillus bulgaricus",
        "Acinetobacter baumannii",
        "Campylobacter fetus",
      ],
      [],
    ];
    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    setTimeout(() => {
      res(randomItem);
    }, 200);
  });
  return data;
};

const func2 = () => {
  const data = new Promise((res, rej) => {
    const myArray = [
      [
        {
          accession: "xm1",
          spieceA: "Woof",
          spieceB: "mrau",
          evidence: "rs",
          length: 120,
        },
        {
          accession: "xm 1200",
          spieceA: "Somebad wirus",
          spieceB: "escherichia Coli",
          evidence: "evidenceRS",
          length: "1200",
        },
        {
          accession: "xm 1200",
          spieceA: "escherichia Coli",
          spieceB: "Somebad wirus",
          evidence: "evidenceRS",
          length: "1200",
        },
      ],
      [
        {
          accession: "xm 1200",
          spieceA: "Somebad wirus",
          spieceB: "escherichia Coli",
          evidence: "evidenceRS",
          length: "1200",
        },
        {
          accession: "xm 1200",
          spieceA: "escherichia Coli",
          spieceB: "Somebad wirus",
          evidence: "evidenceRS",
          length: "1200",
        },
      ],
      [
        {
          accession: "xm 1200",
          spieceA: "escherichia Coli",
          spieceB: "Somebad wirus",
          evidence: "evidenceRS",
          length: "1200",
        },
        {
          accession: "xm 1200",
          spieceA: "Somebad wirus",
          spieceB: "escherichia Coli",
          evidence: "evidenceRS",
          length: "1200",
        },
        {
          accession: "xm1",
          spieceA: "Woof",
          spieceB: "mrau",
          evidence: "rs",
          length: 120,
        },
      ],
      []
    ];
    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    setTimeout(() => {
      res(randomItem);
    }, 1000);
  });
  return data;
};
export { func, func2 };
