const prod1 = {
    name : 'Skoda',
    price : 15000,
    weight: 1500,
};

const prod2 = {
    name: 'Audi',
    price: 12000,
    weight:1300,
};

console.log("Produkt numer jeden to: "+prod1.name);
console.log("Produkt numer dwa to: "+prod2.name);
console.log("Produkty kosztują razem: "+(prod2.price+prod1.price));
console.log("Produkty ważą razem: "+(prod2.weight+prod1.weight));

const currentUser = {
    name: 'Seweryn',
    surname: 'Drąg',
    email: 'dragseweryn@o2.pl',
    www: 'energetyk.ires.pl',
    userType: 'editor',

        show: function(){
            console.log('Imię: '+this.name);
            console.log('Nazwisko: '+this.surname);
            console.log('Email: '+this.email);
            console.log('WWW: '+this.www);
            console.log('Typ: '+this.userType);
        }
}
currentUser.show();

const book = {
    title: 'Harry Potter',
    author: 'a nwm',
    pageCount: 'abc',
    publisher: 'djfnds',

        showDetails: function(){
            for (const i in this) {
                if(typeof this[i] !== "function") {
                    console.log("Klucz: " + i);
                    console.log("Wartość: " + this[i]);
                }
            }
        }

}

const users = [
    [  1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28 ],
    [  2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37 ],
    [  3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06 ],
    [  4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64 ],
    [  5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54 ],
    [  6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08 ],
    [  7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21 ],
    [  8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72 ],
    [  9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68 ],
    [ 10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44 ]
]

function fixData(tab) {
    const newTab=[];

    for (const el of users) {
        const ob = {
            id: el[0],
            name: el[1],
            surname: el[2],
            email: el[3],
            age: el[4],
            money: el[5]
        }
        newTab.push(ob);
    }
    return newTab;
}

