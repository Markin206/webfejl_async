const buyApple1 = (apple1 => {
    if(apple1 < 5){
        return Promise.resolve('Van elég alma!');//Felóldott promise
    }else{
        return Promise.reject('Nincs elég alma!');
    }
})

res1 = buyApple1(4);//promise tipusu osztályt tartallmaz
console.log(res1);

res1.then(value => {
    console.log(value);//érték kiiratása
});
console.log('Feloldás után')

buyApple1(5).then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});