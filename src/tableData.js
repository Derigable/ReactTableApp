// Данные для таблицы
const initialData = [
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Ivan',
        surname: 'Ivanov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Evgen',
        surname: 'Orkov',
        patronymic: 'Zeimanovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Aleksei',
        surname: 'Zabibulin',
        patronymic: 'Petrovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Petr',
        surname: 'Sharikov',
        patronymic: 'Ivanovich'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    },
    {
        name: 'Zmei',
        surname: 'Gorinich',
        patronymic: 'Kadeev'
    }
];

export { initialData };
