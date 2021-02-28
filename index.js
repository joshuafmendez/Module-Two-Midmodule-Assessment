document.addEventListener('DOMContentLoaded', () => {
    let dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅" ]
    let diceRollCount = 0;
    let form = document.querySelector('#dice-form');
    let dp = document.querySelector('#dice-para');
    let sumP = document.querySelector('#sum-para')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = document.querySelector('#number-of-dice');
        if(diceRollCount > 0 && input.value !== ''){
            historySection();
        }
        if(input.value !== ''){
            diceRollCount++;
        }
        let diceNum = Number(input.value);
        randomizeAndDisplay(diceNum);
        input.value = '';
    }); 

    const historySection = () => {
        let li = document.createElement("li");
        li.textContent = `${dp.textContent} = ${sumP.textContent.slice(5)}`;
        let list = document.querySelector("#history-section")
        list.appendChild(li)
    }
    
    const randomizeAndDisplay = diceNum => {
        let diceArr = [];
        let sum = 0;
        let showDice = '';
        for(let i = 0; i < diceNum;i++){
            let randomDice = Math.floor(Math.random() * 6) + 1;
            diceArr.push(randomDice);
            showDice += dices[randomDice - 1];
            sum += randomDice;
        }
        dp.textContent = showDice;
        sumP.textContent = `Sum = ${sum}`;
    }
});