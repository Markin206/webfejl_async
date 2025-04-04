
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
        console.log();
        this.#div = document.createElement('div');
        this.#div.textContent = "Loading";
        document.body.appendChild(this.#div);
    }

    setContent(array){
        this.#div.innerHTML = "";
        for(const elem of array){
            const div = document.createElement('div');
            div.textContent = elem.name;
            this.#div.appendChild(div);
        }
    }
}

const serv = new Szerviz()
const view = new dataViewController();
serv.init().then((value) => {
    view.setContent(value);
})