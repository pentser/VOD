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
      let {name,capital,flag , borders} = data[0];

      let state = new Flag("#id_row", name, capital, flag, borders)
      state.renderState();
      // data[0].borders.map((item) => {
      //   fetch(`https://restcountries.eu/rest/v2/alpha/${item}?fullText=true`)
      //     .then(resp => resp.json())
      //     .then(data_state => {
      //       console.log(data_state)
      //       newDiv.innerHTML += data_state.name + ", ";
      //     })
      // })
    })
    .catch(err => {
      console.log(err)
      document.querySelector("#id_row").innerHTML = "state not found!"
    })

}