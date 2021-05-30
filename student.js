var mysql = require('mysql');
var Student = new Object();
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'student_scoer'
});

connection.connect();


/**
 * 查询所有学生
 * @param callback
 */
Student.find = function(callback) {
    connection.query(
        `SELECT * 
            FROM student
        `,
        function(err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return callback(err);
            }
            callback(null, result);
        });
}

/**
 * 根据姓名查询学生
 * @param name
 * @param callback
 */
Student.findOneByName = function(name, callback) {
    connection.query(
        `SELECT *
            FROM student
         WHERE 
            name like "%${name}%"
        `,
        function(err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return callback(err);
            }
            callback(null, result);
        });
}

/**
 * 新增学生
 * @param callback
 */
var addSql = 'INSERT INTO student(Id,name,gender,age,hobbies) VALUES(NULL,?,?,?,?)';
Student.add = function(student, callback) {
    var addSqlParams = new Array();
    // 将学生中的属性添加到SQL值数组中
    for (var key in student) {
        addSqlParams.push(student[key]);
    }
    connection.query(addSql, addSqlParams, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return callback(err);
        }
        callback(null, result);
    });
}

/**
 * 根据Id查询学生
 * @param name
 * @param callback
 */
Student.findById = function(id, callback) {
    connection.query(
        `SELECT *
            FROM student
         WHERE 
            id = "${id}"
        `,
        function(err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return callback(err);
            }
            callback(null, result[0]);
        });
}

var updateSql = 'UPDATE student SET ' +
    'name = ?, gender = ? , age = ? , hobbies = ? WHERE id = ?';
Student.findByIdAndUpdate = function(id, student, callback) {
    var addSqlParams = new Array();
    // 将学生中的属性添加到SQL值数组中
    for (var key in student) {
        addSqlParams.push(student[key]);
    }
    addSqlParams.shift()
    addSqlParams.push(id);
    console.log(addSqlParams)
    connection.query(updateSql, addSqlParams, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return callback(err);
        }
        callback(null, result.affectedRows);
    });
}

Student.findByIdAndRemove = function(id, callback) {
    var delSql = `DELETE FROM student where id= ${id}`;
    connection.query(delSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        return callback(null, result.affectedRows);
    });
}

//导出模板构造函数
module.exports = Student;