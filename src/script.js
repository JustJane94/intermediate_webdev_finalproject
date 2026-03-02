// Function 1: Pure Math for Interest (Move this outside)
const calculateSimpleInterest = (p, r, t) => {
    return (p * r * t) / 100;
};

// Function 2: Pure Math for Total (Task 7 Fix)
const calculateTotalPayableAmount = (principal, interestAmount) => {
    return principal + interestAmount; // Fixed: Use + instead of -
};

// Function 3: The UI Logic (Talks to the HTML)
const calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);

    let simpleInterest = calculateSimpleInterest(p, r, t);
    let amount = calculateTotalPayableAmount(p, simpleInterest);

    let result = document.getElementById("result");

    result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
    <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
    <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

// Exporting everything for Jasmine
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
}