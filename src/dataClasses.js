import socks from './assets/socks.jpg';
import bottle from './assets/bottle.jpg';
import sweatshirt from './assets/sweatshirt.jpg';
import sweatshirt_s from './assets/sweatshirt_s.jpg';
import sweatshirt_m from './assets/sweatshirt_m.jpg';
import voucher from './assets/voucher.jpg';
import studio from './assets/studio.jpg';
import personal from './assets/personal.jpg';
import abonement8 from './assets/abonement8.jpg';
import abonement16 from './assets/abonement16.jpg';
import abonement20 from './assets/abonement20.jpg';
import abonement30 from './assets/abonement30.jpg';
import costume from './assets/costume.jpg';
import bag from './assets/bag.jpg';



const dataClasses = [
{
    id: 1,
    price: 0,
    img: personal,
    name: 'Пробное занятие',
    description: 'По любому направлению',
    category: 'РАЗОВЫЕ ЗАНЯТИЯ'
},
{
    id: 2,
    price: 10,
    img: personal,
    name: 'Разовое занятие',
    description: 'По любому направлению',
    category: 'РАЗОВЫЕ ЗАНЯТИЯ'
},
{
    id: 3,
    price: 25,
    img: personal,
    name: 'Индивидуальное занятие',
    description: 'По любому направлению',
    category: 'РАЗОВЫЕ ЗАНЯТИЯ'
},
{
    id: 4,
    price: 50,
    img: abonement8,
    name: 'Абонемент на 8 занятий',
    description: 'Абонементы действуют на все групповые занятия, кроме спец групп. Срок действия абонемента: календарный месяц.',
    category: 'АБОНЕМЕНТЫ'
},
{
    id: 5,
    price: 75,
    img: abonement16,
    name: 'Абонемент на 16 занятий',
    description: 'Абонементы действуют на все групповые занятия, кроме спец групп. Срок действия абонемента: календарный месяц.',
    category: 'АБОНЕМЕНТЫ'
},
{
    id: 6,
    price: 90,
    img: abonement20,
    name: 'Абонемент на 20 занятий',
    description: 'Абонементы действуют на все групповые занятия, кроме спец групп. Срок действия абонемента: календарный месяц.',
    category: 'АБОНЕМЕНТЫ'
},
{
    id: 7,
    price: 105,
    img: abonement30,
    name: 'Абонемент на 30 занятий',
    description: 'Абонементы действуют на все групповые занятия, кроме спец групп. Срок действия абонемента: календарный месяц.',
    category: 'АБОНЕМЕНТЫ'
},
{
    id: 8,
    price: 25,
    img: studio,
    name: 'Аренда зала',
    description: 'Стоимость указана за 1 час аренды. Наличие свободного зала посмотреть в расписании.',
    category: 'АРЕНДА'
},
{
    id: 9,
    price: 15,
    img: costume,
    name: 'Аренда костюма',
    description: 'Все костюмы представлены в нашей студии. Стоимость указана за 1 день аренды',
    category: 'АРЕНДА'
},
{
    id: 10,
    price: 50,
    img: voucher,
    name: 'Подарочный сертификат',
    description: 'Номинал 50 евро',
    category: 'СЕРТИФИКАТЫ'
},
{
    id: 11,
    price: 75,
    img: voucher,
    name: 'Подарочный сертификат',
    description: 'Номинал 75 евро',
    category: 'СЕРТИФИКАТЫ'
},
{
    id: 12,
    price: 30,
    img: sweatshirt,
    name: 'Мерч с логотипом студии',
    description: 'Размер XS',
    category: 'ПРОЧЕЕ'
},
{
    id: 13,
    price: 30,
    img: sweatshirt_s,
    name: 'Мерч с логотипом студии',
    description: 'Размер S',
    category: 'ПРОЧЕЕ'
},
{
    id: 14,
    price: 30,
    img: sweatshirt_m,
    name: 'Мерч с логотипом студии',
    description: 'Размер M',
    category: 'ПРОЧЕЕ'
},
{
    id: 15,
    price: 10,
    img: bottle,
    name: 'Бутылка для воды ',
    description: 'С логотипом студии, 500 мл.',
    category: 'ПРОЧЕЕ'
},
{
    id: 16,
    price: 3,
    img: socks,
    name: 'Носки',
    description: 'Специальные носки для тренировок.',
    category: 'ПРОЧЕЕ'
},

{
    id: 17,
    price: 5,
    img: bag,
    name: 'Сумка шопер',
    description: 'Хлопковая суммка с логотипом студии',
    category: 'ПРОЧЕЕ'
}

]

export default dataClasses;