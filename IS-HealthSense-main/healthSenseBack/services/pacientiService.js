const db = require('./persistenceService').getDatabase();
const { ObjectId } = require('mongodb');

// let pacienti = [
//     {
//         nume: "Popescu",
//         prenume: "Ana",
//         dataNasterii: "1990-05-15",
//         istoricBolii: "Diabet zaharat tip 2",
//         medicamentatie: ["Metformin", "Insulină"],
//         adresa: "Strada Victoriei nr. 10, București"
//     },
//     {
//         nume: "Ionescu",
//         prenume: "Mihai",
//         dataNasterii: "1985-12-03",
//         istoricBolii: "Hipertensiune arterială",
//         medicamentatie: ["Enalapril", "Amlodipin"],
//         adresa: "Bulevardul Unirii nr. 25, Cluj-Napoca"
//     },
//     {
//         nume: "Popa",
//         prenume: "Maria",
//         dataNasterii: "1978-09-20",
//         istoricBolii: "Osteoartrită",
//         medicamentatie: ["Paracetamol", "Ibuprofen"],
//         adresa: "Strada Gării nr. 8, Timișoara"
//     },
//     {
//         nume: "Dumitrescu",
//         prenume: "Ion",
//         dataNasterii: "1982-03-10",
//         istoricBolii: "Astm bronșic",
//         medicamentatie: ["Salbutamol", "Fluticazonă"],
//         adresa: "Aleea Magnoliei nr. 12, Iași"
//     },
//     {
//         nume: "Constantinescu",
//         prenume: "Andreea",
//         dataNasterii: "1995-07-08",
//         istoricBolii: "Depresie majoră",
//         medicamentatie: ["Sertralină", "Alprazolam"],
//         adresa: "Bulevardul Revoluției nr. 30, Craiova"
//     },
//     {
//         nume: "Georgescu",
//         prenume: "Alexandru",
//         dataNasterii: "1976-11-25",
//         istoricBolii: "Boala Crohn",
//         medicamentatie: ["Adalimumab", "Prednison"],
//         adresa: "Strada Libertății nr. 5, Galați"
//     },
//     {
//         nume: "Stanescu",
//         prenume: "Elena",
//         dataNasterii: "1988-02-18",
//         istoricBolii: "Diabet zaharat tip 1",
//         medicamentatie: ["Insulină", "Glimepirid"],
//         adresa: "Bulevardul Independenței nr. 17, Ploiești"
//     },
//     {
//         nume: "Radulescu",
//         prenume: "Andrei",
//         dataNasterii: "1992-06-30",
//         istoricBolii: "Hipertiroidism",
//         medicamentatie: ["Metimazol", "Propranolol"],
//         adresa: "Strada Mihai Eminescu nr. 22, Sibiu"
//     },
//     {
//         nume: "Barbu",
//         prenume: "Ana-Maria",
//         dataNasterii: "1980-04-12",
//         istoricBolii: "Artrită reumatoidă",
//         medicamentatie: ["Metotrexat", "Prednison"],
//         adresa: "Aleea Trandafirilor nr. 7, Brașov"
//     },
//     {
//         nume: "Nistor",
//         prenume: "Cristian",
//         dataNasterii: "1974-08-05",
//         istoricBolii: "Hepatită C",
//         medicamentatie: ["Sofosbuvir", "Daclatasvir"],
//         adresa: "Strada Florilor nr. 3, Bacău"
//     },
//     {
//         nume: "Tudor",
//         prenume: "Andreea",
//         dataNasterii: "1983-09-28",
//         istoricBolii: "Scleroză multiplă",
//         medicamentatie: ["Interferon beta-1a", "Glatiramer acetat"],
//         adresa: "Bulevardul București nr. 14, Oradea"
//     },
//     {
//         nume: "Stanciu",
//         prenume: "Mihai",
//         dataNasterii: "1977-12-15",
//         istoricBolii: "Insuficiență cardiacă",
//         medicamentatie: ["Furosemid", "Digoxin"],
//         adresa: "Strada Trandafirilor nr. 9, Constanța"
//     },
//     {
//         nume: "Marinescu",
//         prenume: "Ioana",
//         dataNasterii: "1991-10-22",
//         istoricBolii: "Cancer de sân",
//         medicamentatie: ["Tamoxifen", "Herceptin"],
//         adresa: "Bulevardul Republicii nr. 11, Suceava"
//     },
//     {
//         nume: "Gheorghe",
//         prenume: "Adrian",
//         dataNasterii: "1979-05-07",
//         istoricBolii: "Dependență de alcool",
//         medicamentatie: ["Disulfiram", "Naltrexon"],
//         adresa: "Strada Libertății nr. 19, Timișoara"
//     },
//     {
//         nume: "Vasilescu",
//         prenume: "Ana",
//         dataNasterii: "1986-07-18",
//         istoricBolii: "Anemie feriprivă",
//         medicamentatie: ["Fier feroz", "Acid folic"],
//         adresa: "Aleea Păcii nr. 6, Galați"
//     }
// ];


async function insertPacienti() {
    const col = db.collection('pacienti');
    const res = await col.insertMany(pacienti);
    return res;
}

// Read all the patients in the db
async function retrievePacienti() {
    const col = db.collection('pacienti');
    const res = await col.find({});
    const allValues = await res.toArray();

    return allValues;
}

// add a new patient
async function addNewPatient(patient) {
    const col = db.collection('pacienti');
    const res = await col.insertOne(patient);
}

// update patient
async function updatePatient(idPatient, updatedData) {
    const col = db.collection('pacienti');
    const res = await col.updateOne(
        { _id: new ObjectId(idPatient) }, 
        { $set: {...updatedData} }
    );

    return res;
}

// Delete patient
async function deletePatient(_id) {
    const col = db.collection('pacienti');
    const res = await col.deleteOne({_id: new ObjectId(_id)});

    return res;
}

//Read patient
async function retrievePatient(_id) {
    const col = db.collection('pacienti');
    const res = await col.findOne({ _id: new ObjectId(_id) });

    return res;
}

module.exports = {
    retrievePacienti,
    insertPacienti,
    addNewPatient,
    updatePatient,
    deletePatient,
    retrievePatient
};
