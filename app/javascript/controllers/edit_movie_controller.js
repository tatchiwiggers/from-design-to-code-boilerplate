import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['infos', 'form', 'card'];
  // connect() {
  //   console.log(this.formTarget);
  //   console.log(this.infosTarget);
  // }

  displayForm() {
    this.infosTarget.classList.add('d-none'); // hides form
    this.formTarget.classList.remove('d-none'); // shows form
  }

  update(event) {
    event.preventDefault();
    const url = this.formTarget.action
    console.log(url);
    fetch(url, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      // aqui passamos um body utilizando a instanciando uma
      // classe formdata e ele constroi o corpo do fetch request
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        // console.log(data);
        this.cardTarget.outerHTML = data;
      })
  }
} 