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

На этом этапе мы создали простой декоратор для логгирования. 

```typescript
export function logger(category: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function loggerWrapper() {
            console.log(Date.now() / 1000 | 0, 'Log event in', category, 'body', arguments[0].body);
            originalMethod.apply(this, arguments);
        };
        return descriptor;
    };
};
```

Подключили его к нашему POST обработчику
```typescript
@logger('home')
public postHandler() {
```
И теперь при каждом обращении к этому методу мы получаем информацию в консоли
```
1593779698 Log event in home body { data: 'test' }
```
