function Pessoa({nome, idade, profissao, foto }) {
    return (
        <div>
           <img src={foto} alt={nome} />
           <h2>Nome: {nome} </h2>
           <p>Idade: {idade}</p>
           <p>Profissao: {profissao}</p>
    </div>
  )
}
export default Pessoa;

//usando Destruction para minimizar o codigo e deixando mais legivel//


//function Pessoa(props) {
    //return (
       // <div>
          // <img src={props.foto} alt={props.nome} />
         //  <h2>Nome: {props.nome} </h2>
         //  <p> Idade:{props.idade}</p>
         //  <p>Profissao: {props.profissao}</p>
   // </div>
 // )
//}

//export default Pessoa;