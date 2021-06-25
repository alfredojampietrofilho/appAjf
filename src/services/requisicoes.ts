import { Produtos } from './../models/produtos';
import axios from './serviceAxios';
import { Cadastro } from '../models/cadastro';

export async function autenticar(login: string, password: string): Promise<any> {
    try {
        const response = await axios.post('/user/login', { login, password });
        return response.data;
    } catch (error) {
        console.error('Erro ao autenticar:');
        console.error(error);
        return null;
    }
}

export async function obterListaProdutos(): Promise<Produtos[]> {
    try {
        const response = await axios.get('/product/list');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function adicionaUsuario(usuario: Cadastro) : Promise<any> {
    try {
        const response = await axios.post('/user/customer/add', usuario);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}