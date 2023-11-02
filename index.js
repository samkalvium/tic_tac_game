const boxArray = document.querySelectorAll(".box")
let flag = 1;
let xPos = [];
let oPos = [];
let winComb = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [7, 5, 3], [1, 4, 7], [2, 5, 8], [3, 6, 9]]



boxArray.forEach((el) => {
    el.addEventListener("click", (event) => {
        // console.log(event.target)
        startGame(event.target)
    })
})


function startGame(e) {
    // console.log(e)
    // e.innerText = "X";
    if ((xPos.includes(Number(e.parentElement.id)) || (oPos.includes(Number(e.parentElement.id))))) {

        alert("Yo bro y r pressing again,play the game manh")
    }//end
    else {
        if (flag == 1) {
            const p = document.createElement("p");
            p.innerText = "X";
            p.style.color = "red";
            e.appendChild(p);
            xPos.push(Number(e.id))
            if (checkWin(xPos, winComb) == true) {
                console.log(" X won")
                document.getElementById("result").style.visibility = "visible";
                document.getElementById("message").innerText = `"X" Won`
            }
            flag = 0;
        }
        else {
            const p = document.createElement("p");
            p.innerText = "O";
            p.style.color = "blue";
            e.appendChild(p);
            oPos.push(Number(e.id))
            if (checkWin(oPos, winComb) == true) {
                console.log(" O won")
                document.getElementById("result").style.visibility = "visible";
                document.getElementById("message").innerText = `"O" Won`;
            }
            flag = 1;
        }
        if (xPos.length + oPos.length < 9) {
            console.log("It's a tie!");
            document.getElementById("result").style.visibility = "visible";
            document.getElementById("message").innerText = "It's a Tie!";
        }
    }


}

const res = document.getElementById("button")
res.addEventListener("click", () => {
    window.location.reload();
})


// checkwin fucntion
function checkWin(arr, winComb) {
    // checks whether all the elements inside winComb[i] is present inside arr(xPos,yPos)
    // if it is present then every function will return  true and boole will hold true or else it will return false and
    // instead of using evry fucntion 
    for (let i = 0; i < winComb.length; i++) {

        // console.log(winComb[i])
        const boole = winComb[i].every((el) => {
            // condition
            return arr.includes(el)
        })
        if (boole == true) {
            return true
        }
    }
    //after checking all the winComb
    return false
}

function alreadyclicked(ele) {
    alert("alreadyclicked")
}
