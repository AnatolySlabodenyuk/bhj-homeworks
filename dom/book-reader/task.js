document.addEventListener('DOMContentLoaded', function () {
    const book = document.getElementById('book');
    const fontSizeLinks = document.querySelectorAll('.book__control_font-size .font-size');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Убираем активный класс у всех кнопок
            fontSizeLinks.forEach(btn => btn.classList.remove('font-size_active'));

            // Добавляем активный класс текущей кнопке
            this.classList.add('font-size_active');

            // Убираем оба класса размера с книги
            book.classList.remove('book_fs-small', 'book_fs-big');

            // Получаем значение data-size
            const size = this.dataset.size;

            // Применяем нужный класс в зависимости от размера
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
            // Если size пустой или отсутствует — оставляем базовый размер (без дополнительных классов)
        });
    });
});
