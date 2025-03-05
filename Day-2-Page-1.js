
function cardChecker(){
    let card;
    card = prompt("Whats your favorite card game?");
    cardParagraph.innerHTML = `We should play ${card}, it sounds fun.`;
    }

    cardButton.onclick = cardChecker;