let nums = [3, 1, 2, 100, 4, 200];
function compare(num1, num2) {
  return num1 - num2;
}
nums.sort(compare);
console.log(nums); // 1,2,3,4,100,200

//compareFunction(a, b), return
// < 0  a kommt zuerst
// = 0  a, b stay
// > 0  b kommt zuerst

//Die Vergleichsfunktion hat die Form: 
function compare(a, b) {
  if (a ist kleiner als b anhand von Sortierkriterien) {
    return -1;
  }
  if (a ist größer als b anhand der Sortierkriterien) {
    return 1;
  }
  // a muss gleich b sein
  return 0;
}

//Objekte können anhand der Werte eines ihrer Eigenschaften sortiert werden.

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// Sortieren nach Wert
items.sort(function (a, b) {
  return a.value - b.value;
});

// Sortieren nach Wert
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
  var nameB = b.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // Namen müssen gleich sein
  return 0;
});

// Das zu sortierende Array
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// Temporäres Array enthält Objekte mit Position und Sortierwert
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// Sortieren des gemappten Arrays mit den reduzierten Werten
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// Behälter für die sich ergebende Reihenfolge
var result = mapped.map(function(el){
  return list[el.index];
});