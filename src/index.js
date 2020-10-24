module.exports = function toReadable (number) {
    const numFrom0to9 = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
    const numFrom11to20 = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen', 'twenty'];
    const numWithZero = ['ten', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    let answer = [];
    if(number < 99 && number > 1 && number % 10 == 0) {
        answer = numWithZero[(number / 10) - 1];
        return answer
    }


    if(number >= 0 && number < 10) {
        answer.push(numFrom0to9[number]);
    } else if (number >= 11 && number < 21) {
        answer.push(numFrom11to20[(number % 10) -1]);    
    } else if (number >= 21 && number < 100) {
        let firstNum = String(number).slice(0,1);
        let secondNum = String(number).slice(1);
        answer.push(numWithZero[Number(firstNum - 1)]);
        answer.push(numFrom0to9[Number(secondNum)]);
        console.log(secondNum)
    } else {
        let firstNum = String(number).slice(0,1);
        answer.push(numFrom0to9[Number(firstNum)]);
        answer.push('hundred');
        if(((number / 10) % 10) === 0) {
            console.log("ss")
            return answer.join(' ')
        }
        number = Number(String(number).slice(1,3))
        
        if(number % 10 == 0) {
            answer.push(numWithZero[(number / 10) - 1]);
            return answer.join(' ')
        }
        
        if(number >= 0 && number < 10) {
            answer.push(numFrom0to9[number]);
        } else if (number >= 11 && number < 21) {
            answer.push(numFrom11to20[(number % 10) -1]);    
        } else if (number >= 21 && number < 100) {
            let firstNum = String(number).slice(0,1);
            let secondNum = String(number).slice(1);
            answer.push(numWithZero[Number(firstNum - 1)]);
            answer.push(numFrom0to9[Number(secondNum)]);
            console.log(secondNum)
        }
    }

    return answer.join(' ')
}