<!-- Через 10 секунд после появления сообщения об отправке или ошибке — отправляемся на сайт Кода :) -->
 <meta http-equiv='refresh' content='2; url=https://lomonosovites.ru/'>
<meta charset="UTF-8" />
<!-- Начался блок PHP -->
<?php
// Получаем значения переменных из пришедших данных

$data = $_POST['data'];




// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
$mes = str_replace('_', "\n", $data);
// Пытаемся отправить письмо по заданному адресу
// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $phone на свой адрес электронной почты
$adminmail = "dimandn39@gmail.com, andreydn39@gmail.com, kashapovrail200000@mail.ru";
$postmail = "info@lomonosovites.ru";
$send = mail($adminmail,  "Заявка с сайта", $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$postmail");
// Если отправка прошла успешно — так и пишем
if ($send == 'true') {echo '<html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="mail.css" />
      <style type="text/css">
        * {
          box-sizing: border-box;
          padding: 0px !important;
          margin: 0px !important;
          overflow: hidden;
        }
        .resp {
          padding: 0px !important;
  
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100svw !important;
          height: 100svh !important;
        }
        .img-send {
          min-width: 85svw;
          max-width: 90svw;
        }
        @media (min-width: 900px) {
          .img-send {
            min-width: 25svw;
            max-width: 35svw;
          }
        }
      </style>
    </head>
  
    <body>
      <div class="resp">
        <div class="bg-gray-200">
          <img class="img-send" src="https://lomonosovites.ru/img/send.webp" />
        </div>
      </div>
    </body>
  </html>
    ';}
// Если письмо не ушло — выводим сообщение об ошибке
else {echo `<html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="mail.css" />
      <style type="text/css">
        * {
          box-sizing: border-box;
          padding: 0px !important;
          margin: 0px !important;
          overflow: hidden;
        }
        .resp {
          padding: 0px !important;
  
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100svw !important;
          height: 100svh !important;
        }
        .img-send {
          min-width: 85svw;
          max-width: 90svw;
        }
        @media (min-width: 900px) {
          .img-send {
            min-width: 25svw;
            max-width: 35svw;
          }
        }
      </style>
    </head>
  
    <body>
      <div class="resp">
        <div class="bg-gray-200">
          <img class="img-send" src="https://lomonosovites.ru/img/nosend.webp" />
        </div>
      </div>
    </body>
  </html>`;}
?>
