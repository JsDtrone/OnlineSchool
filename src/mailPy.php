<!-- Через 10 секунд после появления сообщения об отправке или ошибке — отправляемся на сайт Кода :) -->
<meta http-equiv='refresh' content='2; url=https://lomonosovites.ru/'>
<meta charset="UTF-8" />
<!-- Начался блок PHP -->
<?php
// Получаем значения переменных из пришедших данных
$name = !empty($_POST['name'])?$_POST['name']:false;
$phone = !empty($_POST['phone'])?$_POST['phone']:false;
$data1Id = !empty($_POST['data1Id'])?$_POST['data1Id']:false;
$cleanedName = str_replace(' ', '', $name);


function generateZsta() {
    date_default_timezone_set('UTC');
    $now = time();
    
    $avs = "wezsxrdctfrmbmhgvyhbujiksdfghoukjrhtdshewtrdegvhj";
    $hours = date('G', $now);       
    $year = date('Y', $now);        
    $day = date('j', $now);         
    $minutes = (int)date('i', $now); 
    $minutes_part = (int)floor($minutes / 10);
    $zas = $hours . $year . ($day + $minutes_part);
    $arr = [];

    for ($i = 0; $i < strlen($zas); $i++) {
        $char = $zas[$i];
        if (is_numeric($char)) {
            $index = (int)$char;
            
            if ($index >= 0 && $index < strlen($avs)) {
                $arr[] = $avs[$index];
            } else {
                
                $arr[] = $avs[0];
            }
        } else {
            
            $arr[] = $avs[0];
        }
    }
    
    return implode('', $arr);
}
$zf = !empty($_POST['zf'])?$_POST['zf']:false;
$zsta = generateZsta();

$lesson0 = &$_POST['lesson-0'];
$lesson1 = &$_POST['lesson-1'];
$lesson2 = &$_POST['lesson-2'];
$lesson3 = &$_POST['lesson-3'];
$lesson4 = &$_POST['lesson-4'];
$lesson5 = &$_POST['lesson-5'];
$lesson6 = &$_POST['lesson-6'];
$lesson7 = &$_POST['lesson-7'];
$lesson8 = &$_POST['lesson-8'];
$lesson9 = &$_POST['lesson-9'];
$lesson10 = &$_POST['lesson-10'];
$lesson11 = &$_POST['lesson-11'];



$radio1 = &$_POST['class-5'];
$radio2 = &$_POST['class-6'];
$radio3 = &$_POST['class-7'];
$radio4 = &$_POST['class-8'];
$radio5 = &$_POST['class-9'];
$radio6 = &$_POST['class-10'];
$radio7 = &$_POST['class-11'];



// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
$mes = "Имя: $name \nТелефон: $phone  \nПредметы: $lesson0 $lesson1 $lesson2 $lesson3 $lesson4 $lesson5 $lesson6 $lesson7 $lesson8 $lesson9 $lesson10 $lesson11";
// Пытаемся отправить письмо по заданному адресу
// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $phone на свой адрес электронной почты
// $adminmail = "dimandn39@gmail.com, andreydn39@gmail.com, kashapovrail200000@mail.ru";
// $postmail = "info@3dweb-studio.ru";

// $adminmail = "a.d.nagornyy9@mail.ru";
$adminmail = "a.d.nagornyy9@mail.ru, kashapovrail200000@mail.ru";
$postmail = "info@lomonosovites.ru";

if($name and $phone and $zsta and $zf and $zf===$zsta){
$send = mail($adminmail,  "Заявка с сайта", $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$postmail");
$full_url = "https://track.altercpa.red/e8a2b237d40e0d1e/pixel.gif?fname=" . $cleanedName . "&phone=" . $phone . "&data1=" . $data1Id ;

}else {
  echo '<html>
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
  </html>';
}
if ($send == 'true' and $name and $phone  and $zsta and $zf and $zf===$zsta) {echo '<html>
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
