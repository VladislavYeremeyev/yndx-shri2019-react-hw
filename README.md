# Домашнее задание ШРИ 2019 React

## Описание

React-приложение, позволяющее взаимодейстовать с данными Git-репозиториев.
>Node version: 12.7.0

## Запуск

```bash
mkdir "react_arcanum"
cd react_arcanum
git clone git@github.com:VladislavYeremeyev/yndx-shri2019-nodejs-hw.git backend # Скачиваем репозиторий с серверной частью
git clone git@github.com:VladislavYeremeyev/yndx-shri2019-react-hw.git frontend # Скачиваем этот репозиторий с клиентской частью React
npm --prefix ./backend i # Устанавливаем зависимости серверной части
node ./backend/app.js <absolute path to repos folder> # Запускаем сервер, в параметр необходимо передать абсолютный путь до папки с репозиториями
# Подробнее про работу сервера описано здесь: https://github.com/VladislavYeremeyev/yndx-shri2019-nodejs-hw

# В новом окне терминала из той же директории запускаем клиентскую часть
cd frontend # Переходим в директорию с клиентской частью
npm i # Устанавливаем зависимости
npm run build # Сборка проекта
npm start # Запуск dev-сервера с HMR
```

## Интеграционные тесты

Для запуска:

```bash
npm install selenium-standalone --global
selenium-standalone install
npm install
npm run build
serve -s build

# В отдельной вкладке терминала
selenium-standalone start

npm run hermione
```
