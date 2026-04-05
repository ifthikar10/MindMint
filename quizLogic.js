// quizLogic.js

export function getCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
}

export function getProgressPercent(completedQuestions, totalQuestions) {
  if (!totalQuestions || totalQuestions <= 0) return 0;
  return Math.round((completedQuestions / totalQuestions) * 100);
}

export function getWinningResultKey(scores) {
  const entries = Object.entries(scores);

  if (entries.length === 0) {
    return null;
  }

  // Tricky part:
  // We reduce the score object to a single winning key.
  // If there is a tie, the first highest score found wins.
  return entries.reduce((winner, current) => {
    if (!winner) return current[0];
    return scores[current[0]] > scores[winner] ? current[0] : winner;
  }, null);
}

export function buildResultPayload(categoryData, scores) {
  const winningKey = getWinningResultKey(scores);
  const fallbackKey = Object.keys(categoryData.results)[0];
  const resultKey = winningKey || fallbackKey;

  return {
    categoryTitle: categoryData.title,
    resultKey,
    result: categoryData.results[resultKey]
  };
}

export function createEmptyScoreMap(resultsObject) {
  return Object.keys(resultsObject).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});
}
