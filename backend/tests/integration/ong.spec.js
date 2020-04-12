const request = require('supertest');
const app = require('../../src/app');

describe('ONG', ()=>{
    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "papai do cr",
            email: "email@lardezulma.com.br",
            whatsapp: "48999113048",
            city: "São José",
            uf: "sc"
        });
    });
});