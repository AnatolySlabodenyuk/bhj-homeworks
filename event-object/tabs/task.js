// Находим все контейнеры навигации по вкладкам
const tabNavigations = document.querySelectorAll('.tab__navigation');

tabNavigations.forEach(nav => {
    // Находим все вкладки внутри текущего контейнера
    const tabs = nav.querySelectorAll('.tab');
    // Находим соответствующий контейнер с содержимым (следующий за навигацией)
    const contentsContainer = nav.nextElementSibling;
    // Если следующий элемент — не контейнер с содержимым, пропускаем
    if (!contentsContainer || !contentsContainer.classList.contains('tab__contents')) {
        return;
    }
    const contents = contentsContainer.querySelectorAll('.tab__content');

    // Вешаем обработчик на каждую вкладку
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Убираем активный класс у всех вкладок в этом блоке
            tabs.forEach(t => t.classList.remove('tab_active'));
            // Добавляем активный класс текущей вкладке
            tab.classList.add('tab_active');

            // Находим индекс текущей вкладки
            const index = Array.from(tabs).indexOf(tab);

            // Убираем активный класс у всего содержимого
            contents.forEach(c => c.classList.remove('tab__content_active'));
            // Добавляем активный класс соответствующему содержимому
            if (contents[index]) {
                contents[index].classList.add('tab__content_active');
            }
        });
    });
});