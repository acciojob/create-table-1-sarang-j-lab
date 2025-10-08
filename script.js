	
function insert_Row() {
    //Write your code here
	const table = document.querySelector("table");
	const row = table.insertRow(0);
	const col1 = row.insertCell(0)
	const col2 = row.insertCell(1)

	col1.textContent = "New Cell1"
	col2.textContent = "New Cell2"
}
