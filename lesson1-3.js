
    'use strict';
    let Tc = +prompt("ВВЕдите число для рассчета")
    let Tf = (9 / 5) * Tc;
    alert(Tf)

    let name = 'Василий';
    let admin = name;
    alert(admin);

    let point1 = 10 + 10 + "10";//сначала складваем 10+10 и прикрепляем десятку в скобках получается 2010
    let point2 = 10 + "10" + 10;// получается "101010"сначала происходит склеивание первых двух десяток а следом к ним приклеивается следущая
    let point3 = 10 + 10 + +"10";//получается 30 тут происходит первое сложение получается 20 а затем к 20 плюсуюется еще одна десятка через унарный плюс
    let point4 = 10 / -"";//- Infinity выражение справа получает значение -0 и следовательно при делении 10 на -0 получаем отрицательный infinity
    let point5 = 10 / +"2,5";//Nan выражение справа получается в значении Not a Number поэтому весь пример получает это же значение

    //урок 2
    //задание 1
    let a = 1, b = 1, c, d;
    c = ++a;
    alert(c);//ответ2 потому что оператор приращения увеличивает и возвращает значение после увеличения

    d = b++;
    alert(d); //ответ 1 потому что оператор приращения увеличивает и возвращает значение до увеличения

    c = 2 + ++a;
    alert(c);//ответ 5 тут получается что происходит сложение двойки с  оператором приращения увеличивает и возвращает значение после увеличения

    d = 2 + b++;
    alert(d);//ответ4 потому что сначала б=1 потом произошло увеличение на единицу стала 2 и произошло сложение с 2

    alert(a);//3 потому что сначала была еденица потом произошло увеличение на еденицу а затем еще раз
    alert(b);//3 тоже самое что и в примере выше

    //задание2

    let z = 2;//( получается умножилось на двойку)
    let x = 1 + (z *= 2)// x = 5(а тут получается ееницу прибавили к выражению умножения 2 на 2)

    //задание 3

    let e = 7;
    let f = 9;

    if (e > 0 && f > 0) {
        x = e - f;
        alert(x);
    } else if (e < 0 && f < 0) {
        x = e * f;
        alert(x);
    } else if (e > 0 && f < 0 || e < 0 && f > 0) {
        x = e + f;
        alert(x);
    }

    //задание 4
    let n = 7;
    let m = 9;

    function addition(n, m) {
        return n + m;
    }

    function subtraction(n, m) {
        return n - m;
    }

    function multiplication(n, m) {
        return n * m;
    }

    function division(n, m) {
        return n / m;
    }

    //задание 5

    function mathOperation(arg1, arg2, operation) {
        switch (operation) {

            case 'addition':
                arg1 + arg2;
                break;

            case 'subtraction':
                arg1 - arg2;
                break;

            case 'multiplication':
                arg1 * arg2;
                break;

            case 'division':
                arg1 / arg2;
                break;
        }
    }

    //урок 3 

    /*ЗАДАНИЕ 1  С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль,

     с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:

     0 – это ноль

     1 – нечетное число

     2 – четное число

     3 – нечетное число

     …

    10 – четное число*/

    for (let o = 0; o <= 10; o++) {

        if (o == 0) {// если переменная равна нулю то выводим что это ноль

            console.log(o + '- эт ноль');
        } else if (o % 2 == 0) {// это остаток от деления чтоб получать четное число

            console.log(o + '- это четное число');
        } else {// во всех остальных случаях получаем не четные числа

            console.log(o + '- эт не четное')
        }
    }
    // ЗАДАНИЕ 2-Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
    //товар применить скидку 15%, можете использовать метод forEach

    const products = [

        {
            id: 3,
            price: 200,

        },
        {
            id: 4,
            price: 900,

        },
        {
            id: 1,
            price: 1000,

        },

    ];
    products.forEach(sale => {

        sale.price = sale.price - sale.price * 0.15;

    });// в sale будут проверяться все обьекты по порядку начиная с верхнего

    console.log(products);

    //ЗАДАНИЕ 3

    const product = [

        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]

        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"

            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];

    const productSFoto = product.filter(items => "photos" in items && items.photos.length)
    console.log(productSFoto);

    const sortedPriceToHigh = product.sort(function (items1, items2) {
        return items1.price - items2.price;
    });

    /*6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
     только у вашей горки должно быть 20 рядов, а не 5:*/

    for (let n = 'n'; n.length <= 20; x += 'n') {
        console.log(n);
    }

    /*5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла
       for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:
       for(…){/* здесь пусто */

    for (let p = 0; p < 9; console.log(p++)) { }


    // Выведите в консоль значения, указанные рядом с комментариями:

    const post = {

        author: "John", //вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {

                    likes: 10,
                    dislikes: 2 //вывести это число
                }
            },
            {
                userId: 5, //вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {

                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    };
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].text);
    console.log(post.comments[1].userId);
