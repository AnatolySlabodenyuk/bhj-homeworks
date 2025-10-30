document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        // Переключение видимости списка по клику на значение
        valueElement.addEventListener('click', (event) => {
            event.stopPropagation();
            listElement.classList.toggle('dropdown__list_active');
        });

        // Обработка выбора пункта
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                const link = item.querySelector('.dropdown__link');
                const selectedText = link.textContent;

                valueElement.textContent = selectedText;
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });

    // Закрытие всех открытых списков при клике вне любого dropdown
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown__list_active').forEach(list => {
            list.classList.remove('dropdown__list_active');
        });
    });
});