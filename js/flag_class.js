class Flag {
  constructor(_parent, _name, _capital, _img, _borders) {
    this.parent = _parent;
    this.name = _name;
    this.capital = _capital;
    this.img = _img;
    this.borders = _borders;
  }

  renderState() {
    let newDiv = document.createElement("div");
    newDiv.className = "border p-3";
    document.querySelector(this.parent).appendChild(newDiv);
    newDiv.innerHTML = `
      <h2>${this.name} , captial: ${this.capital}</h2>
      <img src="${this.img}" width="150" >
      `;
    newDiv.innerHTML += `Borders:`

    this.newDiv = newDiv;

    this.borders.map((item) => {
      console.log(item);
      this.renderStateBorder(item);
    })


  }

  renderStateBorder(_stateCode) {
    fetch(`https://restcountries.eu/rest/v2/alpha/${_stateCode}?fullText=true`)
      .then(resp => resp.json())
      .then(data => {
        this.newDiv.innerHTML += data.name + " ,"
      })

  }
}