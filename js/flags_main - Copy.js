window.onload = () => {
  doRestApi()
}

const onSearchClick = () => {
  let userInput = id_input.value;
  doRestApi(userInput);
}

const doRestApi = (_state = "usa") => {
  id_row.innerHTML = "";
  let myUrl = `https://restcountries.eu/rest/v2/name/${_state}?fullText=true`;

  fetch(myUrl)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      let newDiv = document.createElement("div");
      newDiv.className = "border p-3";
      document.querySelector("#id_row").appendChild(newDiv);
      newDiv.innerHTML = `
      <h2>${data[0].name} , captial: ${data[0].capital}</h2>
      <img src="${data[0].flag}" width="150" >
      `;
      newDiv.innerHTML += `Borders:`
      data[0].borders.map((item) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${item}?fullText=true`)
          .then(resp => resp.json())
          .then(data_state => {
            console.log(data_state)
            newDiv.innerHTML += data_state.name + ", ";
          })
      })
    })
    .catch(err => {
      console.log(err)
      document.querySelector("#id_row").innerHTML = "state not found!"
    })

}