function openForm() {
    let selectedProgram = document.getElementById("programSelect").value;
    if (selectedProgram) {
        let programText = document.getElementById("programSelect").options[document.getElementById("programSelect").selectedIndex].text;
        
        document.getElementById("selectedProgram").innerText = programText;
        new bootstrap.Modal(document.getElementById("programFormModal")).show();
    }
}