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
  let phonetic_equivalent = "";
  let n = parseInt(num);

  if(!isNaN(n)) {

  } else {
    return "NotaNumber";
  }

}

//get input from params (args) after node <filename> (console)
const get_input = () => {
  return process.argv.slice(2);
};

const main = (input) => {
  input.map(num => {

  });
};

main(get_input());
