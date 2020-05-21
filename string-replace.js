// $& fügt den gefundenen Substring ein
/*
match	    Der gefundene Substring. (Entspricht $& oben.)
p1, p2, ...	Der nth eingeklammerte Submatch-String, fall im ersten Argument ein RegExp-Objekt angegeben wurde. (Entspricht $1, $2, etc. oben.) Wurde zum Beispiel /(\a+)(\b+)/ angegeben, so ist p1 die Übereinstimmung für \a+, und p2 für \b+.
offset	    Die Position, an welcher der gefundene Substring innerhalb der gesamten Zeichenkette gefunden wurde. War zum Beispiel die gesamte Zeichenkette "abcd" und der gefundene Substring "bc", dann wäre das Argument 1.)
string	    Die gesamte Zeichenkette, welche durchsucht wird.
*/
function replacer(match, p1, p2, p3, offset, string) {
    //p1 is nondigits, p2 digits, and p3 non-alphanumeric
    return [p1, p2, p3].join(" - ");
}
newString = "abc12345#$*%".replace("/([^\d]*)(\d*)([^\w]*)/", replacer);

var str = "Twas the night before Xmas...";
var newstr = str.replace(/xmas/i, "Christmas");
print(newstr);

var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
print(newstr);

var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
print(newstr);

function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match) {
        return '-' + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

var newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // won't work
//Dieses ist weil '$&'.toLowerCase() ausgeführt wird, bevor der String als Pattern genutzt wird.

/*
Das folgende Beispiel ersetzt einen Wert in Grad Fahrenheit durch den entsprechenden Celsius-Wert. Der Fahrenheitwert sollte eine Nummer sein, die mit einem F endet. Die Funktion gibt eine Celsius-Temperatur mit der Endung C aus. Ist zum Beispiel der Eingabewert 212F, so gibt die Funktion 100C zurück. Ist die Nummer 0F, so wird -17,77777777777778C zurück gegeben.

Der reguläre Ausdruck test prüft jede Nummer, die mit F endet. Die Nummer in Grad Fahrenheit ist durch den zweiten Funktionsparameter, p1, ansprechbar. Die Funktion setzt den Celsiuswert basierend auf dem Fahrenheitwert in einer Zeichenkette in der f2c-Funktion. f2c gibt dann den Celsiuswert zurück. Diese Funktion ähnelt dem s///e-Flag in Perl.
*/
function f2c(x) {
    function convert(str, p1, offset, s) { // only p1 because of ?:
        return ((p1 - 32) * 5 / 9) + "C";
    }
    var s = String(x);
    var test = /(\d+(?:\.\d*)?)F\b/g; //<--?: match expression but do not capture it ?= look ahead
    return s.replace(test, convert);
}