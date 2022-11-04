function show() {
  alert("Thank you for your support ♡♡")
}
  function getQuote() {
    let quotes = document.querySelector(".quote-box");
    quotes.innerHTML = "";
    fetch(`https://taylorswiftapi.herokuapp.com/get`)
      .then(res => res.json())
      .then(data => {
          quotes.innerHTML += `
          <div class="card m-5" style="width: 18rem;">
            <p>${data.quote}</p>
          </div>`;
        });
  }
  getQuote();
  
  let btn = document.querySelector("#knopka");
  btn.addEventListener("click", getQuote);