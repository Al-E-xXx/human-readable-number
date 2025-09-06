module.exports = function toReadable(number) {
  let response = '';
  let nStr = String(number);

  const lessThanTwenty = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  for (let i = nStr.length - 1; i >= 0; i -= 1) {
    if (Number(nStr) < 20) {
      response += ` ${lessThanTwenty[Number(nStr)]}`;
      break;
    } else if (Number(nStr) >= 20 && Number(nStr) < 100 && nStr.length === 2) {
      response += ` ${tens[Number(nStr[0])]}`;
      if (Number(nStr[1]) !== 0) {
        response += ` ${lessThanTwenty[Number(nStr[1])]}`;
      }
      break;
    } else if (Number(nStr) >= 100 && Number(nStr) < 1000 && nStr.length > 2) {
      response += ` ${lessThanTwenty[Number(nStr[0])]} hundred`;
      nStr = nStr.slice(1);
      nStr = Number(nStr);
      if (nStr === 0) {
        break;
      }
      nStr = String(nStr);
    }
  }

  response = response.trim();
  return response;
};
