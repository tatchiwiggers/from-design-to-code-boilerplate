// aqui importamos da lib stimulus a classe controller
import { Controller } from "stimulus";

// aqui estendemos dessa classe e criamos um controller novo para nosso feature.
// nada de novo aqui né?
export default class extends Controller {
  // aqui temos os tres targets que falamos mais cedo
  // 1 - form: entao ja sabemos que precisamos listen por um input que no caso aqui seria um keyup.
  // 2 - input: vamos precisar então do nosso query string pra construir nossa URL. 
  //***e é por isso que nosso input tambem será um target***
  // 3 - lista: então também será um targert porque vamos precisar recuperar o que o usuario
  // inputar pra fazer isso acontecer.

  static targets = ['form', 'input', 'list'];

  // connect() {
  //   console.log(this.formTarget);
  //   console.log(this.inputTarget);
  //   console.log(this.listTarget);
  // }
  // ENTÃO AGORA QUE TEMOS NOSSO CONTROLLER PRONTO VAMOS USAR O CONNECT PRA TESTAR NOSSOS TARGETS
  // ABRIMOS NOSSO CONSOLE, PORQUE CASO HAJA ALGUM ERRO, VAI APARECER AQUI PRA GENTE.
  
  // NÃO TEM ERRO, NOSSOS 3 TARGETS DEVERÃO ESTAR AQUI NO CONSOLE. E FIZEMOS ISSO COM O CONNECT.
  // NAO PRECISAMOS MAIS DO CONNECT. DEU TD CERTO BASTA COMENTAR...
  
  // NEXT SLIDE!!! BACK TO SCRIPT!!

  update(event) {
    // // console log pra testar
    // console.log('TODO: send request in AJAX');
    // // entao ao inves de console log isso aqui vamos recuperar o que temos no input
    // // cada vez que uma letra é adicionada, recuperamos uma letra do input
    // console.log(this.inputTarget.value);
    // // INTERPOTAIONS
    // console.log(this.formTarget.action);


    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`

    fetch(url, { headers: { 'Accept': 'text/plain' } })
      .then(response => response.text())
      .then((data) => {
        // esse data contem de tudo, css html... isso não é um partial
        // então precisamos ir no nosso rails controller...
        // console.log(data);
        // console.log(this.listTarget.outerHTML);
        // pegamos essa lista e substituimos com a resposta do servidor
        this.listTarget.outerHTML = data;
      })

  }
  // verificar no console se esse action esta funcionando
  // - QUAL A AÇÃO AQUI? KEYUP - É NECESSÁRIO DIGITAR
}
