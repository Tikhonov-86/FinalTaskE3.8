// Task 1
function getEvenOddZero(){
  const arr = [0, null, NaN, 0, 1, 33, 0, -12, 2, 4, "str"]

let even = 0,
      odd = 0,
      zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
			if (arr[i] === 0) {
				zero += 1;
			} else if (arr[i] % 2 === 0) {
				even += 1;
			} else {
				odd += 1;
			}
		}
	};

console.log('------------- Вызвана функция getEvenOddZero() --------------');
console.log('Чётных элементов: ', even);
console.log('Нечётных элементов: ', odd);
console.log('Нулей: ', zero);
};

getEvenOddZero();

// Task 2

function definePrime(num) {
    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`;
    } else if (num > 1000) {
        result = 'Данные неверны';
    }
    return result;
};

definePrime();

// Task 3

function getSumFunction(a) {
    return function(b) {
        return a + b
    }
};

const sumFunction = getSumFunction(2);

const sum = sumFunction(3)

console.log(sum); // 5

// Task 4

function eachSecond(begin, end) {
    let current = begin;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == end) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

eachSecond(5, 15);

// Task 5

const degree = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

const result = degree(2, 5);
console.log(result); // 32
