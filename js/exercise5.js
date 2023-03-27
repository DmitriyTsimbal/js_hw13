//Через 20 секунд перейти на сайт ukr.net. Для цього через 20 секунд після відкриття треба виконати команду
//window.location.href = 'https://www.ukr.net/'

const redirectUser = (redirectLink) => {
    setTimeout(() => window.location.href = redirectLink,20000)
}

redirectUser('https://www.ukr.net/')