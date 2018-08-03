const Leetify = rules => words => {
  return words
    .split('')
    .map(char => mappedChar(rules, char))
    .join('');
};

const rulesExample = {
  a: 4,
  A: 4
};

const mappedChar = (rules, char) => rules[char] || char;

// console.log(Leetify(rulesExample)('walmart'))

// aaabb =>
// 1 => 'a'

const countLetters = str =>
  str.split('').reduce(
    (result, current, index) => {
      console.log('');
      console.log('result');
      console.log(result);
      if (!result.output) {
        result.currentLetter = current;
        result.output = result.output.concat(current);
        result.counter = result.counter + 1;
        return result;
      }

      if (current === result.currentLetter) {
        result.counter = result.counter + 1;
      }

      if (current !== result.currentLetter) {
        result.currentLetter = current;
        result.output = result.output
          .concat(result.counter)
          .concat(result.currentLetter);
        result.counter = 1;
      }
      console.log(index);
      if (index === str.length) {
        result.output = result.output.concat(result.counter);
      }
      console.log(result);

      return result;
    },
    {
      currentLetter: '',
      output: '',
      counter: 0
    }
  );

console.log(countLetters('aabb'));
