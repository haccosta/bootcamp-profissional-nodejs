import AccountRepository from "../repository/accounts.repository.js"

async function createAccount(account){
    
    return await AccountRepository.insertAccount(account);
}

async function getAccounts(){
    return await AccountRepository.getAccounts();
}

async function getAccount(id){
    return await AccountRepository.getAccount(id);
}

async function deleteAccount(id){
    return await AccountRepository.deleteAccount(id);
}

async function updateAccount(account){
    return await AccountRepository.updateAccount(account);
}

async function updateAccountBalance(account){

   const registry = await AccountRepository.getAccount(account.id);
   registry.balance = account
   await AccountRepository.updateAccount(registry)

   return registry;
}

export default{
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount,
    updateAccountBalance
}