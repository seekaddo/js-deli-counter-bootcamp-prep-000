
function takeANumber(arrays,person) {
  arrays.push(person);
  return `Welcome, Ada. You are number ${arrays.indexOf(person)+1} in line.`;
}

function nowServing(list) {
  if (list.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${list.shift()}.`;
}


function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var sent = "The line is currently: ";
  for (let i = 0; i < line.length; i++) {
    sent += `${i+1}. ${line[i]}`;
  }

  return sent;

}
