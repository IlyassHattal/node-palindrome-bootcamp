document.querySelector("button").addEventListener("click", checkIt)

function checkIt(){
  let str = document.querySelector("input").value

  fetch(`/api?pali=${str}`)
  .then(response => response.json())
  .then((data) => {
      document.querySelector('#result').innerText = `${data.result}`
    });
}