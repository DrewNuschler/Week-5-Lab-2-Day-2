
function catChecker(){
    let name;
    let sick;
    name = prompt("What is your cats name?");
    sick = prompt("Is your cat ok?");
    catHeader.innerHTML = `Oh ${name}  Is very sweet.`;
    catParagraph.innerHTML = `I think ${sick} is getting sick.`;
}
catButton.onclick = catChecker;