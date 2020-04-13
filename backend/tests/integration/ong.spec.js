const app = require('../../src/app');
const request = require('supertest');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach( async ()=>{
        await connection.migrate.latest()
    })

    afterAll(async ()=>{
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "apad",
            email: "email@test.com",
            whatsapp: "48999113048",
            city: "São José",
            uf: "sc"
        });

        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8)
    });

});