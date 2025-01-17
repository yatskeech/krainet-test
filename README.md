# Тестовое задание React trainee Krainet

## Решение задачи
*Условие:* Напиши функцию, которая при заданном числе n (n >= 1) возвращает n-е число в последовательности Фибоначчи.
*Решение:*
```
function nthFibo(n) {
	if (n === 1) {
		return 0;
	}

	if (n === 2) {
		return 1;
	}

	return nthFibo(n - 2) + nthFibo(n - 1);
}
```
