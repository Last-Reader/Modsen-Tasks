function setOrder(name) {
    console.log(`Пользователь ${name} сделал заказ`);
    function placingOrderAsync() {
        setTimeout(()=> {
            console.log(`Заказ размещён!`);
            calculateDeliveryAsync();
        }, 3000);
    }
    function calculateDeliveryAsync() {
        console.log(`Идёт расчёт стоимости доставки...`);
        setTimeout(() => {
            console.log(`Стоимость доставки рассчитана`);
            console.log(`Цена доставки безгранична!`);
            waitUserAsync();
        }, 4000);
    }
    function waitUserAsync () {
        setTimeout(() => {
            console.log(`По неизвестным причинам пользователь ${name} отменил заказ :(`);
        }, 4000);
    }
    placingOrderAsync();
}

setOrder(`Gustav`);