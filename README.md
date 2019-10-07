# Домашнее задание ШРИ 2019 React

## Описание

React-приложение, позволяющее взаимодейстовать с данными Git-репозиториев.

## Запуск

```bash
mkdir "react_arcanum"
cd react_arcanum
git clone https://github.com/VladislavYeremeyev/yndx-shri2019-nodejs-hw.git backend # Скачиваем репозиторий с серверной частью
git clone https://github.com/VladislavYeremeyev/yndx-shri2019-react-hw.git frontend # Скачиваем этот репозиторий с клиентской частью React
npm ./backend i # Устанавливаем зависимости серверной части
node ./backend/app.js <absolute path to repos folder> # Запускаем сервер, в параметр необходимо передать абсолютный путь до папки с репозиториями
# Подробнее про работу сервера описано здесь: https://github.com/VladislavYeremeyev/yndx-shri2019-nodejs-hw

cd frontend # Переходим в директорию с клиентской частью
npm i # Устанавливаем зависимости
npm run build # Сборка проекта
npm start # Запуск dev-сервера с HMR
```

## Интеграционные тесты
