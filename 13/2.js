function tortik(ingridient, massa){
    tort = new Object;
    let sugar, butter, eggs, flour, cocoa;
    if(ingridient == "caster_sugar"){
        sugar = massa;
        butter = 170/160*massa;
        eggs = 3/160*massa;
        flour = 115/160*massa;
        cocoa = 55/160*massa;
    }
    else if(ingridient == "butter"){
        sugar = 160/170*massa;
        butter = massa;
        eggs = 3/170*massa;
        flour = 115/170*massa;
        cocoa = 55/170*massa;
    }
    else if(ingridient == "eggs"){
        sugar = 160/3*massa;
        butter = 170/3*massa;
        eggs = massa;
        flour = 115/3*massa;
        cocoa = 55/3*massa;
    }
    else if(ingridient == "self-raising_flour"){
        sugar = 160/115*massa;
        butter = 170/115*massa;
        eggs = 3/115*massa;
        flour = massa;
        cocoa = 55/115*massa;
    }
    else if(ingridient == "cocoa_powder"){
        sugar = 160/55*massa;
        butter = 170/55*massa;
        eggs = 3/55*massa;
        flour = 115/55*massa;
        cocoa = massa;
    }
    sugar = parseFloat(sugar.toFixed(1));
    butter = parseFloat(butter.toFixed(1));
    eggs = String(eggs.toFixed(1));
    flour = parseFloat(flour.toFixed(1));
    cocoa = parseFloat(cocoa.toFixed(1));
    tort.sugar = sugar;
    tort.butter = butter;
    tort.eggs = eggs;
    tort.self_raising_flour = flour;
    tort.cocoa_powder = cocoa;
    return tort;
}
console.log(tortik("eggs", 5));