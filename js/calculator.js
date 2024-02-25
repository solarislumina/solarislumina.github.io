function calculate() {
    let units = Number(document.getElementById("units").value);
    let days = Number(document.getElementById("days").value);
    let charge = 0;
    let fixedCharge = Number(180.00);;
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
    document.getElementById("importCharge").value = charge.toLocaleString(undefined, {minimumFractionDigits: 2});
    document.getElementById("fixedCharge").value = fixedCharge.toLocaleString(undefined, {minimumFractionDigits: 2});
    let tax = Math.round(((charge  + fixedCharge) * 0.025642) * 100) / 100;
    document.getElementById("tax").value = tax.toLocaleString(undefined, {minimumFractionDigits: 2});
    document.getElementById("bill").value = (charge + fixedCharge + tax).toLocaleString(undefined, {minimumFractionDigits: 2});
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
