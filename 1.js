function checkCashRegister(price, cash, cid) {
	const currencyArr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
	let result = {status: "", change: []}
	let change = Math.round((cash * 100) - (price * 100)) / 100 ;
	let totalInDrawer = cid.map(val => val[1]).reduce((acc, val) => Math.round((acc * 100) + (val * 100)) / 100);
	if (change === totalInDrawer) {
		result.status = "CLOSED"
		result.change = cid;
	} else {
		for (let i = cid.length - 1; i >= 0 && change > 0; i--) {
			let currInReg = cid[i][1];
			let curr = currencyArr[i];
			if (change > curr && change >= currInReg) {
				result.change.push(cid[i]);
				change = Math.round((change * 100) - (currInReg * 100)) / 100;
			} else if (change > curr && change < currInReg) {
				result.change.push([cid[i][0], Math.round((change * 100) - (change * 100) % (curr * 100))/100]);
				change = Math.round((change * 100) % (curr * 100)) / 100;
			}
		}
		if (change === 0 && totalInDrawer > 0) {
			result.status = "OPEN"
		} else if (change > 0) {
			result.status = "INSUFFICIENT_FUNDS"
			result.change = [];
		}
	}
	return result;
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

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));