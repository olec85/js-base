 /*1   <a href="#">link1</a>
    <a href="#">link2</a>
    <a href="#">link3</a>
    <a href="#" id="four">link4</a>

    <!-- Задание. Используя поиск по id, получите ссылку с текстом link4
    и выведите ее в консоль. -->*/
    

    'use strict';
    let link = document.getElementById('four');
    console.log(link);

    /* 2 <body*>
    <p class="one">параграф 1</p>
    <p>параграф</p>
    <p class="one">параграф 2</p>
    <h3 class="one">заголовок 1</h3>
    <h3>заголовок 2</h3>

    <!-- Задание. Используя поиск по имени класса, получите все элементы с классом .one
    и выведите их в консоль. -->*/

    'use strict';
    let ons = document.getElementsByClassName('one');
    console.log(ons);

    /* 3 
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>

    <!-- Задание. Используя поиск по селектору (метод querySelectorAll) найдите только те ссылки с
    классом .card-link, которые находятся в .card-body
    и выведите их в консоль. -->

 */

    'use strict';
    let links = document.querySelectorAll('card-body .card-link');
    console.log(links);

    /* 4 <*>
    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

    <!-- Задание. Используя поиск по селектору (метод querySelector) найдите div с атрибутом
    aria-valuenow="50" и выведите его в консоль. -->
*/

'use strict';

let div = document.querySelector('aria-valuenow="50"');
console(div);

/* 5 
    <!-- Задание. Выведите содержимое тега title в консоль. -->
 */

    'use strict';
    console.log(document.title);

    /*6
    <div class="media">
        <img src="..." class="align-self-start mr-3" alt="...">
        <div class="media-body">
            <h5 class="mt-0">Top-aligned media</h5>
            <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus
                odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
            </p>
            <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
            </p>
        </div>
    </div>

    <!-- Задание. Обратитесь к элементу с классом .mt-0 и получите его родителя - элемент с
    классом .media-body. -->
 */

    'use strict';
    let mt01 = document.querySelector('mt-0');
    console.log(mt01.parentNode);

    /* 7 <body>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>

    <!-- Задание. 
    1. Найдите элемент с классом .btn-outline-warning и удалите его.
    2. Аналогичным образом удалите элемент с классом .btn-outline-dark -->
 */

    'use strict';
    let btnWarning = document.querySelector('.btn-outline-warning');
    btnWarning.remove();
    let btnDark = document.querySelector('btn-outline-dark');
    btnDark.remove();

    /*8 <body>
    
    <div>

    </div>

    <!-- Задание. Добавьте в div c помощью appendChild следующую разметку:
    <h3>hello world</h3>
    -->
 */

    'use strict';
    let divas = document.querySelector('div');
    let h3 = document.createElement('h3');
    h3.innerText = 'hello world';
    divas.appendChild(h3);

    /* 9 <>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>

    <!-- Задание. Найдите кнопку с классом .btn-info и сделайте текст в кнопке: "Кнопка".-->
 */

    'use strict';
    let btn = document.querySelector('.info-btn');
    btn.innerText = 'кнопка';

    /* 10 <body>
    <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
    </ul>

    <!-- Задание. Найдите тег ul. И добавьте ему класс one. -->
> */

   'use strict';
   let ul = document.querySelector('ul');
   ul.classList.add('one');

   /* 11 <*>
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
        </li>
    </ul>

    <!-- Задание. Найдите элемент с классом .nav-link и используя метод toggle из свойства classList
    у элемента, добавьте или уберите класс .active. -->
*/

    let navLink1 = document.querySelector('.nav-link');
    navLink1.classList.toggle('active');

    /* 12 <>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>

    <!-- Задание. Найдите элемент с классом .dropdown-menu и удалите этот класс, используя свойство classList
    у элемента, и метод remove(). -->
     */

    'use strict';
    let dropdownMenu1 = document.querySelector('.dropdown-menu');
    dropdownMenu1.classList.remove('.dropdown-menu');

    /* 13 <>
    
    <diva class="menu"></diva>

    <!-- Задание. Добавьте в div с классом .menu следующую разметку:
    <a href="#">link</a>
    используя метод insertAdjacentHTML.
    -->
 */
    
    'use strict';
    let diva = document.querySelector ('.menu');
    diva.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');

    /* 14 <body>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>

    <!-- Задание. Выведите в консоль значение атрибутов data-dismiss
    и aria-label с помощью метода getAttribute. -->
*/

'use strict';
let button = document.querySelector('button');
console.log(button.getAttribute(aria-label));
console.log(button.getAttribute(data-dismiss));

/* 15 <>
    <h1>Заголовок</h1>

    <!-- Задание. Добавьте заголовку атрибут data-one="один" и атрибут
    data-two="два" с помощью метода setAttribute. -->
 */

    'use strict';
    let h1 = document.querySelector('h1');
    h1.setAttribute('data-one', 'один');
    h1.setAttribute('data-two', 'два');

    /* 16 <>
    <article>
        <h2>title</h2>
        text
    </article>
    <article>
        <h2 id="title">title</h2>
        text
    </article>

    <!-- Задание. найдите заголовок с id="title" и замените значение id
    на что-то другое. -->
 */

    'use strict';
    let header = document.getElementById('title');
    header.id = newSpan;

    /* 17
    
    <!-- Задание. Отследите когда все теги будут добавлены на страницу (событие
    DOMContentLoaded) и выведите alert'ом сообщение: "все теги добавлены на страницу". -->

 */

    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        alert("Все теги добавлены на страницу")
    });

    /* 18 <body*>
    <img src="https://placeimg.com/1000/1000/animals" alt="">
    <img src="https://placeimg.com/1000/1000/arch" alt="">
    <img src="https://placeimg.com/1000/1000/nature" alt="">
    <img src="https://placeimg.com/1000/1000/people" alt="">
    <img src="https://placeimg.com/1000/1000/tech" alt="">
    <img src="https://placeimg.com/1000/1000/tech/grayscale" alt="">
    <img src="https://placeimg.com/1000/1000/tech/sepia" alt="">

    <!-- Задание. Дождитесь когда все картинки загрузятся (событие load) и
    покажите с помощью alert сообщение: "все картинки загружены". -->
 */

    'use strict';
    window.addEventListener('load' , function() {
        this.alert("Все картинки загружены")
    });

    /* 19
    <button>Кнопка</button>
    <button class="btn">Кнопка с классом btn</button>
    <button>Кнопка</button>

    <!-- Задание. Сделайте, чтобы по клику по кнопке с классом .btn появлялся
    alert('клик') -->
 */

    'use strict';
    let btn = document.querySelector('btn');
    btn.addEventListener('click', function() {
        alert('клик');
    });

    /* 20
    <textarea></textarea>

    <!-- Задание. Сделайте, чтобы при наведении на textarea в консоли
    появлялось сообщение: "вы навели на textarea" -->

    */

    'use strict';
    let textarea = document.querySelector('textarea');
    textarea.addEventListener('mouseover', function() {
        alert("вы навели на textarea")
    });

    /* 21 <body>
    <img src="https://placeimg.com/100/100/animals" alt="">
    <img src="https://placeimg.com/100/100/arch" alt="">
    <img src="https://placeimg.com/100/100/people" alt="">

    <!-- Задание. 
    1. Сохраните в переменную коллекцию с картинками.
    2. Пробегитесь по этой коллекции с помощью цикла или forEach
    и выведите каждую картинку в консоль. Выведите в консоль только
	элементы коллекции, не нужно пытаться сделать, чтобы в консоли
	появилось изображение. -->

</body> */

'use strict';
let images = document.querySelectorAll('img');
images.forEach(function (image) {
    console.log(image);
});

/* 22 <body>
    <h3 class="one">Заголовок</h3>
    <a class="one" href="#">ссылка</a>
    <p class="one">параграф</p>

    <!-- Задание.
    1. Сохраните в переменную коллекцию элементов с классом one. Для получения
    элементов используйте метод. getElementsByClassName() 
    2. С помощью цикла переберите эту коллекцию и выведите в консоль название тега.
    -->
</body> */

'use strict';
let ones = document.getElementsByClassName('one');
for (let i = 0; i < 0; i++) {
    console.log(ones[i] .tagName);
}
 /* 23 <body>
    <h2 class="one lorem">Заголовок 1</h2>
    <h2 class="two ipsum">Заголовок 2</h2>
    <h2 class="three">Заголовок 3</h2>

    <!-- 
    Задание.
    1. Сохраните в переменную коллекцию с тегами h2, используйте метод getElementsByTagName()
    2. Пробегитесь по этой коллекции с помощью цикла и выведите в консоль значение
    атрибута class, используя свойство className.
    -->
 */

    'use strict';
    let h2Elements = document.getElementsByTagName('h2');
    for (let i = 0; i < h2Elements.length; i++) {
        console.log(h2Elements[i] .className);
    }

    /* 23 
    <div class="one two three"></div>

    <!-- 
    Задание.
    1. Сохраните в переменную тег div.
    2. Создайте переменную classes, и в нее сохраните значение свойства classList.
    3. C помощью forEach переберите classes и выведите каждый класс в консоль.
     -->
 */

     'use strict';
     let divsa = document.querySelector('div')
     let classes = divsa.classList;
     classes.forEach(function (clas) {
         console.log(clas);
     });


     /* 24 <body>
    <div class="product hidden"></div>

    <!-- Задание.
    1. Вам нужно получить этот div.
    2. Затем обратитесь к списку классов и с помощью метода contains()
    проверьте есть ли класс hidden у этого тега.
     -->

</body> */

     'use strict';
     let diiv = document.querySelector('div');
     console.log( dii.classList.contains('hidden'));

     /* 25 <body>
    <div class="card hidden">
        Lorem ipsum dolor sit.
    </div>
    <div class="card">
        Lorem ipsum dolor sit.
    </div>
    <div class="card hidden">
        Lorem ipsum dolor sit.
    </div>
    <div class="card">
        Lorem ipsum dolor sit.
    </div>

    <!-- Задание.
    1. Найдите все "карточки" с классом .card.
    2. Проверьте есть ли у карточки класс hidden с помощью метода contains(),
    и если есть, то удалите с помощью метода remove(). -->

</body> */

let cardos = document.querySelectorAll('.card');
cardos.forEach(function (card) {
    if (cardos.classList.contains('hidden')) {
        cardos.classList.remove('hidden');
    }
});

/* 26 <body>
    <a href="#">ссылка</a>
    <a href="#"></a>
    <a href="#">ссылка</a>
    <a href="#"></a>

    <!-- Задание.
    1. Получите все ссылки.
    2. Проверьте, есть ли в ссылке текст "ссылка", и если нет, то добавьте. -->

    <script>
        
    </script>

</body> */

'use strict';
for ( let i = 0; i < document.links.length; i++) {
    if (document.links[i].innerText !== 'ссылка') {
        document.links[i].innerText = 'ссылка';
    }
}

/* 27 <body>
    <b>Lorem, ipsum.</b>
    <b class="sign">Lorem, ipsum.</b>
    <b class="sign">Lorem, ipsum.</b>
    <b>Lorem, ipsum.</b>

    <!-- 
    Задание.
    1. Получите все теги b.
    2. С помощью метода contains() из classList, проверьте, есть ли у тега
    класс sign, и если нет, то тогда добавьте с помощью метода add()
     */

    'use strict';
    let bElements = document.querySelectorAll('b');
    bElements.forEach(function (b) {
        if (!b.classList.contains('sign')) {
            b.classList.add('sign');
        }
    });

    /* 28 <body>
    <i class="green">тут текст НЕ должен быть зеленым</i>
    <i>здесь текст сделайте зеленым</i>
    <i class="green">тут текст НЕ должен быть зеленым</i>
    <i>здесь текст сделайте зеленым</i>

    <!-- 
    Задание.
    1. Получите коллекцию тегов i.
    2. Пробегитесь по этой коллекции и с помощью classList.toggle() сделайте,
    чтобы где класс green есть, его не стало, а где нету, чтобы появился.
    -->

</body> */

'use strict';
let iElements = document.querySelectorAll('i');
iElements.forEach(function (i) {
    i.classList.toggle('green');
});

/* 29 <body>
    <button id="one" class="btn">Кнопка 1</button>

    <!-- 
    Задание.
    1. Получите кнопку и сохраните ее в переменную.
    2. Назначьте кнопке обработку клика.
    3. У функции-обработчика клика сделайте параметр event
    4. При клике из event.target выведите в консоль: id, имя класса (используйте
    свойство className), текст на кнопке.
    -->

</body> */


'use strict';
let batton = document.querySelector('batton');
batton.addEventListener('click', function(event) {
    console.log(event.target.id, event.target.className, event.target.innerText);
});

/* 30 <body>
    <p class="first second third">
        Lorem ipsum dolor sit.
    </p>

    <!-- 
    Задание.
    1. Назначьте обработку клика по параграфу, у функции обработчика объявите
    параметр event.
    2. При клике выведите в консоль event.target.classList
    3. Переберите с помощью forEach event.target.classList и выведите каждый класс
    в консоль.
    -->

</body> */

'use strict';
let p = document.querySelector('p');
p.addEventListener('click', function(event) {
    console.log(EventTarget.classList);
    event.target.classList.forEach(function (clas) {
        console.log(clas);
    });
});

/* 31<body>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		текст
    </div>

    <!-- 
    Задание.
    1. Сохраните ссылку на div в переменную
    2. Назначьте div'у обработку клика, у функции-обработчика объявите параметр event.
    3. При клике из event.target c помощью getAttribute() получите значение
    каждого атрибута и выведите в консоль.
    -->
()
</body> */

'use strict';
let divon = document.querySelector('divon');
divon.addEventListener('click', function(event) {
    console.log(event.target.getAttribute('id'));
    console.log(event.target.getAttribute('class'));
    console.log(event.target.getAttribute('tabindex'));
    console.log(event.target.getAttribute('aria-labelledby'));
    console.log(event.target.getAttribute('aria-hidden'));
});


/* 32 <body>
    
    <div class="product">
        <span class="productName">Товар 1</span>
        Описание товара
    </div>

    <!-- 
    Задание.
    1. Сохраните в переменную ссылку на .product
    2. Назначьте обработку клика по .product, у функции обработчика объявите
    параметр event.
    3. Сделайте, чтобы при клике содержимое .product поменялось на:
    <div>Другой товар</div>
    <div>Другое описание</div>
    для этого вышеописанную разметку пишите в виде строки в innerHTML.
    -->


</body> */

'use strict';
let product = document.querySelector('.product');
product.addEventListener('click', function(event) {
    event.target.innerHTML = "<div>Другой товар</div><div>Другое описание</div>";
});

/* 33 <body>
    
    <ul>
        <li>
            <button>Кнопка</button>
        </li>
        <li>
            <button>Кнопка</button>
        </li>
        <li>
            <button>Кнопка</button>
        </li>
    </ul>

    <!-- Задание. Назначьте обработчик клика по ul и при клике выводите в консоль
    элемент, на котором произошел клик, с помощью event.target, где event - это
    объект события, передаваемый в функцию-обработчик клика. -->
 */
  
    'use strict';
    let uli = document.querySelector('uli');
    uli.addEventListener('click', function(event) {
        console.log(event.target);
    });

    /* 34 <body>
    <button style="font-size: 30px;">Кнопка</button>
    <textarea style="background: green;"></textarea>

    <!-- Задание. Сделайте с помощью javascript размер шрифта в кнопке 30px,
    а в textarea сделайте зеленый фон. Используйте свойство style у каждого
    из элементов. -->
 */

    'use strict';
    let battons = document.querySelector('battons');
    battons.style.fontSize = '30px';
    let textareal = document.querySelector('textareal');
    textareal.style.background = 'green';