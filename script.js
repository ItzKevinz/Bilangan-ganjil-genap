const LimitInput = document.getElementById("Limit-Input")
const startButton = document.getElementById("start-btn") 
const evenNumberDiv = document.getElementById("even-number")
const oddNumberDiv = document.getElementById("odd-number")

startButton.addEventListener("click", ()=>{
    const Limit = parseInt(LimitInput.value)

    //memastikan input adalah bilangan positif
    if (isNaN,(Limit) || Limit <= 0){
        alert("Please enter a valid positive number.")
        return;
    }

    //kosongkan tampilan sebelumnya
    oddNumberDiv.textContent = "Odd Numbers:"
    evenNumberDiv.textContent = "Even Numbers:"

    // looping dari 1 sampai limit
    for(let i = 1; i <= Limit; i++){
        if (i & 2 == 0){
            evenNumberDiv.textContent += i + "";
        } else{,
            oddNumberDiv.textContent += i + "";

        }
    }
}) 