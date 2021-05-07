const expect = require('chai').expect;
const axios = require('axios').default;

describe('Lambda API test', () => {
    it('CREATE user API', async () => {
        try {
            let result = await axios({
                method: 'post',
                url: 'https://7dh8cegzl1.execute-api.eu-west-2.amazonaws.com/test/createuser',
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
            let result = await axios.get('https://7dh8cegzl1.execute-api.eu-west-2.amazonaws.com/test/getuser');
            expect(result.data.length).to.be.greaterThan(0);
        } catch (err) {
            console.log(err);
            
        }
    });

    it('DELETE user API', async () => {
        try {
            let result = await axios({
                method: 'put',
                url: 'https://7dh8cegzl1.execute-api.eu-west-2.amazonaws.com/test/deleteusers'
            });
            expect(result.status).to.be.eq(200);
        } catch (err) {
            console.log(err);
            
        }
    });
})