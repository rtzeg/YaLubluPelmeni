let d = document
let first_btn = d.querySelector('.first_btn')
let price_btn = d.querySelector('.price_btn')
let price = d.querySelector('.price')
let price_inp = d.querySelector('#price_input')
let price_cross = d.querySelector('.price_cross')
let price_list = d.querySelector('#price_list')
let katalok = d.querySelector('#second_to')
let leader = d.querySelector('.leader')
let a = d.querySelectorAll('a')
let leader_top = leader.offsetTop
let contact = d.querySelector('.contact')
let contact_of = d.querySelector('#contact_of')
let contact_cross = d.querySelector('.contact_cross')
let load = d.querySelector('.load')

d.body.onload = () => {
    load.style.display = 'none'
    d.body.style.overflow = "visible"
}
// Модалка price
first_btn.onclick = () => {
    price.classList.add('scale')
}
price_list.onclick = (event) => {
    event.preventDefault()
    price.classList.add('scale')
}
price_cross.onclick = () => {
    price.classList.remove('scale')
}
contact_of.onclick = (event) => {
    event.preventDefault()
    contact.classList.add('scale_cont')
}
contact_cross.onclick = () => {
    contact.classList.remove('scale_cont')
}
if (window.scrollY == leader.offsetTop) {
    price.classList.add('scale')
}

// KeyDown
d.body.addEventListener('keydown', (event) => {
    if(event.keyCode == 27) {
        price.classList.remove('scale')
        about_product.classList.remove('about_scale')
        burger_menu.classList.remove('burger_scale')
        contact.classList.remove('scale_cont')
        d.body.style.overflow = "visible"

    }
})

// input
price_btn.onclick = () => {
    price_inp.value = ""
    setTimeout(() => {
        price.classList.remove('scale')
        alert("Прайс лист установлен")
    }, 1000)
}

// якорь

let box_were_one = d.querySelector('.box_were_one')
let dostavka = d.querySelector('#four_head')
let lot_of = d.querySelector('#lot_of')
let box_were = box_were_one.offsetTop
let bought_of = d.querySelector('.bought')
let bought = bought_of.offsetTop
let about = d.querySelector('.about')
let about_top = about.offsetTop
let about_of = d.querySelector('#about_of')
let about_of2 = d.querySelector('.about_of')

a.onclick = (event) => {
    event.preventDefault()
}
katalok.onclick = (event) => {
    event.preventDefault()
    window.scrollTo({
        top: leader_top - 90,
        left: 0,
        behavior: "smooth",
      });
}
dostavka.onclick = (event) => {
    event.preventDefault()
    window.scrollTo({
        top: box_were - 110,
        left: 0,
        behavior: "smooth",
      });
}
lot_of.onclick = (event) => {
    event.preventDefault()
    window.scrollTo({
        top: bought - 100,
        left: 0,
        behavior: "smooth",
      });
}
about_of.onclick = (event) => {
    event.preventDefault()
    window.scrollTo({
        top: about_top - 200,
        left: 0,
        behavior: "smooth",
      });
}

// окно about
// let obj1 = {
//     title: 'Пельмени глубокой заморозки',
//     btn: 'Заказать',
//     code: 'СТО 0062757741-001-2009',
//     spans: {
//         spans1: 'мука пшеничные высший сорт, яйца куриные, вода питьевая, пшеничная клетчатка.',
//         spans2: 'мясо птицы мех. обвалки, белок соевый гидратированный, свинина, говядина, лук репчатый свежий, соль поваренная пищевая, чеснок свежий, перец черный молотый.',
//         spans3: 'белки – не менее 10,0г, жир – не более 20,0г , углеводы – не более 26,0г',
//         spans4: 'на 100 гр. – не более 319,0 ккал.',
//         spans5: 'замороженные пельмени варят в подсоленной воде (10 гр. соли на 1 литр воды), соотношение на одну часть пельменей четыре части воды. Продукт погружают в кипящую воду, после всплытия варят 6 мин, при варке помешивают',
//         spans6: '90 суток при t не выше -18С',
//         spans7: '800 гр., 5кг, 10кг'
//     }
// } 
// let obj2 = {
//     title: 'Хинкали глубокой заморозки',
//     btn: 'Заказать',
//     code: 'СТО 0112324243-101-3003',
//     spans: {
//         spans1: 'мука пшеничные высший сорт, яйца куриные, вода питьевая, пшеничная клетчатка.',
//         spans2: 'мясо птицы мех. обвалки, белок соевый гидратированный, свинина, говядина, лук репчатый свежий, соль поваренная пищевая, чеснок свежий, перец черный молотый.',
//         spans3: 'белки – не менее 20,0г, жир – не более 40,0г , углеводы – не более 33,0г',
//         spans4: 'на 100 гр. – не более 523,0 ккал.',
//         spans5: 'замороженные хинкали варят в подсоленной воде (15 гр. соли на 1 литр воды), соотношение на одну часть хинкали четыре части воды. Продукт погружают в кипящую воду, после всплытия варят 6 мин, при варке помешивают',
//         spans6: '90 суток при t не выше -18С',
//         spans7: '500 гр., 3кг, 7кг'
//     }
// }
// let obj3 = {
//     title: 'Манты глубокой заморозки',
//     btn: 'Заказать',
//     code: 'СТО 0024543356-004-4309',
//     spans: {
//         spans1: 'мука пшеничные высший сорт, яйца куриные, вода питьевая, пшеничная клетчатка.',
//         spans2: 'мясо птицы мех. обвалки, белок соевый гидратированный, свинина, говядина, лук репчатый свежий, соль поваренная пищевая, чеснок свежий, перец черный молотый.',
//         spans3: 'белки – не менее 23,0г, жир – не более 35,0г , углеводы – не более 23,0г',
//         spans4: 'на 125 гр. – не более 334,0 ккал.',
//         spans5: 'замороженные манты варят в подсоленной воде (13 гр. соли на 1 литр воды), соотношение на одну часть манты четыре части воды. Продукт погружают в кипящую воду, после всплытия варят 6 мин, при варке помешивают',
//         spans6: '90 суток при t не выше -18С',
//         spans7: '300 гр., 2кг, 4кг'
//     }
// }
// let obj4 = {
//     title: 'Самса глубокой заморозки',
//     btn: 'Заказать',
//     code: 'СТО 0062353845-013-2029',
//     spans: {
//         spans1: 'мука пшеничные высший сорт, яйца куриные, вода питьевая, пшеничная клетчатка.',
//         spans2: 'мясо птицы мех. обвалки, белок соевый гидратированный, свинина, говядина, лук репчатый свежий, соль поваренная пищевая, чеснок свежий, перец черный молотый.',
//         spans3: 'белки – не менее 10,0г, жир – не более 20,0г , углеводы – не более 26,0г',
//         spans4: 'на 100 гр. – не более 319,0 ккал.',
//         spans5: 'замороженные самсы пекут в духовке(при 180 градусов 30мин), Продукт погружают в духовку и закрывают, после 30 мин берут',
//         spans6: '90 суток при t не выше -18С',
//         spans7: '900гр., 7кг, 12кг'
//     }
// }
// console.log(obj1.spans);

// let other1 = d.querySelector('.other1')
// let other1_2 = d.querySelector('.other1_2')
// let other1_3 = d.querySelector('.other1_3')
// let other1_4 = d.querySelector('.other1_4')
// let other1_5 = d.querySelector('.other1_5')

// let other2 = d.querySelector('.other2')
// let other2_2 = d.querySelector('.other2_2')
// let other2_3 = d.querySelector('.other2_3')
// let other2_4 = d.querySelector('.other2_4')
// let other2_5 = d.querySelector('.other2_5')

// let other3 = d.querySelector('.other3')
// let other3_2 = d.querySelector('.other3_2')
// let other3_3 = d.querySelector('.other3_3')
// let other3_4 = d.querySelector('.other3_4')
// let other3_5 = d.querySelector('.other3_5')

// let other4 = d.querySelector('.other4')
// let other4_2 = d.querySelector('.other4_2')
// let other4_3 = d.querySelector('.other4_3')
// let other4_4 = d.querySelector('.other4_4')


// let about_product = d.querySelector('.about_product')
// let product_img = d.querySelector('.product_img')
// let product_title = d.querySelector('.product_title')
// let product_btn = d.querySelector('.product_btn')
// let product_code = d.querySelector('.product_code')
// let product_cross = d.querySelector('.product_cross')


// let spans1 = d.querySelector('.spans1')
// let spans2 = d.querySelector('.spans2')
// let spans3 = d.querySelector('.spans3')
// let spans4 = d.querySelector('.spans4')
// let spans5 = d.querySelector('.spans5')
// let spans6 = d.querySelector('.spans6')
// let spans7 = d.querySelector('.spans7')

// // при клике
// product_cross.onclick = () => {
//     about_product.classList.remove('about_scale')
//     d.body.style.overflow = "visible"
// }
// function ob (a) {
//     about_product.classList.add('about_scale')
//     product_title.textContent = a.title
//     product_btn.textContent = a.btn
//     product_code.textContent = a.code

//     spans1.textContent = a.spans.spans1
//     spans2.textContent = a.spans.spans2
//     spans3.textContent = a.spans.spans3
//     spans4.textContent = a.spans.spans4
//     spans5.textContent = a.spans.spans5
//     spans6.textContent = a.spans.spans6
//     spans7.textContent = a.spans.spans7
//     d.body.style.overflow = "hidden"
// }
// // first
// function first (o) {
//     o.onclick = () => {
//         product_img.src = "../img/modal_product/pelmeni_prod.png";
//         ob(obj1);
//     }
    
// }
// first(other1);
// first(other2);
// first(other1_2);
// first(other1_3);
// first(other1_4);
// first(other1_5);

// // second
// function second (i) {
// i.onclick = () => {
//     product_img.src = "../img/modal_product/xinkali_prod.jpg";
//     ob(obj2);
// }
// }
// second(other2);
// second(other2_2);
// second(other2_3);
// second(other2_4);
// second(other2_5);

// // third
// function third (i) {
//     i.onclick = () => {
//         product_img.src = "../img/modal_product/manti_prod.png";
//         ob(obj3);
//     }
// }
// third(other3);
// third(other3_2);
// third(other3_3);
// third(other3_4);
// third(other3_5);

// four
// function four (i) {
//     i.onclick = () => {
//         product_img.src = "../img/modal_product/samsa_prod.jpg";
//         ob(obj4);
//     }
// }
// four(other4);
// four(other4_2);
// four(other4_3);
// four(other4_4);

// Фильтрация

// let sel_one = d.querySelector('.sel_one')
// let sel_two = d.querySelector('.sel_two')
// let sel_three = d.querySelector('.sel_three')
// let sel_four = d.querySelector('.sel_four')
// let sel_five = d.querySelector('.sel_five')

// let qwerty1 = d.querySelector('.qwerty1')
// let qwerty2 = d.querySelector('.qwerty2')
// let qwerty3 = d.querySelector('.qwerty3')
// let qwerty4 = d.querySelector('.qwerty4')

// sel_one.onclick = () => {
//     qwerty1.classList.remove('none-active')
//     qwerty2.classList.remove('none-active')
//     qwerty3.classList.remove('none-active')
//     qwerty4.classList.remove('none-active')
// }
// function qwerty (qw, b1, b2, b3, b4) {
//     qw.onclick = () => {
//     b1.classList.remove('none-active')
//     b2.classList.add('none-active')
//     b3.classList.add('none-active')
//     b4.classList.add('none-active')
//     }
// }
// qwerty(sel_two, qwerty1, qwerty2, qwerty3, qwerty4);
// qwerty(sel_three, qwerty2, qwerty1, qwerty3, qwerty4);
// qwerty(sel_four, qwerty3, qwerty2, qwerty1, qwerty4);
// qwerty(sel_five, qwerty4, qwerty2, qwerty3, qwerty1);

// burger

let burger = d.querySelector('.burger')
let burger_menu = d.querySelector('.burger_menu')
let cross = d.querySelector('.cross')
let price_list_sec = d.querySelector('.price_list')
let second_to = d.querySelector('.second_to')
let dostavka2 = d.querySelector('.four_head')
let lot_of2 = d.querySelector('.lot_of')
let contact_of2 = d.querySelector('.contact_of')

burger.onclick = () => {
    burger_menu.classList.add('burger_scale')
    d.body.style.overflow = "hidden"
}
cross.onclick = () => {
    burger_menu.classList.remove('burger_scale')
    d.body.style.overflow = "visible"
}
price_list_sec.onclick = (event) => {
    event.preventDefault()
    burger_menu.classList.remove('burger_scale')
    price.classList.add('scale')
    d.body.style.overflow = "visible"
}
contact_of.onclick = (event) => {
    event.preventDefault()
    burger_menu.classList.remove('burger_scale')
    contact.classList.add('scale_cont')
}

second_to.onclick = () => {
    event.preventDefault()
    burger_menu.classList.remove('burger_scale')
    d.body.style.overflow = "visible"
    window.scrollTo({
        top: leader_top - 90,
        left: 0,
        behavior: "smooth",
      });
}
dostavka2.onclick = (event) => {
    event.preventDefault()
    burger_menu.classList.remove('burger_scale')
    d.body.style.overflow = "visible"
    window.scrollTo({
        top: box_were - 80,
        left: 0,
        behavior: "smooth",
      });
}
lot_of2.onclick = (event) => {
    event.preventDefault()
    burger_menu.classList.remove('burger_scale')
    d.body.style.overflow = "visible"
    window.scrollTo({
        top: bought - 60,
        left: 0,
        behavior: "smooth",
      });
}
about_of2.onclick = (event) => {
    event.preventDefault()
    burger_menu.classList.remove('burger_scale')
    d.body.style.overflow = "visible"
    window.scrollTo({
        top: about_top + 50,
        left: 0,
        behavior: "smooth",
      });
}

// слайдер

// new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     slidesPerView: 'auto',
//       spaceBetween: 30,
//       rewind: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       keyboard: {
//         enabled: true,
//       },
  
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });
// swiper.addEventListener("keydown", function(e) {
//   if (e.key == 38) {
//     swiper.slidePrev();
//   }
//   if (e.key == 40) {
//     swiper.slideNext();
//   }
// });

// another

let other_cont = d.querySelector('.other_container')
let photo;
let btn_other = d.querySelector('.btn')


fetch("https://jsonplaceholder.typicode.com/photos?json")
        .then(res => res.json())
        .then(res => {
            console.log(res);
                for (let index = 0; index < 9; index++) {
                    photo = d.createElement('img')
                    photo.src = res[index].url
                    photo.classList.add('photo')
                    other_cont.append(photo)
                    window.addEventListener("resize", function () {
                            if (window.innerWidth <= 450) {
                                photo.src = res[index].thumbnailUrl
                            }
                            else if (window.innerWidth >= 450) {
                                photo.src = res[index].url
                            }
                     })
                    let itter = 6;
                    btn_other.onclick = () => {
                        for (let index = 0; index < 3; index++) {
                        itter++
                    photo = d.createElement('img')
                    photo.src = res[itter].url
                    photo.classList.add('photo')
                    other_cont.append(photo)
                        }
                        
                    }
            
                }
                
                
        });
        
            