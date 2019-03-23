/* By default , Jest Takes complete once they reach the end of their exexcution */
const fetchData=require('./Asyn.js');



test('fetching data',()=>{
    return fetchData().then(data=>{
        expect(data.id).toBe(2);
    })
})