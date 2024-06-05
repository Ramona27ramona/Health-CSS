const db = require('./persistenceService').getDatabase();

// let users = [
//     {
//         user: "Dr. Ana Popescu",
//         password: "password123",
//         status: "doctor"
//     },
//     {
//         user: "Dr. Mihai Ionescu",
//         password: "password456",
//         status: "doctor"
//     },
//     {
//         user: "Maria Radu",
//         password: "pass123word",
//         status: "pacient"
//     },
//     {
//         user: "Alexandru Stoica",
//         password: "user789pass",
//         status: "pacient"
//     },
//     {
//         user: "Andreea Dumitrescu",
//         password: "securepass",
//         status: "pacient"
//     },
//     {
//         user: "Cristina Popa",
//         password: "strongpassword",
//         status: "pacient"
//     }
// ];
// console.log(users);

async function insertUsers() {
    const col = db.collection('users');
    const res = await col.insertMany(users);
    return res;
}

async function checkUser(user) {
    const col = db.collection('users');
    const res = await col.findOne({
        user
    });

    return res;
}

// create new account
async function addNewUser(user) {
    try {
        const col = db.collection('users');
        const res = await col.insertOne(user);
        return res;
    } catch (error) {
        console.error('Error adding new user:', error);
        throw error; 
    }
}

//login doctor/patient
async function logInUser({ user, password }) {
    try {
        const col = db.collection('users');
        console.log(user, password);
        const res = await col.findOne({ user: user });

        if (!res) {
            return 'Userul sau parola este gresita';
        }
        if (res.password == password) {
            return { 'user': res.user, 'status': res.status };
        } else {
            return 'nu exista';
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}
async function logInUser({ user, password }) {
    try {
        const col = db.collection('users');
        console.log(user, password);
        const res = await col.findOne({ user: user });

        if (!res) {
            return 'Userul sau parola este gresita';
        }
        if (res.password == password) {
            return { 'user': res.user, 'status': res.status };
        } else {
            return 'nu exista';
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error; 
    }
}

module.exports = {
    insertUsers,
    checkUser,
    addNewUser,
    logInUser
};