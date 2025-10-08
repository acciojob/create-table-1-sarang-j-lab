	
function insert_Row() {
    //Write your code here
	const table = document.querySelector("table");
	const row = table.insertRow(0);
	const col1 = row.insertCell(0)
	const col2 = row.insertCell(1)

	col1.innerHTML = "New Cell1"
	col2.innerHTML = "New Cell2"
	table.prepand(tr);
}
