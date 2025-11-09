const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");



convertBtn.addEventListener("click", () => {

    const num = +input.value;
    output.classList.remove("hidden");

    if (!num) {
        output.innerText = "Please enter a valid number";
        output.classList.add("alert");
        return;
    }
    if (num < 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        output.classList.add("alert");
        return;
    }
    if (num >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        output.classList.add("alert");
        return;
    }
    
    const result = convertNumToRoman(+input.value);
    output.innerText = result;
    output.classList.remove("alert");
});


const convertNumToRoman = (num) => {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let roman = "";
    let i = 0;

    while (num > 0) {
        const div = Math.floor(num / val[i]);
        num -= div * val[i];
        roman += syms[i].repeat(div);
        i++;
    }
    return roman;
};

