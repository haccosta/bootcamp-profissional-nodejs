import { promises as fs} from "fs";

async function getAccounts(){
    const data = JSON.parse(await fs.readFile(global.fileName));

    return data.accounts;
}

async function getAccount(id){
    const data = await getAccounts();
    const account = data.find(account => account.id === parseInt(id));   

    if(account){
        return account;
    }

    new Error("Not found!")
}

async function insertAccount(account){

    const data = JSON.parse(await fs.readFile("accounts.json"));

    const registry = {
        id: data.nextId++,
        name: account.name,
        balance: account.balance 
    }


    data.accounts.push(registry)    
    await fs.writeFile(global.fileName, JSON.stringify(data));
    return registry;    

}

async function deleteAccount(id){
    const data = JSON.parse(await fs.readFile(global.fileName));
    data.accounts = data.accounts.filter(account => account.id !== parseInt(id));
    await fs.writeFile(global.fileName, JSON.stringify(data));
}

async function updateAccount(account){
    const data = JSON.parse(await fs.readFile(global.fileName));
    const index = data.accounts.findIndex(a => a.id !== parseInt(account.id));


    if(index===-1){
        throw new Error("Not found register!")

    }

    data.accounts[index-1].name       = account.name;
    data.accounts[index-1].balance    = account.balance;

    await fs.writeFile(global.fileName, JSON.stringify(data));

    return data.accounts[index-1];
}

export default{
    getAccounts,
    insertAccount,
    getAccount,
    deleteAccount,
    updateAccount
}