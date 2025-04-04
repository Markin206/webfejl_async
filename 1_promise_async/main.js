
//----------------------------------------------------------------------Promise és a 2 statisuk függvénye és a .then() és .catch
const buyApple1 = (apple1 => {
    if(apple1 < 5){
        return Promise.resolve('Van elég alma+!');//Felóldott promise
    }else{
        return Promise.reject('Nincs elég alma+!');
    }
});

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


const buyApple2 = (apple2 => {
    return new Promise((resolve, reject)=> {//böngészőbe van impletentálva (resolve, reject)
        if(apple2 < 5){
            resolve('van alma++:'+apple2);
        }else{
            reject('Nincs elég alma++:'+apple2);
        }
    });
});

buyApple2(3).then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});

buyApple2(5).then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});

//----------------------------------------------------------timeout
/**
 * 
 * @param {Number} apple3 
 * @returns 
 */
const buyApple3 = (apple3 => {
    return new Promise((resolve, reject)=> {//böngészőbe van impletentálva (resolve, reject)
        if(apple3 < 5){
            setTimeout(() => {
                resolve('van alma+++:'+apple3);
            }, 2000);
        }else{
            setTimeout(() => {
                reject('Nincs alma+++:'+apple3);
            }, 3000);
        }
    });
});

buyApple3(3).then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});

buyApple3(5).then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});

res2 = buyApple3(5).then(value => {console.log(value);}).catch(error => {console.log(error);});

console.log(res2);


//----------------------------------------------------------------------------------

class Szerviz{
    #data;
    constructor(){
        this.#data = people;
    }
    init(){
        return new Promise((resolve) =>{
            setTimeout(() => {
                resolve(this.#data);
            }, 3000);
        });
    }
}

class dataViewController{
    #div;
    constructor(){
        this.#div = document.createElement('div');
        this.#div.TextContent = "Loading";
        document.append(this.#div);
    }
}