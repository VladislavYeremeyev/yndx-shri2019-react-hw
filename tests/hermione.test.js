const assert = require("assert");

describe("Наличие элементов", () => {
  it("Открывается страница c заголовком", function() {
    return this.browser
      .url("/")
      .assertView("page-opened", "#root")
      .getTitle()
      .then((title) => assert.strictEqual(title, "Yandex Arcanum"));
  });

  it("Отображается список файлов в корне", function() {
    return this.browser
      .url("/")
      .assertView("file-list", ".Grid.Grid-Parent")
      .isExisting(".Grid.Grid-Parent")
      .then((exists) => assert.ok(exists, "Таблица с файлами не отображена"));
  });

  it("Отображается список файлов при переходе по ссылке в адресной строке", function() {
    return this.browser
      .url("/tree/folder-with-pics/keke/kek2")
      .assertView("file-list-after-navigation", ".Grid.Grid-Parent")
      .isExisting(".Grid.Grid-Parent")
      .then((exists) => assert.ok(exists, "Таблица с файлами не отображена"));
  });

  it("Отображается список файлов при переходе по ссылке в списке директории", function() {
    return this.browser
      .url("/")
			.click(".Grid-Row .Grid-FileName")
      .assertView("file-list-after-link-click", ".Grid.Grid-Parent")
      .isExisting(".Grid.Grid-Parent")
      .then((exists) => assert.ok(exists, "Таблица с файлами не отображена"));
  });

  it("Отображается содержимое файла при переходе по ссылке в адресной строке", function() {
    return this.browser
			.url("/blob/README.md")
      .assertView("file-data-after-navigation", ".CodeContainer")
      .isExisting(".CodeContainer-CodeBlockContainer")
      .then((exists) => assert.ok(exists, "Содержимое файла не отображено"));
  });

  it("Отображается содержимое файла при переходе по ссылке в списке директории", function() {
    return this.browser
      .url("/")
			.click(".Grid-Row:last-child .Grid-FileName")
			.pause(500)
      .assertView("file-data-after-link-click", ".CodeContainer")
      .isExisting(".CodeContainer-CodeBlockContainer")
      .then((exists) => assert.ok(exists, "Содержимое файла не отображено"));
  });

  it('Отображаются "хлебные крошки"', function() {
    return this.browser
      .url("/")
      .assertView("breadcrumbs-link", ".Breadcrumbs")
      .isExisting(".Breadcrumbs")
      .then((exists) => assert.ok(exists, '"Хлебные крошки" не отображены'));
  });

  it('Отображаются "хлебные крошки" при переходе по ссылке внутрь директории', function() {
    return this.browser
      .url("/tree/folder-with-pics/keke/kek2")
      .assertView("breadcrumbs-after-directory-click", ".Breadcrumbs")
      .isExisting(".Breadcrumbs")
      .then((exists) =>
        assert.ok(exists, 'Просмотр "хлебных крошек" не появился')
      );
	});
	
	it('Есть переход при клике на ссылку внутри "Хлебных крошек"', function() {
    return this.browser
      .url('/tree/folder-with-pics/keke')
      .assertView('breadcrumbs-item-click', '.Breadcrumbs')
			.click('.Grid-Row .Grid-FileName')
			.click('.Grid-Row .Grid-FileName')
			.click('.Breadcrumbs-Item:nth-child(2) .Link')
			.assertView('bread-items-back-click', '.Breadcrumbs')
			.isExisting(".Breadcrumbs")
      .then((exists) =>
        assert.ok(exists, 'Просмотр хлебных крошек не появился')
      );
	});

	it('нет перехода при клике на корневую ссылку в "Хлебных крошках"', function() {
    return this.browser
      .url('/')
      .assertView('breadcrumbs-root-click', '.Breadcrumbs')
      .click('.Breadcrumbs-Item .Link')
			.assertView('bread-root-click', '.Breadcrumbs')
			.isExisting(".Breadcrumbs")
      .then((exists) =>
        assert.ok(exists, 'Просмотр хлебных крошек не появился')
      );
	});
	
	it('Открывается Dropdown-меню в выборе репозитория', function() {
    return this.browser
      .url('/')
      .assertView('repo-dropdown-click', '.Layout')
			.click('.DropdownBlock')
			.pause(2000)
			.assertView('repo-dropdown-opened', '.Layout')
			.isExisting(".DropdownBlock-Menu ")
      .then((exists) =>
        assert.ok(exists, 'Dropdown не открылся')
      );
	});
	
	it('Корректный hover на dropdown элементе', function() {
    return this.browser
      .url('/')
      .assertView('repo-dropdown-click', '.Layout')
			.click('.DropdownBlock')
			.pause(2000)
			.moveToObject('.DropdownBlock-Menu .DropdownBlock-MenuItem')
			.assertView('repo-dropdown-hover', '.Layout')
			.isExisting(".DropdownBlock-Menu")
      .then((exists) =>
        assert.ok(exists, 'Dropdown не открылся')
      );
	});

	it('При выборе того же репозитория в Dropdown в корне не осуществляется переход в новый репозиторий', function() {
    return this.browser
			.url('/')
			.assertView('repo-dropdown-clicked', '.Layout')
			.click('.DropdownBlock')
			.pause(1500)
			.click('.DropdownBlock-MenuItem')
			.pause(500)
			.assertView('repo-dropdown-clicked2', '.Layout')
			.isExisting(".Grid.Grid-Parent")
      .then((exists) =>
        assert.ok(exists, 'Список директорий не появился')
      );
	});

	it('При выборе другого репозитория в Dropdown в корне осуществляется переход в новый репозиторий', function() {
    return this.browser
      .url('/')
			.click('.DropdownBlock')
			.pause(1500)
			.click('.DropdownBlock-MenuItem:last-child')
			.pause(500)
			.assertView('repo-dropdown-clicked3', '.Layout')
			.isExisting(".Grid.Grid-Parent")
      .then((exists) =>
        assert.ok(exists, 'Список директорий не появился')
      );
	});
});
