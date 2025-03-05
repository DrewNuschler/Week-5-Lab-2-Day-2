
function travelChecker(){
    let travel;
    travel = prompt("Do you think Japan is a beautiful country?")
    travelParagraph.innerHTML = `${travel},why do you say that?`
}
travelButton.onclick = travelChecker;