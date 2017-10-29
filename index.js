
function takeANumber(arrays,person) {
  arrays.push(person);
  return `Welcome, Ada. You are number ${arrays.indexOf(person)} in line.`;
}

function nowServing(list) {
  if (list.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return list.shift();
}
