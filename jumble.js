let words = ["car","truck","bike","ship","bus"];
let jumbs = ["rac","ckurt","keib","iphs","sub"];
let current = 0;
let score = 0;
const ques = () => {
    document.getElementById("q").innerText = jumbs[current];
}
const answer = () => {
    let userAns = document.getElementById("ans").value;
    let correctAns = words[current];
    if (userAns == correctAns) {
        score++;
        alert("Correct answer!");
        document.getElementById("sub").disabled = true;
    } else {
        alert("Wrong");
    }
}
const next=()=> {
    current++;
    if (current < jumbs.length) {
        document.getElementById("ans").value = "";
        document.getElementById("sub").disabled = false;
        ques();
    } else {
        alert("Game Over! Score : " + score);
        current = 0;
        score = 0;
        document.getElementById("ans").value = "";
        ques();
    }
}