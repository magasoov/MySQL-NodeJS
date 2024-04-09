const mysql = require("mysql");

// создаем данные для входа на mysql
const options = {
  user: 'root',
  password: '12345',
  database: 'sakila'
}

// создаем соединение и передаем наши данные
const connections = mysql.createConnection(options);
// // теперь попытаемся подключиться к бд:
// connections.connect(err => {
//   if (err) {
//     console.error(`Ошибка, не удалось подключиться к БД: ${err}`);
//   } else {
//     console.log('Успешно подключено к БД');

//     // Выполняем запрос к базе данных здесь, после успешного подключения
//     const actor_id = 74;
//     connections.query('SELECT * FROM actor WHERE actor_id = ?', [actor_id], (error, actor, fields) => {
//       if (error) {
//         console.error('Ошибка при выполнении запроса:', error);
//       } else {
//         console.log('Результаты запроса:', actor);
//       }
//     });
//   }
// });


const actor_id = 74
const first_name = "MILLA"
connections.query('SELECT * FROM actor WHERE actor_id = ? AND first_name = ?', [actor_id, first_name], (error, actor, fields) => {
  if (error) {
    console.error('An error occurred while executing the query')
    throw error
  }
  console.log(actor);
}
)
