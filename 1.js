function checkCashRegister(price, cash, cid) {
	const changeFunc = (num, arr) => {
		
	}
	let change = cash - price;
	let totalInDrawer = cid.map(val => val[1]).reduce((acc, val) => (acc * 100 + val * 100) / 100);
	let result = {status: "", change: []}
	if (change > totalInDrawer) {
		result.status = "INSUFFICIENT_FUNDS"
	} else if (change === totalInDrawer) {
		result.status = "CLOSED";
		result.change = cid;
	} else if (change < totalInDrawer) {
		// function
	}
	return result

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
	["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));