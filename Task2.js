// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:
// const name = [
// ‘Abigail’, ‘Alexandra’, ‘Alison’,
// ‘Amanda’, ‘Angela’, ’Bella’,
// ‘Carol’, ‘Caroline’, ‘Carolyn’,
// ‘Deirdre’, ‘Diana’, ‘Elizabeth’,
// ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]

// Contoh:
// searchName(“an”, 3, callback)

// Output: 
// [“Alexandra”,”Amanda”,”Angela”]


const searchName = (kata, limit, callback) =>{
    const name = [
    'Abigail','Alexandra','Alison',
    'Amanda','Angela','Bella',
    'Carol','Caroline','Carolyn',
    'Deirdre','Diana','Elizabeth',
    'Ella','Faith','Olivia', 'Penelope',]
    let search = name.filter((item)=>{
    return item.toUpperCase().indexOf(kata.toUpperCase()) > -1;
    })
    callback(search, limit)
}

const limitName = (data, limit)=>{
    let result = data.slice(0,limit)
    console.log(result)
    
}
searchName('an', 3, limitName);
