/**
 * Run-Length encoding
 *
 * Inputs: can be alphabets and number, or any characters. It will be non-empty
 * The max run length that can be encoded is upto 9 consecutive
 * Suppose you have 12A AAAAAAAAAAAA -> AAAAAAAAA AAA -> 9A3A
 *
 * AAAAAAABBCC --> 7A2B2C
 * AAAAAAAAAAABC --> 9A2A1B1C
 *
 * */

/**
 * let result=[]
 * let runLength=1 // we will always have a non-empty string
 * 
 * for i=1 to n:
 *  const currentChar=string[i]
 *  const prevChar=string[i-1]
 *  
 *  if(currentChar===prevChar){
 *    runLength++
 *  } else if(currentChar!==prevChar || runLength==0){
 *    // add runLength and preChar to the result array
 *    result.push(`${runLength}${prevChar}`)
 *    // reset runLength to 1
 *    runLength=1
 *  }
 * 
 * // finally add last char and runLength and return the string
 * result.push(`${runLength}${string[string.length-1]}`)
 * return result.join('')
*/


// "9A4A2B4C2D"
const string = 'AAAAAAAAAAAAABBCCCCDD';

function runLengthEncoding(string) {
  // Write your code here.
  // let result = [];
  // let count = 0;

  //   for (let idx = 0; idx < string.length; idx++) {
  //     const currentChar = string[idx];
  //     const nextChar = string[idx + 1];

  //     if(!nextChar){
  //       count++
  //       result.push(`${count}${currentChar}`)
  //       return result.join('')
  //     }
  //     if(currentChar!==nextChar){
  //       count++
  //       result.push(`${count}${currentChar}`)
  //       count=0
  //     }else if(currentChar==nextChar){
  //       count++
  //       if(count==9){
  //         result.push(`${count}${currentChar}`)
  //         count=0
  //       }
  //     }
  //   }

  // let result = [];
  //   let count = 1;
  //   for (let idx = 1; idx <= string.length; idx++) {
  //     const currentChar = string[idx];
  //     const lastChar = string[idx - 1];

  //     if (!currentChar) {
  //       result.push(`${count}${lastChar}`);
  //       return result.join('');
  //     }
  //     if (currentChar !== lastChar) {
  //       result.push(`${count}${lastChar}`);
  //       count = 1;
  //     } else if (currentChar == lastChar) {
  //       count++;
  //       if (count > 9) {
  //         result.push(`9${lastChar}`);
  //         count = 1;
  //       }
  //     }
  //   }

  let result = [];
  let count = 1;

  for (let idx = 1; idx < string.length; idx++) {
    const currentChar = string[idx];
    const prevChar = string[idx - 1];

    if (currentChar !== prevChar || count === 9) {
      result.push(`${count}${prevChar}`);
      count = 1;
    } else if (currentChar == prevChar) {
      count++;
    }
  }

  result.push(`${count}${string[string.length - 1]}`);
  return result.join('');
}

runLengthEncoding(string);
