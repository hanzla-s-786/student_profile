document.addEventListener("DOMContentLoaded", function () {
    loadTableData();
});

function editRow(button) {
    let row = button.closest("tr");
    let cells = row.querySelectorAll("td:not(:last-child)");
    let rowIndex = row.rowIndex - 1;

    if (button.innerText === "Edit") {
        cells.forEach(cell => {
            let input = document.createElement("input");
            input.type = "text";
            input.value = cell.innerText;
            input.classList.add("form-control");
            cell.innerText = "";
            cell.appendChild(input);
        });
        button.innerText = "Save";
        button.classList.replace("btn-warning", "btn-success");
    } else {
        let rowData = [];
        cells.forEach(cell => {
            let input = cell.querySelector("input");
            if (input) {
                cell.innerText = input.value;
                rowData.push(input.value);
            }
        });
        saveRowData(rowIndex, rowData);
        button.innerText = "Edit";
        button.classList.replace("btn-success", "btn-warning");
    }
}

function deleteRow(button) {
    let row = button.closest("tr");
    let cells = row.querySelectorAll("td:not(:last-child)");
    let rowIndex = row.rowIndex - 1;
    
    // Clear content completely
    cells.forEach(cell => {
        cell.innerText = "";
    });
    
    // Remove data from local storage
    removeRowData(rowIndex);
}

function saveRowData(index, data) {
    let tableData = JSON.parse(localStorage.getItem("tableData")) || [];
    tableData[index] = data;
    localStorage.setItem("tableData", JSON.stringify(tableData));
}

function removeRowData(index) {
    let tableData = JSON.parse(localStorage.getItem("tableData")) || [];
    if (tableData[index]) {
        tableData[index] = new Array(tableData[index].length).fill("");
        localStorage.setItem("tableData", JSON.stringify(tableData));
    }
}

function loadTableData() {
    let table = document.querySelector("table tbody");
    let tableData = JSON.parse(localStorage.getItem("tableData")) || [];
    
    table.querySelectorAll("tr").forEach((row, index) => {
        let cells = row.querySelectorAll("td:not(:last-child)");
        if (tableData[index]) {
            cells.forEach((cell, i) => {
                cell.innerText = tableData[index][i] || "";
            });
        }
    });
}

