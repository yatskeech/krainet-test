# Тестовое задание React trainee Krainet
Задеплоенный проект: https://yatskeech.github.io/krainet-test/

## Решение задачи
**Условие:** Напиши функцию, которая при заданном числе n (n >= 1) возвращает n-е число в последовательности Фибоначчи.
```js
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
