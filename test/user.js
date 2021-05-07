const expect = require('chai').expect;
const axios = require('axios').default;

describe('User API test', () => {
    it('CREATE user API', async () => {
        try {
            let result = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/user',
                data: {
                    firstName: "Sekhar Suman",
                    lastName: "Sahu",
                    city: "Hyderabad"
                }
            });
            expect(result.status).to.be.eq(200);
        } catch (err) {
            console.log(err);
            
        }
    });

    it('GET user API', async () => {
        try {
            let result = await axios.get('http://localhost:3000/api/user');
            expect(result.data.length).to.be.greaterThan(0);
        } catch (err) {
            console.log(err);
            
        }
    });

    it('DELETE user API', async () => {
        try {
            let result = await axios({
                method: 'put',
                url: 'http://localhost:3000/api/user'
            });
            expect(result.status).to.be.eq(200);
        } catch (err) {
            console.log(err);
            
        }
    });
})