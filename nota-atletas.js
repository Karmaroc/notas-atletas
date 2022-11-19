let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

atletas.forEach(function(element){
  let nomes = element.nome
  console.log("\nAtleta: " + nomes)
  
  let notas = element.notas.sort()
  console.log("Notas Obtidas: " + notas)

  let notas_1 = element.notas
  notas_1.sort(function(a,b){

    if(a > b) return 1;
    if(a < b) return -1;

    return 0;
  });
  
  // console.log(notas_1)
  
  let novasNotas = notas_1.slice(1,4)
  
  // console.log(novasNotas)
  
  let soma = 0
  let media = 0
  novasNotas.forEach(function(notas){
  soma = soma + notas
  
  media = soma / novasNotas.length
  return media
  })

  console.log("Média Válida: " + media)
  
  
})
