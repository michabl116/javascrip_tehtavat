const Button = document.getElementById('start');
const Input = document.getElementById('calculation');
const result = document.getElementById('result');

Button.addEventListener('click', () => {
    const input = Input.value.trim();
    let output;

    if (input.includes('+')) {
        const [num1, num2] = input.split('+').map(Number);
        output = num1 + num2;
    } else if (input.includes('-')) {
        const [num1, num2] = input.split('-').map(Number);
        output = num1 - num2;
    } else if (input.includes('*')) {
        const [num1, num2] = input.split('*').map(Number);
        output = num1 * num2;
    } else if (input.includes('/')) {
        const [num1, num2] = input.split('/').map(Number);
        output = Math.floor(num1 / num2);
    }

    result.textContent = `Result: ${output}`;
});