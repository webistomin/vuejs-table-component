# vuejs-table-component
> Генерация таблицы из JSON с регистрацией и авторизацией через firebase

https://vuejs-table-component.firebaseapp.com

[![Build status][travis-image]][travis-url] [![dependencies Status](https://david-dm.org/webistomin/vuejs-table-component/status.svg)](https://david-dm.org/webistomin/vuejs-table-component) [![Dependency status][dependency-image]][dependency-url] 

Приложение рендерит страницу регистрации, авторизации и таблицы с данными. Неавторизованный пользователь не имеет доступа к таблице и его редиректит на станицу входа. Данные формы валидируются через встроенные возможно vuetify. Регистрацию и авторизацию решил сделать через firebase, а не через local storage. Данные таблицы подтягиваются через axios. Если данных много, то отображается пагинация. Реализована сортировка таблицы по колонкам

<img src='example.gif'>

## Установка

<table>
  <thead>
    <tr>
      <th>Команда</th>
      <th>Результат</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="30%"><code>npm install</code></td>
      <td>Установить зависимости</td>
    </tr>
    <tr>
      <td><code>npm run dev</code></td>
      <td>Запустить сборку, сервер и слежение за файлами</td>
    </tr>
     <tr>
      <td><code>npm run build</code></td>
      <td>Собрать проект для продакшена</td>
    </tr>
    <tr>
      <td><code>npm start ЗАДАЧА</code></td>
      <td>Запустить задачу с названием ЗАДАЧА (список задач в <code>package.json</code>)</td>
    </tr>
  </tbody>
</table>

Предполагается, что все команды вы выполняете в bash (для OSX и Linux это самый обычный встроенный терминал, для Windows это, к примеру, Git Bash). В Windows установку пакетов (npm i) нужно выполять в терминале, запущенном от имени администратора.

## Техническое задание 
<a href="https://github.com/vecherkin/frontend-test-tasks" target="_blank">Открыть репозиторий</a>

## Используемые технологии

<table>
  <thead>
    <tr>
      <th>Технология</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://ru.vuejs.org/index.html">Vue.js</a></td>
      <td>Основной фреймворк для разработки интерфейса приложения</td>
    </tr>
    <tr>
      <td><a href="https://vuex.vuejs.org/ru/">Vuex</a></td>
      <td>Центральное хранилище данных для всех компонентов приложения</td>
    </tr>
     <tr>
      <td><a href="https://router.vuejs.org/ru/">Vue Router</a></td>
      <td>Библиотека для маршрутизации</td>
    </tr>
     <tr>
      <td><a href="https://vuetifyjs.com/ru/">Vuetify</a></td>
      <td>Фреймворк, предоставляющий набор компнентов UI в Material Design</td>
    </tr>
    <tr>
      <td><a href="https://ru.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html">axios</a></td>
      <td>Доступ к API, основанный на промисах HTTP-клиента</td>
    </tr>
  </tbody>
</table>

## Поддержка браузерами

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png" alt="Yandex" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Yandex |
| --------- | --------- | --------- | --------- |--------- | --------- |
| IE11, Edge|Последние 2 версии|Последние 2 версии| 9+ |Последние 2 версии| Последние 2 версии |

[travis-image]: https://travis-ci.org/webistomin/vuejs-table-component.svg?branch=master
[travis-url]: https://travis-ci.org/webistomin/vuejs-table-component
[dependency-image]: https://david-dm.org/webistomin/vuejs-table-component/dev-status.svg
[dependency-url]: https://david-dm.org/webistomin/vuejs-table-component

