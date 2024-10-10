
const Informacoes_User = 
{
Nome:"Gutembergh",
SobreNome:"Vieira",
CPF:"098.834.961-25",
Endereço:"Tv.Garoá Número.43 Bairro.Zé-Pereira",
ProdutoComprado:"PC.Gamer.Completo",
PrecoProduto:"R$3.400,00",
};

for(const MostrarInfo in Informacoes_User)
{
console.log(`${MostrarInfo} : ${Informacoes_User[MostrarInfo]}`);
}
;