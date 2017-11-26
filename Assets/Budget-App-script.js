(function () {

	window.onload = function() {
		var numerItems = document.getElementsByClassName('numeric_item');
		var impItem = document.getElementById("deposit");
		for (x in numerItems) {
			numerItems[x].onchange = validate;
		}
		impItem.onchange = validate;
		document.getElementById("arButton").onclick = addRemove;
	}

	function validate() {
		var sum = 0;
		var inputs = document.getElementsByClassName("numeric_item");
		var iLength = inputs.length;
		for(index = 0; index < iLength; index++) {
			sum -= inputs[index].value;
		}
		depo = document.getElementById("deposit").value;
		sum += parseInt(depo);
		var unallo = document.getElementById("Unallocated");
		unallo.innerHTML = sum;
		if (sum < 0) {
			unallo.style = "color:red";
		} else {
			unallo.style = "color:black";
		}
	}
	
	function addRemove() {
		var arTextItem = document.getElementById('add/remove');
		var allo = arTextItem.value;
		if(allo == "Total Deposit" || allo == "Unallocated") {
			arTextItem.value = "";
			return;
		}
		var flag = true;
		var table = document.getElementById("table");
		var trows = table.rows;
		var trowsLen = trows.length - 2;
		var textItem;
		for (index = 0; index < trowsLen; index++) {
			textItem = trows[index].cells[0];
			if(textItem.innerText == allo) {
				table.deleteRow(index)
				flag = false;
				break;
			}
		}
		if(flag) {
			var insertIndex = table.rows.length - 2;
			var newRow = table.insertRow(insertIndex);
			newRow.className = "row_item";
			var newTextItem = newRow.insertCell(0);
			newTextItem.className = "text_cell"
			newTextItem.innerHTML = '<span class="text_item">' + allo + '</span>';
			var newNumericItem = newRow.insertCell(1);
			newNumericItem.className = "numeric_cell";
			//newNumericItem.innerHTML = '<input class="numeric_item" type="number" value="0"></input>'
			//newNumericItem.innerHTML.onchange = validate;
			
			newInputItem = document.createElement("input");
			newInputItem.className = 'numeric_item';
			newInputItem.type = 'number';
			newInputItem.value = 0;
			newInputItem.onchange = validate;
			
			newNumericItem.appendChild(newInputItem);
		}
		arTextItem.value = "";
		validate();
	}
})();