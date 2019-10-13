# Домашнее задание ШРИ 2019 React

## Описание

React-приложение, позволяющее взаимодейстовать с данными Git-репозиториев.
>Node version: 12.7.0

В рамках ДЗ было создано React-Redux приложение с функциями:

* просмотр списка репозиториев и выбор репозитория
* просмотр списка файлов в текущем репозитории
* просмотр содержимого конкретного текстового файла
* навигация по файловой структуре репозитория — по «хлебным крошкам» и выбору строк в таблице

Полезно:

* Redux Store, Actions, Reducers находятся в папке `src/Store`. Часть компонентов подключены к Store через `connect` (Например, [Grid](https://github.com/VladislavYeremeyev/yndx-shri2019-react-hw/blob/master/src/components/Grid/Grid.jsx#L179)). Также решил опробовать React-хуки и использовал [useDispatch, useSelector](https://github.com/VladislavYeremeyev/yndx-shri2019-react-hw/blob/master/src/App.js#L18) из `react-redux`.
* Компоненты находятся в `src/components`. Каждый компонент хранится в отдельной папке.
* Для codespliting использовал [Loadable-components](https://github.com/smooth-code/loadable-components). Для этой задачи выбрал именно эту библиотеку, потому что она проста в использовании, а также по сравнению с `React.lazy` имеет ряд [преимуществ](https://www.smooth-code.com/open-source/loadable-components/docs/loadable-vs-react-lazy/#comparison-table), например, поддержку SSR, которая в будущем может быть внедрена в приложение.
* Вспомогательные скрипты:
  * `npm start` - запуск HMR Dev сервера
  * `npm run build` - запуск сборки бандла
  * `npm run lint-css` - линтинг и автофиксинг css-файлов в `src/`
  * `npm run lint-js` - линтинг js и jsx файлов с помощью `ESLint` в `src/`
  * `npm run prettier-js` - Форматирование и авто-фикс js и jsx файлов с помощью `Prettier` в `src/,
  * `npm run hermione` - запуск Hermione-тестов
  * `serve -s build` - запуск сервера с собранной статикой

Использовано:

* [Create React App](https://github.com/facebook/create-react-app)
* [Redux, React-Redux](https://github.com/reduxjs/react-redux)
* [React Hooks](https://reactjs.org/docs/hooks-overview.html#state-hook)
* [Loadable-components](https://github.com/smooth-code/loadable-components)
* [Axios](https://github.com/axios/axios)
* [@bem-react/classname](https://github.com/bem/bem-react/tree/master/packages/classname)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Stylelint](https://github.com/stylelint/stylelint)

Ограничения реализации:

* Компонент выбора ветки не реализовывался в рамках данной задачи. Компонент отображается в статике и вся работа с репозиториями идет по умолчанию в ветке `master`;
* Данные о последнем коммите, авторе, сообщении и дате подменены на статичные заглушки;
* Отсутствие подсветки кода в просмотре содержимого файла и корректный рендер markdown-содержимого файлов;

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

Задание выполнено в папке `tests/`.

В рамках ДЗ были разработаны сценарии интеграционного тестирования приложения:

* для работы с содержимым репозитория (просмотр и различные переходы)
* для работы с тестовыми файлами (просмотр и различные переходы)
* для навигации по репозиторию при помощи компонента "хлебные крошки"
* для просмотра списка репозиториев в выпадающем списке репозиториев.

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

## Миграция на TypeScript

Перевёл JS файлы на TypeScript.
Запуск почти аналогичен приведенному выше:

```bash
mkdir "react_arcanum"
cd react_arcanum
git clone -b ts-migration git@github.com:VladislavYeremeyev/yndx-shri2019-nodejs-hw.git backend # Скачиваем репозиторий с серверной частью
git clone -b ts-migration git@github.com:VladislavYeremeyev/yndx-shri2019-react-hw.git frontend # Скачиваем этот репозиторий с клиентской частью React
npm --prefix ./backend i # Устанавливаем зависимости серверной части
cd backend
npm run start-ts <absolute path to repos folder> # Запускаем сервер, в параметр необходимо передать абсолютный путь до папки с репозиториями
# Подробнее про работу сервера описано здесь: https://github.com/VladislavYeremeyev/yndx-shri2019-nodejs-hw

# В новом окне терминала из общей директории react_arcanum запускаем клиентскую часть
cd frontend # Переходим в директорию с клиентской частью
npm i # Устанавливаем зависимости
npm run build # Сборка проекта
npm start # Запуск dev-сервера с HMR
```
