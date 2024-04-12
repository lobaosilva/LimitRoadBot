import { Client } from 'discord.js';
import fetch from 'node-fetch';
import sqlite3 from 'sqlite3';
const client = new Client();

require('dotenv').config();

const TOKEN = process.env.TOKEN;
const DB_PATH = process.env.DB_PATH;
const ID_CANAL_EVENTOS = process.env.ID_CANAL_EVENTOS;
const ID_CANAL_RANKING = process.env.ID_CANAL_RANKING;

client.login(TOKEN);

client.on('ready', () => {
    console.log(`Logged in as  ${client.user.tag}!`);

    // Atualizar eventos automaticamente a cada X minutos
    setInterval(atualizarEventos, 600000); // 10 minutos em milissegundos

    // Atualizar ranking automaticamente a cada Y minutos
    setInterval(atualizarRanking,  1800000); // 30 minutos em milissegundos
});

async function atualizarEventos() {
    try {
        const response = await fetch('');
        const eventos = await response.json();
        const canalEventos = client.channels.cache.get('id_do_canal_eventos');
        canalEventos.send('**Eventos Atualizados:**\n' + JSON.stringify(eventos, null, 2));
    } catch (error) {
        console.log('Erro ao obter eventos:', error);
    }
}

async function atualizarRanking() {
    try {
        const response = await fetch('');
        const ranking = await response.json();
        const canalRanking = client.channels.cache.get('id_do_canal_ranking');
        canalRanking.send('**Ranking Atualizado:**\n' + formatarRanking(ranking));
    } catch (error) {
        console.error('Erro ao obter ranking:', error);
    }
}

function formatarRanking(ranking) {
    let rankingFormatado = '```\n';
    ranking.forEach((piloto, index) => {
        rankingFormatado += `${index + 1}. ${piloto.nome} - ${piloto.pontos} pontos\n`;
    });
    rankingFormatado += '```';
    return rankingFormatado;
}

client.on('message', async (message) => {
    // Código para lidar com mensagens recebidas
    if (message.content === '!atualizar_eventos') {
        try {
            const response = await fetch('');
            const  eventos = await response.json();

            // Código para processar e enviar  os eventos para o canal do servidor
            // Limpar o ranking atual na tabela do banco de dados
            db.run('DELETE FROM piltos');

            // Inserir o novo ranking na tabela do banco de dados
            ranking.forEach((piloto) => {
                db.run('INSERT INTO pilotos (nome, pontos) VALUES (?, ?)', [piloto.nome, piloto.pontos]);
            });

            message.reply('Ranking atualizado com sucesso.');
        } catch  (error) {
            console.error('Erro ao obter eventos:', error);
            message.reply('Erro ao obter eventos.');
        }
    }

    if (message.content === '!meu_ranking') {
        const nomePiloto = message.author.username;
        db.get('SELECT * FROM pilotos WHERE nome = ?', [nomePiloto], (err, row) => {
            if (err) {
                console.error('Erro ao consultar ranking:', err.message);
                message.reply('Erro ao consultar ranking.');
            } else {
                if (row) {
                    message.reply(`Seu ranking: ${row.pontos} pontos.`);
                } else {
                    message.reply('Você ainda não está no ranking.');
                }
            }
        });
    }
});

const  db = new sqlite3.Database('./data/lfm.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conexão bem-sucedida com o bando de daods SQLite.');
        // Criação da tabela de pilotos se ainda não existir
        db.run('CREATE TABLE IF NOT EXISTS pilotos (id INTEGER PRIMARY KEY, nome TEXT, pontos INTEGER');
    }
});