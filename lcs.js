//最长公共子串
let word1 = "join1";
let word2 = "Ilikejoinyou";

function lcs(word1, word2) {
  let shortWord = "";
  let longWord = "";  
  if (word1.length > word2.length) {
    longWord = word1;
    shortWord = word2;
  }
  else {
    longWord = word2;
    shortWord = word1;
  }

  let start = 0;
  for (let i = shortWord.length; i > 0; i--){
    let matchLen = start + i;
    while (matchLen <= shortWord.length) {
      let matchWord = shortWord.slice(start, matchLen);
      if (-1 !== longWord.indexOf(matchWord)) {
        return matchWord;
      }
      else {
        start++;
        matchLen = start + i;
      }
    }
    start = 0;
  }
  return '';
}
console.log(lcs(word1, word2));