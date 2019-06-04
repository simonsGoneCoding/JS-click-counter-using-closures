const add = (start = 0) => {
 let number = start;
 return () => {
  number++;
  document.body.textContent = `click number ${number}`;
 }
}

const counter = add()

document.addEventListener('click', counter)