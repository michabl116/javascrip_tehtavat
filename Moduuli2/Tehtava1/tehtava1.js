let num = []
for (let i = 0; i < 5; i++) {
    let input = parseInt(prompt(`Enter number ${i + 1}:`));
    num.push(input);

}
console.log('Numbers in reverse:');
for (let i=num.length -1; i >= 0; i--) {
    console.log(num[i]);
    }
