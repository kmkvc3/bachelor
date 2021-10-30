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
      []
    ];
    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    res(randomItem);
  });
  return data;
};
export { func };
