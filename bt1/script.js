//1
function createTable() {
    const row = document.getElementById("row");
    const column = document.getElementById("column");
    
    if (row.value < 1 || column.value < 1) {
      alert("Vui lòng nhập vào số dòng và số cột");
    } else {
      const container = document.getElementById("container");
      
      const countRow = parseInt(row.value);
      const countColumn = parseInt(column.value);
      
      const tagTable = document.createElement("table");
          tagTable.style.border = "1px solid black";

        for (let n = 0; n < countRow; n++) {
          const tagRow = document.createElement("tr");
        tagTable.appendChild(tagRow);
                
        for(let m = 0; m < countColumn; m++) {
          const tagColumn = document.createElement("td");
          tagColumn.style.width = "300px";
          tagColumn.style.height = "30px";
          tagColumn.style.border = "1px solid black";
          const textNode = document.createTextNode("");
                  tagColumn.appendChild(textNode);
                  tagRow.appendChild(tagColumn);
        }
          }
          container.appendChild(tagTable);      
    }
  }