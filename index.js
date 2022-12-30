var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];

var financeTest = [2, 3, 4, 5];

//Heading
console.log("Financial Analysis")

// Break
console.log("----------------------------")

//Total Months
console.log("Total Months: " + finances.length);

//Total ($)
var sum = 0;
for (var i = 0; i < finances.length; i++) {
    sum += finances[i][1];
}
console.log("Total: $" + sum);

//Average Change
// The average of the changes in Profit/Losses over the entire period.
// calculate each change by subtracting the previous month from this month
// You will need to track what the total change in profits is from month to month and then find the average.
// (Total/total number of changes)x===> total change/(months - 1)
// maybe put all the changes into an array? using .push(...) ?

//
var financesChanges = [
    ['Jan-2010', 0],
    ['Feb-2010', 116771],
    ['Mar-2010', -662642],
    ['Apr-2010', -391430],
    ['May-2010', 379920],
    ['Jun-2010', 212354],
    ['Jul-2010', 510239],
    ['Aug-2010', -428211],
    ['Sep-2010', -821271],
    ['Oct-2010', 693918],
    ['Nov-2010', 416278],
    ['Dec-2010', -974163],
    ['Jan-2011', 860159],
    ['Feb-2011', -1115009],
    ['Mar-2011', 1033048],
    ['Apr-2011', 95318],
    ['May-2011', -308093],
    ['Jun-2011', 99052],
    ['Jul-2011', -521393],
    ['Aug-2011', 605450],
    ['Sep-2011', 231727],
    ['Oct-2011', -65187],
    ['Nov-2011', -702716],
    ['Dec-2011', 177975],
    ['Jan-2012', -1065544],
    ['Feb-2012', 1926159],
    ['Mar-2012', -917805],
    ['Apr-2012', 898730],
    ['May-2012', -334262],
    ['Jun-2012', -246499],
    ['Jul-2012', -64055],
    ['Aug-2012', -1529236],
    ['Sep-2012', 1497596],
    ['Oct-2012', 304914],
    ['Nov-2012', -635801],
    ['Dec-2012', 398319],
    ['Jan-2013', -183161],
    ['Feb-2013', -37864],
    ['Mar-2013', -253689],
    ['Apr-2013', 403655],
    ['May-2013', 94168],
    ['Jun-2013', 306877],
    ['Jul-2013', -83000],
    ['Aug-2013', 210462],
    ['Sep-2013', -2196167],
    ['Oct-2013', 1465222],
    ['Nov-2013', -956983],
    ['Dec-2013', 1838447],
    ['Jan-2014', -468003],
    ['Feb-2014', -64602],
    ['Mar-2014', 206242],
    ['Apr-2014', -242155],
    ['May-2014', -449079],
    ['Jun-2014', 315198],
    ['Jul-2014', 241099],
    ['Aug-2014', 111540],
    ['Sep-2014', 365942],
    ['Oct-2014', -219310],
    ['Nov-2014', -368665],
    ['Dec-2014', 409837],
    ['Jan-2015', 151210],
    ['Feb-2015', -110244],
    ['Mar-2015', -341938],
    ['Apr-2015', -1212159],
    ['May-2015', 683246],
    ['Jun-2015', -70825],
    ['Jul-2015', 335594],
    ['Aug-2015', 417334],
    ['Sep-2015', -272194],
    ['Oct-2015', -236462],
    ['Nov-2015', 657432],
    ['Dec-2015', -211262],
    ['Jan-2016', -128237],
    ['Feb-2016', -1750387],
    ['Mar-2016', 925441],
    ['Apr-2016', 932089],
    ['May-2016', -311434],
    ['Jun-2016', 267252],
    ['Jul-2016', -1876758],
    ['Aug-2016', 1733696],
    ['Sep-2016', 198551],
    ['Oct-2016', -665765],
    ['Nov-2016', 693229],
    ['Dec-2016', -734926],
    ['Jan-2017', 77242],
    ['Feb-2017', 532869],
];

var cSum = 0;
for (var i = 0; i < financesChanges.length; i++) {
    cSum += financesChanges[i][1]/(financesChanges.length -1);
}

console.log("Average Change: $" + cSum);

//Greatest Increase In Profits
let minimum = Infinity;
let maximum = -Infinity;

for (let number of financesChanges) {
  if (number > maximum);
  maximum = number;

  if (number < minimum);
  minimum = number;
}

console.log("Greatest Increase In Profits: " + maximum);
//Greatest Decrease In Profits
console.log("Greatest Decrease In Profits: " + minimum);



// Financial Analysis
// ----------------------------
//Total Months: 86
//Total: $38382578
//Average  Change: $-2315.12
//Greatest Increase in Profits: Feb-2012 ($1926159)
//Greatest Decrease in Profits: Sep-2013 ($-2196167)