---
id: dictionary-operations
title: Словарь
sidebar_label: Методы Словаря
---
## .keys() 
Метод `.keys()` возвращает ключи словаря в виде листа строковых элементов
>dict.keys()

Например у нас есть словарь obj который содержит в себе {one: 1, two: 2, three: 3}
```
keys = obj.keys() -- вернет лист ["one", "two", "three"]
``` 

## .values()
Метод `.values()` возвращает значения словаря в виде листа.
>dict.values()

```
-- obj содержит {one: 1, two: 2, three: 3}

keys = obj.values() -- вернет лист ["1", "2", "3"]
``` 

## .get()
Метод `.get()` возвращает значение по ключу.
>dict.get(key)

`key` - ключ.
```
-- obj содержит {one: 1, two: 2, three: 3}

two = obj.get(two) -- вернет значение 2
``` 
## .remove()
Метод `.remove()` удаляет элемент из словаря по ключу
>dict.remove(key)

`key` - ключ.
```
-- obj содержит {one: 1, two: 2, three: 3}

obj.remove(two)

-- после удаления в словаре obj будет {one: 1, three: 3}
``` 

## .update()
Метод `.update()` обновляет элемент по ключу.
>dict.update(key, val)

`key` - ключ.  
`val` - значение
```
-- obj содержит {one: 1, two: 2, three: 3}

obj.update(two, 222)

-- после обновления в словаре obj будет {one: 1, two: 222, three: 3}
``` 

## .add()
Метод `.add()` добавляет элемент по ключу.
>dict.add(key, val)

`key` - ключ.  
`val` - значение
```
-- obj содержит {one: 1, two: 2, three: 3}

obj.add(ten, 10)

-- после добавления в словаре obj будет {one: 1, two: 2, three: 3, ten: 10}
```

## .clear()
Метод `.clear()` очищает словарь.
>dict.clear()
```
-- obj содержит {one: 1, two: 2, three: 3}

obj.clear()

-- после этой операции словарь будет пустой {}
``` 

## .len()
Метод `.len()` возвращает кол-во элементов в словаре.
>dict.len()
```
-- obj содержит {one: 1, two: 2, three: 3}

len = obj.len() вернет 3
``` 

## .containsKey()
Метод `.containsKey()` проверяет нахождение ключа в словаре. Возвращает `True` или `False`
>dict.containsKey(key)

`key` - ключ.  
```
-- obj содержит {one: 1, two: 2, three: 3}

prop = obj.containsKey(seven) вернет False
``` 