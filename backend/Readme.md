/*
* Rota / Recursos
*/

/*
* Métodos HTTP:
* GET: Buscar uma informaçao no back-end
* POST: Criar uma informaçao no back-end
* PUT: Alterar uma informaç;ao no backend
* DELETE: deletar uma informaç;ao no backend
*/


/*
* Tipos de parametros:
*  
* Query: parametros nomeados enviados na rota após "?" (Filtros, paginaçao)
*   - localhost:3333/users?page=2&nome=diego&idade=25
*   - http://localhost:3333/users/1?name=Felipe
* Route params: Parametros utilizados para identificar recursos
*   - Params: http://localhost:3333/users/1
*   - users/:id
*   - localhost:3333/users/1 
* Request Body: corpo da requisiçao 
*  para criar um usuário precisa colocar a rota para post no insominia
*/


routes.post('/ongs', (request, response)=>{
    const query = request.query;
    const params = request.params;
    const body = request.body;

    console.log('query', query);
    console.log('Params', params);
    console.log('body', body);

  return response.json({
    evento: 'Semana Corona Virus',
    aluno: 'Felipe Genuino'
  })
})



Pode nao carregar o banco, dessa forma precisa deletar o db e rodar a migraç;ao novamente
$ npx knex migrate:latest
