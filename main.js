const phonetic_equivalent = {
  '0' : 'Zero',
  '1' : 'One',
  '2' : 'Two',
  '3' : 'Three',
  '4' : 'Four',
  '5' : 'Five',
  '6' : 'Six',
  '7' : 'Seven',
  '8' : 'Eight',
  '9' : 'Nine',
}

const convert_int_to_phonetic = (num) => {
  let str_phonetic_equivalent = "";
  let n = parseInt(num);

  if(isNaN(n)) {
    return "NotaNumber";
  }

  if(n < 0) {
    n *= -1;
    num = num.slice(1);
    str_phonetic_equivalent += "Negative";
  }

  for (var i = 0; i < num.length; i++) {
    if(!phonetic_equivalent.hasOwnProperty(num.charAt(i)));
      return "NotanInteger";

    str_phonetic_equivalent += phonetic_equivalent[num.charAt(i)];
  }

  return str_phonetic_equivalent;
}

//get input from params (args) after node <filename> (console)
const get_input = () => {
  return process.argv.slice(2);
};

const main = (input) => {
  let count = 0;
  input.map(num => {
    let out = convert_int_to_phonetic(num);

    if(count < input.length - 1) {
      out += ',';
    } else {
      out += '\n';
    }

    process.stdout.write(out);
    count++;
  });
};

main(get_input());
