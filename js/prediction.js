function calculate() {
    let exportUnits = Number(document.getElementById("exportUnits").value);
    let units = Number(document.getElementById("units").value);
    let days = Number(document.getElementById("days").value);
    let beforeUnits = units;
    if (units > exportUnits){
        units = units - exportUnits;
        exportUnits = 0;
    } else {
        exportUnits = exportUnits - units;
        units = 0;
    }
    let charge = 0;
    let beforeCharge = 0;
    let fixedCharge = Number(180.00);
    let beforeFixedCharge = Number(180.00);
    if (units <= (days * 2)) {

        let max = Number(days * 1);
        let min = Number(days * 0);
        let cost = Number(12.00);
        let tariffCost = Number(getTariffUnits(units, min, max) * cost);
        if (tariffCost > 0) {
            charge += Number(tariffCost);
            fixedCharge = Number(180.00);
            console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
        }

        max = units;
        min = Number(days * 1);
        cost = Number(30.00);
        tariffCost = Number(getTariffUnits(units, min, max) * cost);
        if (tariffCost > 0) {
            charge += Number(tariffCost);
            fixedCharge = Number(360.00);
            console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
        }
    } else {

        let max = Number(days * 2);
        let min = Number(days * 0);
        let cost = Number(38.00);
        let tariffCost = Number(getTariffUnits(units, min, max) * cost);
        if (tariffCost > 0) {
            charge += Number(tariffCost);
            fixedCharge = Number(0.00);
            console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
        }

        max = Number(days * 3);
        min = Number(days * 2);
        cost = Number(41.00);
        tariffCost = Number(getTariffUnits(units, min, max) * cost);
        if (tariffCost > 0) {
            charge += Number(tariffCost);
            fixedCharge = Number(480.00);
            console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
        }

        max = Number(days * 4);
        min = Number(days * 3);
        cost = Number(59.00);
        tariffCost = Number(getTariffUnits(units, min, max) * cost);
        if (tariffCost > 0) {
            charge += Number(tariffCost);
            fixedCharge = Number(1180.00);
            console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
        }

        max = Number(days * 6);
        min = Number(days * 4);
        tariffCost = Number(getTariffUnits(units, min, max) * cost);
        if (tariffCost > 0) {
            charge += Number(tariffCost);
            fixedCharge = Number(1770.00);
            console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
        }

        max = units;
        min = Number(days * 6);
        cost = Number(89.00);
        tariffCost = Number(getTariffUnits(units, min, max) * cost);
        if (tariffCost > 0) {
            charge += Number(tariffCost);
            fixedCharge = Number(2360.00);
            console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
        }
    }


//Before Calculation

    if (beforeUnits <= (days * 2)) {

            let max = Number(days * 1);
            let min = Number(days * 0);
            let cost = Number(12.00);
            let tariffCost = Number(getTariffUnits(beforeUnits, min, max) * cost);
            if (tariffCost > 0) {
                beforeCharge += Number(tariffCost);
                beforeFixedCharge = Number(180.00);
                console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
            }

            max = beforeUnits;
            min = Number(days * 1);
            cost = Number(30.00);
            tariffCost = Number(getTariffUnits(beforeUnits, min, max) * cost);
            if (tariffCost > 0) {
                beforeCharge += Number(tariffCost);
                beforeFixedCharge = Number(360.00);
                console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
            }
        } else {

            let max = Number(days * 2);
            let min = Number(days * 0);
            let cost = Number(38.00);
            let tariffCost = Number(getTariffUnits(beforeUnits, min, max) * cost);
            if (tariffCost > 0) {
                beforeCharge += Number(tariffCost);
                beforeFixedCharge = Number(0.00);
                console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
            }

            max = Number(days * 3);
            min = Number(days * 2);
            cost = Number(41.00);
            tariffCost = Number(getTariffUnits(beforeUnits, min, max) * cost);
            if (tariffCost > 0) {
                beforeCharge += Number(tariffCost);
                beforeFixedCharge = Number(480.00);
                console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
            }

            max = Number(days * 4);
            min = Number(days * 3);
            cost = Number(59.00);
            tariffCost = Number(getTariffUnits(beforeUnits, min, max) * cost);
            if (tariffCost > 0) {
                beforeCharge += Number(tariffCost);
                beforeFixedCharge = Number(1180.00);
                console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
            }

            max = Number(days * 6);
            min = Number(days * 4);
            tariffCost = Number(getTariffUnits(beforeUnits, min, max) * cost);
            if (tariffCost > 0) {
                beforeCharge += Number(tariffCost);
                beforeFixedCharge = Number(1770.00);
                console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
            }

            max = units;
            min = Number(days * 6);
            cost = Number(89.00);
            tariffCost = Number(getTariffUnits(beforeUnits, min, max) * cost);
            if (tariffCost > 0) {
                beforeCharge += Number(tariffCost);
                beforeFixedCharge = Number(2360.00);
                console.log(min + " - " + max + ": " + tariffCost  + " Charge: " + charge);
            }
        }


    document.getElementById("importCharge").value = charge.toLocaleString(undefined, {minimumFractionDigits: 2});
    document.getElementById("fixedCharge").value = fixedCharge.toLocaleString(undefined, {minimumFractionDigits: 2});
    let tax = Math.round(((charge  + fixedCharge) * 0.025642) * 100) / 100;
    document.getElementById("tax").value = tax.toLocaleString(undefined, {minimumFractionDigits: 2});
    let bill = charge + fixedCharge + tax;
    document.getElementById("bill").value = bill.toLocaleString(undefined, {minimumFractionDigits: 2});
    let income = 0;
    if(exportUnits > 500){
        income = (500 * 37) + ((exportUnits - 500) * 34.5);
    } else {
        income = exportUnits * 37;
    }
        document.getElementById("monthlyIncome").value = income.toLocaleString(undefined, {minimumFractionDigits: 2});
    let beforeTax = Math.round(((beforeCharge  + beforeFixedCharge) * 0.025642) * 100) / 100;
    let beforeBill = beforeCharge + beforeFixedCharge + beforeTax;
    document.getElementById("beforeBill").value = beforeBill.toLocaleString(undefined, {minimumFractionDigits: 2});
    let profit = beforeBill + income - bill;
    document.getElementById("monthlyProfit").value = profit.toLocaleString(undefined, {minimumFractionDigits: 2});
    let roi =Math.round(1150000/profit);
    document.getElementById("roiYears").value = Math.floor(roi / 12);
    document.getElementById("roiMonths").value = roi % 12;
}

function getTariffUnits(units, min, max) {
    if (units > max) {
        return max - min;
    } else {
        return units - min;
    }
}

function onLoadPage(units, min, max) {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('days')){
        document.getElementById("days").value = Number(searchParams.get('days'));
    }
    if (searchParams.has('units')){
        document.getElementById("units").value = Number(searchParams.get('units'));
    }
    calculate();
}
