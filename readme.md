# Данный репозиторий является сопровождающим к вебинарам по Typescript

Автор вебинара: [Антон Морев](https://amorev.ru)

Для удобства навигации по данному репозиторию рекомендуется идти по истории коммитов и смотреть readme.md каждого коммита.

## Подготовка окружения

### NodeJS и NPM

Для начала необходимо, чтобы у вас в системе были установлены [NodeJS](https://nodejs.org/en/download/)
Для проверки введите следующие команды

```bash
$ node -v                       
v12.14.1                        
$ npm -v                        
6.14.5                          
```
 
Если в консоли увидели ошибки, то установите NodeJS

### Установка typescript

Далее необходимо установить зависимости

```bash
npm i 
```

### Запуск в режиме отслеживания изменений

Для запуска в режиме разработки достаточно запустить команду

```bash
npm run dev
```

При изменении кода проект автоматически перезапустится

### Что происходит в данном примере

На этом этапе мы начинаем знакомиться с дженериками. Старый код запуска сервера мы перенесли в index-old (он нам еще понадобится). 

Сам репозиторий реализован в файле src/lib/repository.ts

`export class Repository<T> {`

Как раз <T> отвечает за создание "условного типа". Другими словами - мы можем подставлять в репозиторий любой тип, который потом будет требоваться во время использования данного репозитория.

В текущем примере мы сделали тип Book (файл src/models/book.ts) с обычными полями.

Внутри файла src/index.ts показано как можно работать с этим репозиторием. Что примечательно - благодаря дженерикам мы можем использовать любой тип, интерфейс или класс для наполнения репозитория, что делает этот код типизированным, но типонезависимым одновременно.
