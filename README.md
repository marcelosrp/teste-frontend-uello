# Teste front-end Uello

Olá! Meu nome é Marcelo Soares, tenho 31 anos, sou de Santos-SP e sou front-end desde 2013. 

O desafio foi desenvolvido em vuejs, sass, mapbox, husky para pre-push e outras dependencias.

## Como rodar o projeto localmente:

Após clonar o projeto, basta rodar o comando **npm install** ou **yarn install** para poder instalar as dependências do projeto e após instalado rodar o comando **npm serve** ou **yarn serve** para subir o servidor local. 
**Obs:** Eu deixei a chave da API do mapbox em um env.local, portanto a mesma não encontra-se no repositório. Para o mapa funcionar corretamente no modo de desenvolvimento recomendo criar um arquivo **.env.local** usando **VUE_APP_MAP_KEY** com a sua própria chave de api ou caso preferir pode colocar a chave diretamente no componente do mapa que encontra-se em src/components/Mapa no return do data().

## Sobre o desafio

### Coluna com as informações do envio
<ul>
  <li>Para deixar menos "hard coded", eu peguei as informações e coloquei em json para poder usar datas e props;</li>
  <li>Passei uma prop <b>onDelivery</b> para o componente Entrega. Quando for true ele exibe os blocos de "saiu para entrega", "endereço" e "horário estimado". Achei que dessa forma ficaria mais dinâmico;</li>
  <li>Usei um pacote de <b>donut chart</b> para exibir a quantidade de entrega. A partir de algumas props deixei adaptavel para desk e mobile, além também do dado vim de um API poder atualiza-lo via props;</li>
  <li>Eu deixei html fixo os blocos de central de ajuda e do progresso do envio.</li>
</ul>

### Mapa
A parte do mapa foi bem desafiador e divertido, sabia mexer bem superficialmente no mapbox.

Ao acessar a primeira vez o navegador pedirá para você dar permissão para pegar a sua localização. Ao permitir o mapa traçara a sua rota atual até o destino da entrega. Usei como base o endereço Doutor Gastão para destino, peguei sua latitude e longitude, coloquei no json junto com todas as informações de endereço.

Como o uso de localização é **fundamental** para entrega, eu escolhi não exibir o mapa caso o usuário não dê permissão para ativar a geolocalização do navegador.

Eu poderia usar o recurso do próprio mapbox para pegar localização atual mas escolhi utilizar a forma nativa da API do navegador.

### Mobile
Para evitar reescrever muito html novo, eu usei props para adaptar o layout para mobile mas acredito que o tenha ficado satisfatório e funcional.

### Observações gerais
Utilizei o husky como ferramenta de **prepush/precommit** e configurei para que sempre que rodar o comando **git push** ele roda o lint para verificar possíveis erros no código e evitar enviar pro repositório com erro.

Esse foi a primeira vez que escrevo algum projeto em vue.js, tenho mais experiência em reactjs, mas acredito que tenha conseguido chegar num resultado bom. Fico feliz e satisfeito de conseguir entregar o desafio.

Tenho certeza que com mais estudos em vuejs melhorarei cada vez mais meu código.

Subi o desafio no Netlify, para ver o desafio funcionando em produção é só [clicar aqui](http://teste-uello-marcelosoares.netlify.app/)

### Screenshots

Desktop:
<br />
![Página Inicial](/public/screenshots/Desktop.png)

Mapa sem permissão de localização
<br />
![Página Inicial](/public/screenshots/Desktop_sem_permissao.png)

Mobile:
<br />
![Página Inicial](/public/screenshots/mobile.png)
