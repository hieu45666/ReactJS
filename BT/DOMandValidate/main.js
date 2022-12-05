function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
       console.log("String's first character is uppercase");
    } else {
       console.log("String's first character is not uppercase");
    }
 }

let string1 = "Nguyen van Nam";
let string2 = "NGUYEN VAN NAM";
let string3 = "nguyen van Nam";

isFirstLetterUpperCase(string1);
isFirstLetterUpperCase(string2);
isFirstLetterUpperCase(string3);