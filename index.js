class Formatter {
  //add static methods here
  static capitalize (string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }
  static titleize(string) {
    const nonTitlecasedWords = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    return string.split(" ").map(
      (currentWord, index) => {
      if (!nonTitlecasedWords.find(e => {
        return e === currentWord;
      }) || index === 0) {
        debugger;
        currentWord = `${currentWord[0].toUpperCase()}${currentWord.slice(1)}`;
      }
      return currentWord;
    }).join(" ");
  }
}