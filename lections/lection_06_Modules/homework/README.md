# Изучить материал
+ https://openweathermap.org/api
+ https://developer.mozilla.org/ru/docs/Web/API/Geolocation/getCurrentPosition

# Практика

# Лекция

1) Вывести разницу в % между курсом сегодня https://api.privatbank.ua/#p24/exchange и выбранным https://api.privatbank.ua/#p24/exchangeArchive
    Вывод оформить в виде таблицы.

2) Вывести в таблицу курс гривны к доллару за последние N дней.
    Указать процентную разницу по сравнению с предыдущим днем.
    
3) Создать 3 страницы приложения: /home.html, /events.html, /total.html

    Использовать сборку js файлов при помощи gulp. Подключать как bundle.
    
    На home странице отображается информация о текущей погоде в текущем городе (Используем Geolocation API, HTML5, и google maps).
    
    На странице events - отрендерить 3-5 типов событий, которые можно посетить. Данные про события мы получаем из mock.
    
    Каждое из событий имеет диапазон температуры при котором мы можем посетить событие.
    
    На странице total нам показывается те события, которые мы можем посетить с учетом температуры.
    
    * Дополнительно: Без перехода на страницы /home и /events определить события
    
