var aesthetic = {
  " ": "　",
  "`": "`",
  "1": "１",
  "2": "２",
  "3": "３",
  "4": "４",
  "5": "５",
  "6": "６",
  "7": "７",
  "8": "８",
  "9": "９",
  "0": "０",
  "-": "－",
  "=": "＝",
  "~": "~",
  "!": "！",
  "@": "＠",
  "#": "＃",
  "$": "＄",
  "%": "％",
  "^": "^",
  "&": "＆",
  "*": "＊",
  "(": "（",
  ")": "）",
  "_": "_",
  "+": "＋",
  "q": "ｑ",
  "w": "ｗ",
  "e": "ｅ",
  "r": "ｒ",
  "t": "ｔ",
  "y": "ｙ",
  "u": "ｕ",
  "i": "ｉ",
  "o": "ｏ",
  "p": "ｐ",
  "[": "[",
  "]": "]",
  "\\": "\\",
  "Q": "Ｑ",
  "W": "Ｗ",
  "E": "Ｅ",
  "R": "Ｒ",
  "T": "Ｔ",
  "Y": "Ｙ",
  "U": "Ｕ",
  "I": "Ｉ",
  "O": "Ｏ",
  "P": "Ｐ",
  "{": "{",
  "}": "}",
  "|": "|",
  "a": "ａ",
  "s": "ｓ",
  "d": "ｄ",
  "f": "ｆ",
  "g": "ｇ",
  "h": "ｈ",
  "j": "ｊ",
  "k": "ｋ",
  "l": "ｌ",
  ";": "；",
  "'": "＇",
  "A": "Ａ",
  "S": "Ｓ",
  "D": "Ｄ",
  "F": "Ｆ",
  "G": "Ｇ",
  "H": "Ｈ",
  "J": "Ｊ",
  "K": "Ｋ",
  "L": "Ｌ",
  ":": "：",
  "\"": "\"",
  "z": "ｚ",
  "x": "ｘ",
  "c": "ｃ",
  "v": "ｖ",
  "b": "ｂ",
  "n": "ｎ",
  "m": "ｍ",
  ",": "，",
  ".": "．",
  "/": "／",
  "Z": "Ｚ",
  "X": "Ｘ",
  "C": "Ｃ",
  "V": "Ｖ",
  "B": "Ｂ",
  "N": "Ｎ",
  "M": "Ｍ",
  "<": "<",
  ">": ">",
  "?": "？"
};

var my_text = document.getElementById("my_text");
var aesthetic_text = document.getElementById("aesthetic_text");

// Set pointer-events none as default
aesthetic_text.style.pointerEvents = "none";

my_text.addEventListener("keyup", function() {
  aesthetic_text.value = "";
  var val = this.value;
  val = val.split("");

  if (my_text.value == "") {
    aesthetic_text.style.pointerEvents = "none";
  } else {
    aesthetic_text.style.pointerEvents = "auto";
  }

  setTimeout(function() {

    Object.keys(aesthetic).map(function(item) {
      //Put for loop to convert same letters also
      for (var j = 0; j < val.length; j++) {

        var i = val.indexOf(item);
        if (i !== -1) {

          val[i] = aesthetic[item];
          aesthetic_text.value = val.join(" ");

          // Detect line break
          if (val.indexOf("\n") !== -1) {
            aesthetic_text.value = trimIt(val.join(" "))
          }

        }

      }

    });

  }, 50);

}, false);

// To trim first letter's white space in new line
function trimIt(x) {
  return x.replace(/^\s+|\s+$/gm, '');
}

// trigger copy event on click
$('#copy').on('click', function(event) {
  console.log(event);
  copyToClipboard(event);
});

// event handler
function copyToClipboard(e) {
  // alert('this function was triggered');
  // find target element
  var
    t = e.target, 
    c = t.dataset.copytarget,
    inp = (c ? document.querySelector(c) : null);
  console.log(inp);
  // check if input element exist and if it's selectable
  if (inp && inp.select) {
    // select text
    inp.select();
    try {
      // copy text
      document.execCommand('copy');
      inp.blur();

      // copied animation
      t.classList.add('copied');
      setTimeout(function() {
        t.classList.remove('copied');
      }, 1500);
    } catch (err) {
      //fallback in case exexCommand doesnt work
      alert('please press Ctrl/Cmd+C to copy');
    }

  }

}
