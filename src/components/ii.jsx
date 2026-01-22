const arrCourse = {
  1: {
    19250: "Курс 3 месяца 1 предмет 14 занятий",
    36600: "Курс 3 месяца 2 предмета 28 занятий",
    51900: "Курс 3 месяца 3 предмета 42 занятий",
    65450: "Курс 3 месяца 4 предмета 56 занятий",
  },
  2: {
    36600: "Курс 6 месяцев 1 предмет 28 занятий",
    65450: "Курс 6 месяцев 2 предмета 56 занятий",
    95860: "Курс 6 месяцев 3 предмета 84 занятия",
    126280: "Курс 6 месяцев 4 предмета 112 занятий",
  },
  3: {
    51900: "Курс 9 месяцев 1 предмет 42 занятия",
    95860: "Курс 9 месяцев 2 предмета 84 занятия",
    140300: "Курс 9 месяцев 3 предмета 126 занятий",
    184800: "Курс 9 месяцев 4 предмета 168 занятий",
  },
  4: {
    24400: "Курс 2 месяца 1 предмет 18 занятий",
    43700: "Курс 2 месяца 2 предмета 36 занятий",
    63900: "Курс 2 месяца 3 предмета 54 занятия",
    79900: "Курс 2 месяца 4 предмета 72 занятия",
  },
};
let month = 1;
let price = 19250;
console.log(arrCourse[month][price]);

// function PayFunc() {
//   let externalIdInMySystem = `${new Date().getUTCFullYear()}.${new Date().getUTCMonth()}.${new Date().getUTCDate()};${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`;
//   console.log(externalIdInMySystem);
//   console.log(currentPrice);

//   console.log(arrCourse[month][currentPrice]);
//   var payments = new cp.CloudPayments({
//     email: "",
//     cryptogramMode: false,
//     yandexPaySupport: false,
//     applePaySupport: false,
//     googlePaySupport: false,
//     masterPassSupport: false,
//     tinkoffInstallmentSupport: false,
//   });

//   payments.oncomplete = (result) => {
//     console.log("result", result);
//   };

//   payments
//     .pay("charge", {
//       // options
//       publicId: "test_api_00000000000000000000002",
//       paymentSchema: "Single",
//       description: `Курсы lomonosovites.ru${arrCourse[month][currentPrice]} Клиент ${PeopleName} ${PeoplePhone}`,
//       restrictedPaymentMethods: [
//         // список отключенных для данной оплаты методов
//       ],
//       externalId: externalIdInMySystem,

//       amount: currentPrice,
//       currency: "RUB",

//       receiptEmail: "a.d.nagornyy@gmail.com",
//       emailBehavior: "Required",
//       skin: "minimal",
//       userInfo: {
//         customField: {
//           name: "Курс",
//           value: "arrCourse[month][currentPrice]",
//         },
//         firstName: PeopleName,
//         phone: PeoplePhone,
//       },
//       successRedirectUrl: "https://lomonosovites.ru/successful-payment>",
//       failRedirectUrl: "https://lomonosovites.ru/failed-payment",

//       receipt: {
//         items: [
//           //товарные позиции
//           {
//             label: `Курс ${arrCourse[month][currentPrice]}`, //наименование товара
//             price: currentPrice, //цена
//             quantity: 1.0, //количество
//             amount: currentPrice, //сумма
//             vat: 0, //ставка НДС
//             method: 0, // тег-1214 признак способа расчета - признак способа расчета
//             object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
//             measurementUnit: "шт", //единица измерения
//           },
//         ],
//       },
//       cryptogramMode: false,
//     })
//     .then((result) => {
//       // Объект типа WidgetResult
//       console.log("result", result);
//     });
// }
