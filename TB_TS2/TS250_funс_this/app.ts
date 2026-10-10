type Car={
    num:string,
    model:string,
    show:(this:Car,s:string)=>void
};

let car3:Car={
    
    num: '2870-ОГО',
    model: 'Волга',
    
    // явно указываем тип this, ЕСЛИ надо
    show: function(prefix:string):void {
        console.log(prefix+" "+this.num+" "+this.model);
        // к price обратиться нельзя - TS знает что this:Car
        //console.log(prefix+" "+this.price); // ошибка
    }

};
car3.show("INFO #3:");

//const showRef=car3.show;
//showRef("INFO #3:"); // ошибка
