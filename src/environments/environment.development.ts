const baseUrl = 'http://localhost:8081';
const baseUrlAutenticacao = 'http://localhost:8088';

export const environment = {
    apiCategorias: baseUrl + '/api/v1/categorias',
    apiTarefas : baseUrl + '/api/v1/tarefas',
    apiUsuarios : baseUrlAutenticacao + '/api/v1/usuarios'
};
