const getInteractions = (query) => {
  const data = fetch("http://afproject.org:8001/api/interaction/?page=1", {
    method: "POST",
    body: JSON.stringify({
      query: query,
      db: 'host'
    }),
  }).then((res) => res.json());
  return data;
};

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
          accession: "xm 132",
          spieceA: "Bacillus fusiformis",
          spieceB: "Bacillus fusiformis3",
          evidence: "rs",
          length: 120,
        },
        {
          accession: "xm 1212",
          spieceA: "Acetobacter aurantius",
          spieceB: "escherichia Coli",
          evidence: "RS",
          length: "1200",
        },
        {
          accession: "xm 121",
          spieceA: "escherichia Coli",
          spieceB: "Campylobacter fetus",
          evidence: "RS",
          length: "1200",
        },
      ],
      [
        {
          accession: "xm 1201",
          spieceA: "Campylobacter fetus",
          spieceB: "escherichia Coli",
          evidence: "RS",
          length: "120",
        },
        {
          accession: "xm 12033",
          spieceA: "escherichia Coli",
          spieceB: "Acinetobacter baumannii",
          evidence: "RS",
          length: "1200",
        },
        {
          accession: "xm 1201",
          spieceA: "Campylobacter fetus",
          spieceB: "escherichia Coli",
          evidence: "RS",
          length: "1000",
        },
        {
          accession: "xm 12033",
          spieceA: "escherichia Coli",
          spieceB: "Acinetobacter baumannii",
          evidence: "RS",
          length: "1200",
        },
        {
          accession: "xm 1201",
          spieceA: "Campylobacter fetus",
          spieceB: "escherichia Coli",
          evidence: "RS",
          length: "1400",
        },
        {
          accession: "xm 12033",
          spieceA: "escherichia Coli",
          spieceB: "Acinetobacter baumannii",
          evidence: "RS",
          length: "1200",
        },
        {
          accession: "xm 1201",
          spieceA: "Campylobacter fetus",
          spieceB: "escherichia Coli",
          evidence: "RS",
          length: "1200",
        },
        {
          accession: "xm 12033",
          spieceA: "escherichia Coli",
          spieceB: "Acinetobacter baumannii",
          evidence: "RS",
          length: "1200",
        },
      ],
      [
        {
          accession: "xm 112",
          spieceA: "escherichia Coli",
          spieceB: "Some bad wirus",
          evidence: "RS",
          length: "1200",
        },
        {
          accession: "xm 67",
          spieceA: "Some bad wirus",
          spieceB: "escherichia Coli",
          evidence: "RS",
          length: "1200",
        },
        {
          accession: "xm223",
          spieceA: "Haemophilus vaginalis",
          spieceB: "Bacillus fusiformis",
          evidence: "rs",
          length: 120,
        },
        {
          accession: "xm 112",
          spieceA: "escherichia Coli",
          spieceB: "Some bad wirus",
          evidence: "RS",
          length: "1200",
        },
        {
          accession: "xm 67",
          spieceA: "Some bad wirus",
          spieceB: "escherichia Coli",
          evidence: "RS",
          length: "1200",
        },
        {
          accession: "xm223",
          spieceA: "Haemophilus vaginalis",
          spieceB: "Bacillus fusiformis",
          evidence: "rs",
          length: 120,
        },
      ],
      [],
    ];
    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    setTimeout(() => {
      res(randomItem);
    }, 1200);
  });
  return data;
};
export { func, func2, getInteractions };
