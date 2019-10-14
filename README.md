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

В рамках домашнего задания клиентский и серверный код были переведены на TypeScript.

### Запуск TS

Запуск почти аналогичен приведенному выше:

```bash
mkdir "react_arcanum"
cd react_arcanum
git clone -b ts-migration git@github.com:VladislavYeremeyev/yndx-shri2019-nodejs-hw.git backend # Скачиваем репозиторий с серверной частью
git clone -b ts-migration git@github.com:VladislavYeremeyev/yndx-shri2019-react-hw.git frontend # Скачиваем этот репозиторий с клиентской частью React
npm --prefix ./backend i # Устанавливаем зависимости серверной части
cd backend
npm run start-ts <absolute path to repos folder> # Запускаем сервер, в параметр необходимо передать абсолютный путь до папки с репозиториями
```

Подробнее про работу сервера описано [здесь](https://github.com/VladislavYeremeyev/yndx-shri2019-nodejs-hw/tree/ts-migration#%D0%BC%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BD%D0%B0-typescript)

```bash
# В новом окне терминала из общей директории react_arcanum запускаем клиентскую часть
cd frontend # Переходим в директорию с клиентской частью
npm i # Устанавливаем зависимости
npm run build # Сборка проекта
npm start # Запуск dev-сервера с HMR
```

### NPM-скрипты

* `npm start` - запуск HMR Dev сервера
* `npm run build` - запуск сборки бандла
* `npm run lint-css` - линтинг и автофиксинг .`css`-файлов в `src/`
* `npm run lint-ts` - линтинг и автофиксинг `ts` и `.tsx`-файлов в `src/`
* `npm run prettier-ts` - Форматирование и авто-фикс `js` и `jsx` файлов с помощью `Prettier` в `src/,
* `npm run hermione` - запуск Hermione-тестов
* `serve -s build` - запуск сервера с собранной статикой

### Отчет

#### Трудоёмкость перевода проекта на TypeScript

При переводе проекта на TypeScript возникли некоторые сложности, связанные с отсутсвтием опыта использования React, Redux и TypeScript, довольно нетревиальной изначальной архитектурой, использованием React Hooks, Redux и т. д.

Не смог добиться красивого способа добавить тайпинги для компонентов `Grid` и `Blob`, так как они обёрнуты в Redux connect, а также поверх обёрнуты в самописынй HOC и loadable Components. В остальном особых сложностей не было, использован строгий режим `"strict": true` и `"noImplicitAny": true`, а также отсутствие `// @ts-ignore`.

#### Какие в процессе перевода были найдены ошибки

При переводе каких-то критичных багов не удалось найти, так как код тестировался. Скорее всего где-то всплыли лишние несколько несостыковок типов. Но улучшилось понимание работы со свзякой React + Redux.

#### Решили ли вы вливать данный PR, или предпочитаете работать с JavaScript

TypeScript позволяет предотвратить ряд ошибок заранее, а также делает код самодокументированным, более понятным и читаемым. К тому же имеется большая польза от AutoSuggestions при набора кода в IDE. Был проведен рефакторинг, а также было улучшено понимание работы React компонентов и приложения в целом.
Также при изменении кода теперь сразу можно отследить возможные ошибки и быстро их исправлять. Поэтому планируется и дальше использование TypeScript.
