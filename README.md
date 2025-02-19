# App

## Class Structure
1) readonly
2) public
3) contructor
4) public functions
5) private
6) private functions
 

wFood * — це кулінарний додаток, створений для того, щоб приготування їжі стало цікавим і простим. Додаток дозволяє керувати улюбленими рецептами, відкривати нові ідеї через випадковий вибір і створювати персоналізовані рецепти.

Модулі:  
1. recipe: Керує всіма даними про рецепти, включаючи створені користувачами рецепти, випадкові пропозиції та детальні профілі рецептів.
2. recipeingredient: Управляє інформацією про інгредієнти рецептів, включаючи кількість, назву та одиниці виміру.  
3. recipephase: Відповідає за поділ рецептів на етапи приготування, включаючи опис кожного кроку та час виконання.

Сторінки:  
1. My Recipes: Відображає збережені користувачем рецепти у впорядкованому та пошуковому форматі.  
2. Recipe Selection: Пропонує випадковий рецепт з інтерфейсом свайпу, щоб додати його до "My Recipes" або відхилити.  
3. Roulette: Пропонує випадковий вибір з рецептів, збережених у "My Recipes", щоб надихнути користувача на наступну страву.  
4. Recipe Profile: Показує детальну інформацію про рецепт, включаючи інгредієнти, кроки приготування та персональні нотатки.  
5. Recipe Creation Page: Дозволяє користувачам створювати та зберігати власні рецепти, додаючи інгредієнти, кроки та зображення.
6. Admin pages: сторінки налаштування кожного модуля, включаючи опції, які можна активувати або вимкнути.
7. Recipe Search: Сторінки з початковим екраном та пошуком усіх рецептів за словами.
Сценарії:  
1. Перегляд збережених рецептів:  
- Перейти на сторінку "My Recipes".  
- Переглянути або знайти потрібний рецепт.  
- Вибрати рецепт для перегляду його деталей на сторінці "Recipe Profile".  

2. Випадковий вибір рецепту:  
- Відкрити сторінку "Recipe Selection".  
- Провести свайп вправо, щоб зберегти рецепт у "My Recipes", або вліво, щоб відхилити.  
- Продовжувати переглядати випадкові рецепти, поки не знайдете потрібний.  

3. Використання рулетки рецептів:  
- Перейти на сторінку "Roulette".  
- Запустити рулетку, щоб вибрати випадковий рецепт із "My Recipes".  
- Переглянути вибраний рецепт на сторінці "Recipe Profile".  

4. Перегляд профілю рецепту:  
- Вибрати рецепт із "My Recipes", "Recipe Selection" або "Roulette".  
- Відкрити сторінку "Recipe Profile", щоб переглянути деталі, включаючи інгредієнти, кроки та нотатки.  

5. Створення рецепту:  
- Перейти на сторінку "Recipe Creation Page".  
- Ввести деталі рецепту, включаючи інгредієнти, кроки та зображення.  
- Зберегти рецепт у "My Recipes".

Connections:  
1. ingredient.recipe: **optional** Кожен інгредієнт може бути пов'язаний з конкретним продуктом, який використовується в рецепті.  
2. phase.recipe: **optional** Кожен етап приготування може бути пов'язаний із продуктом, який обробляється чи додається на цьому етапі.


wTask *** (апа @ixhxtxkxi разом з @wawceo)  — це потужний інструмент для управління проєктами, який забезпечує зручний робочий процес для команд розробників. Додаток дозволяє створювати проєкти, налаштовувати теги, спринти, релізи, управляти завданнями, а також автоматизувати створення Pull Request за допомогою інтеграції з GitHub та AI.

Модулі  
1. taskproject: Основний модуль, до якого підключено всі інші функції додатка. Забезпечує створення та управління проєктами.  
2. task: Модуль для створення, редагування та відстеження завдань.  
3. taskinfo: Модуль для зберігання основної інформації про завдання (опис, статус, відповідальний).  
4. taskrelease: Модуль для управління релізами, що групують завдання для досягнення цілей.  
5. tasksprint: Модуль для організації спринтів, які об'єднують завдання у часові періоди.  
6. taskstory: Модуль для тестування, що описує сценарії використання через потоки взаємодії зі сторінками та кнопками.  
7. tasktag: Модуль для категоризації завдань за тегами.  
8. taskpage: Модуль для створення та налаштування сторінок у проєкті.  
9. taskelement: Модуль для налаштування окремих елементів інтерфейсу на сторінках.  

---

Сторінки  
1. Проєкти: Основна сторінка, де створюються та керуються всі проєкти, з якими пов’язані решта елементів.  
2. Теги: Сторінка для налаштування тегів, які допомагають категоризувати завдання.  
3. Релізи: Сторінка для управління релізами та відстеження прогресу по них.  
4. Спринти: Сторінка для створення, управління та перегляду спринтів.  
5. Робочі процеси (Workflows): Сторінка для опису сценаріїв тестування, потоків взаємодії зі сторінками та кнопками.  
6. Завдання: Сторінка для створення, перегляду та редагування окремих завдань.  
7. Сторінки: Сторінка для створення, перегляду та налаштування сторінок проєкту.

---

Робочий процес 1: Власник проєкту створює проєкт  
1. Створення проєкту: Власник створює новий проєкт.  
2. Налаштування тегів: Визначаються теги для категоризації завдань у цьому проєкті.  
3. Налаштування спринтів: Плануються часові періоди для роботи над завданнями.  
4. Налаштування релізів: Визначаються ключові цілі, до яких прив’язуються завдання.  
5. Налаштування сторінок: Власник створює сторінки, додає елементи інтерфейсу, які будуть використовуватись у проєкті.  
6. Налаштування робочих процесів: Визначаються сценарії тестування, що описують потоки взаємодії зі сторінками та елементами.  

---

Робочий процес 2: Команда працює із завданнями  
1. Створення завдання: Учасник команди створює нове завдання, додає опис, пріоритет та теги.  
2. AI аналізує завдання: Генерується перший Pull Request із базовим кодом.  
3. Рецензування коду: Розробник переглядає PR, додає правки та створює фінальний Pull Request.  
4. Оновлення AI: AI аналізує зміни, додає новий PR із покращеннями.  
5. Затвердження PR: Розробник затверджує один із Pull Request або продовжує доопрацювання.  
6. Прив’язка до релізу та спринту: Завдання прив’язується до поточного релізу і спринту для моніторингу прогресу.  

Ця структура охоплює всі основні функції та робочі процеси для реалізації wTask.