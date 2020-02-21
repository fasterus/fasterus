---
id: date-and-time-operations
title: Операции даты и времени
sidebar_label: Операции даты и времени
---
## Дата операции 
### sys.DateUtc()
Получение текущей даты в режиме utc. 
Возможны опционально установлены аргументы. 
>sys.DateUtc(**year**,**month**,**day**) 

`year` - год в формате YYYY  
`month` - месяц в формате MM  
`day` - день в формате DD

>sys.DateUtc(**"date"**,**"format"**)

`"date"` - дата  
`"format"` - формат 
```
date_utc = sys.DateUtc()  -- cоздаёт объект Date с текущей датой в режиме utc. 
date_utc = sys.DateUtc(“12.03.2019”, “DD.MM.Y”)
date_utc = sys.DateUtc(2019,3,12)
```

### sys.Date()
Получение текущей локальной даты. Аналогично режиму utc может иметь 3 и один дополнительный аргумент.
>sys.Date(**year**,**month**,**day**) 

`year` - год в формате YYYY  
`month` - месяц в формате MM  
`day`- день в формате DD

>sys.Date(**"date"**,**"format"**)

`"date"` - дата  
`"format"` - формат 
```
date = sys.Date()                       -- cоздаёт объект Date с текущей датой
date = sys.Date(“12.03.2019”,“DD.MM.Y”) -- cоздаёт объект Date c датой 2019-03-12
date = sys.Date(2019,3,12)              
```

### .addDays()
Метод `addDays()` Добавляет кол-во дней к дате
>d.addDays(**days**)

`days` - число дней
```
data = sys.Date(2020,1,1) -- получение даты 2020-01-01
data.addDays(3)           -- после добавления дата станет 2020-01-04
```

### .addMonths()
Метод `addMonths()` добавляет кол-во месецев к дате.
>d.addMonths(**month**)

`month` - число месяцев.
```
data = sys.Date(2020,1,1) -- получение даты 2020-01-01
data.addMonths(3)         -- после добавления дата станет 2020-04-01
```

### .addYears()
Метод `addYear()` добавляет кол-во лет к дате.
>d.addYear(**year**)

`year` - число лет.
```
data = sys.Date(2020,1,1) -- получение даты 2020-01-01
data.addYear(3)           -- после добавления дата станет 2023-01-01
```

### .getDay()
Метод `getDay()` возвращает день из даты.
>d.getDay()
```
data = sys.Date(2020,1,1) -- получение даты 2020-01-01
data.getDay()             -- вернет 1
```

### .getMonth()
Метод `getMonth()` возвращает месяц из даты.
>d.getMonth()
```
data = sys.Date(2020,1,1) -- получение даты 2020-01-01
data.getMonth()           -- вернет 1
```

### .getYear()
Метод `getYear()` возвращает год из даты.
>d.getYear()
```
data = sys.Date(2020,1,1) -- получение даты 2020-01-01
data.getYear()            -- вернет 2020
```

### sys.Date.daysInMonth()
Метод `sys.Date.daysInMonth()` возвращает кол-ва дней в указанный год и месяц.
>sys.Date.daysInMonth(**year**,**month**)

`year` - год  
`month` - месяц
```
sys.Date.daysInMonth(2020,1) -- 31
```

### .toString()
Метод `toString()` преобразует дату в строковый тип.
>d.toString()
```
data = sys.Date(2020,1,1) 
data.toString() -- вернет "2020.01.01"
```

## Время операции 
### sys.TimeUtc()
Получение текущего времени в режиме utc.
Возможны опционально установлены аргументы.
>sys.TimeUtc(**hour**, **minute**, **second**) 

`hour` - час в формате HH  
`minute` - минуты в формате MM  
`second` - секунды в формате SS  

>sys.TimeUtc(**"time"**,**"format"**)

`"time"` - время  
`"format"` - формат  
```
sys.TimeUtc()
sys.TimeUtc(“11:45:20 pm”, ”H:mm:ss a”)
sys.TimeUtc(23,45,20)
```

### sys.Time()
Получение текущего локального времени. Аналогично режиму utc может иметь 3 и один дополнительный аргумент.
>sys.Time(**hour**, **minute**, **second**) 

`hour`- час в формате HH   
`minute` - минуты в формате MM  
`second` - секунды в формате SS  

>sys.Time(**"time"**,**"format"**)

`"time"` - время  
`"format"` - формат   
```
sys.Time()
sys.Time(“11:45:20 pm”,”H:mm:ss a”)
sys.Time(23,45,20)
```

### .addHours()
Метод `addHours()` Добавляет кол-во часов ко времени.
>t.addHours(**hour**)

`hour` - число часов
```
time = sys.Time(6, 15, 30) -- получение времени 6:15:30
time.addHours(2)           -- после добавления время станет 8:15:30
```

### .addMinutes()
Метод `addMinutes()` Добавляет кол-во минут ко времени.
>t.addMinutes(**minute**)

`minute` - число минут
```
time = sys.Time(6, 15, 30) -- получение времени 6:15:30
time.addMinutes(2)         -- после добавления время станет 6:17:30
```

### .addSeconds()
Метод `addSeconds()` Добавляет кол-во секунд ко времени.
>t.addSeconds(**second**)

`second` - число секунд
```
time = sys.Time(6, 15, 30) -- получение времени 6:15:30
time.addSeconds(20)        -- после добавления время станет 6:15:50
```

### .getHour()
Метод `getHour()` возвращает часы из времени.
>t.getHour()
```
time = sys.Time(6, 15, 30) -- получение времени 6:15:30
time.getHour()             -- вернет 6
```

### .getMinutes()
Метод `getMinutes()` возвращает минуты из времени.
>t.getMinutes()
```
time = sys.Time(6, 15, 30) -- получение времени 6:15:30
time.getMinutes()        -- вернет 15
```

### .getSeconds()
Метод `getSeconds()` возвращает секунды из времени.
>t.getSeconds()
```
time = sys.Time(6, 15, 30) -- получение времени 6:15:30
time.getSeconds()        -- вернет 30
```

### .setTime()
Установка нового времени для объекта ДатаВремя.
>t.setTime(**hour**, **minute**, **second**) 

`hour` - час   
`minute` - минуты   
`second` - секунды
```
time = sys.Time(6, 15, 30) -- получение времени 6:15:30
t.setTime(12, 34, 20)      -- новое время 12:34:20
```

### .toString()
Метод `toString()` преобразует время в строковый тип.
>t.toString()
```
time = sys.Time(6, 15, 30) 
time.toString() -- вернет "6:15:30"
```

## ДатаВремя операции 
Содержит все перечисленные методы из объектов Дата и Время.