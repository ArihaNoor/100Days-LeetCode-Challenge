// Roman to Integer

var s = "IV";
const RomanToInteger = (s) => {
    var sum = 0;
    let values = new Map()
    values.set("I", 1);
    values.set("V", 5);
    values.set("X", 10);
    values.set("L", 50);
    values.set("C", 100);
    values.set("D", 500);
    values.set("M", 1000);
    s = s.replace("IV", "IIII");
    s = s.replace("IX", "VIIII");
    s = s.replace("XL", "XXXX");
    s = s.replace("XC", "LXXXX");
    s = s.replace("CD", "CCCC");
    s = s.replace("CM", "DCCCC");
    s = s.split("");
    for(var i=0;i<s.length;i++){
        sum = sum + values.get(s[i])
    }
    console.log(sum);

}

RomanToInteger(s);