
function catChecker(){
    let name;
    let sick;
    name = prompt("What is your cats name?");
    sick = prompt("your cat sick");
    catHeader.innerHTML = `Oh ${name}, Is very sweet.`;
    catParagraph.innerHTML = `I think ${sick}.`;
}
catButton.oneclick = catChecker;