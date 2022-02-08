whoseBicycle(
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 8,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 6,
    history: 5,
    physics: 5,
    geography: 9,
    chemistry: 10,
  }
);

function whoseBicycle(diary1, diary2, diary3) {
  const score1 = Object.values(diary1).reduce((a, b) => a + b, 0);
  const score2 = Object.values(diary2).reduce((a, b) => a + b, 0);
  const score3 = Object.values(diary3).reduce((a, b) => a + b, 0);

  const maxScore = Math.max(score1, score2, score3);

  switch(maxScore) {
    case score3:
      return 'I need to buy a bicycle for my third son.';
    case score2: 
      return 'I need to buy a bicycle for my second son.';
    case score1:
      return 'I need to buy a bicycle for my first son.';
  }
}