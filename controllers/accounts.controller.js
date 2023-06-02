import AccountService from "../services/accounts.services.js"

async function createAccount(req, res, next){
   
    let account = req.body;

    if(account.balance==null || !account.name){
        throw new Error("Os campos nomes e balance são obrigatorios")
    }

    try {

        const result = await AccountService.createAccount(account);
        res.send(result);
        global.logger.info(`POST /account - ${JSON.stringify(account)}`)

    } catch (err) {
        next(err);
    }
}

async function getAccounts(req, res, next){
    try {
        const data = await AccountService.getAccounts();
        res.send(data);
        
        global.logger.info("GET /account")

    } catch (err) {
        next(err);
    }
}

async function getAccount(req, res, next){
    try {

        const account = await AccountService.getAccount(req.params.id);
        res.send(account);
        global.logger.info(`GET /account:id`)

    } catch (err) {
        next(err);
    }
}

async function deleteAccount(req, res, next){
    try {

        await AccountService.deleteAccount(req.params.id);
        res.end();
        global.logger.info(`DELETE /account:id - ${req.params.id}`)

    } catch (err) {
        next(err);
    }
}

async function updateAccount(req,res,next){
    try {

        let account = req.body;

        if(account.balance==null || !account.name || !account.id){
            throw new Error("Os campos nomes, balance e id são obrigatorios");
    
        }

        const result = await AccountService.updateAccount(account);


        res.send(result);

        global.logger.info(`PUT /account - ${JSON.stringify(account)}`)

    } catch (err) {
        next(err);
    }
}

async function updateAccountBalance(req,res,next){
    try {

        let account = req.body;

        if(account.balance==null || !account.id){
            throw new Error("Os campos balance e id são obrigatorios");
    
        }

        const result = await AccountService.updateAccountBalance(account);
        res.send(account);
        global.logger.info(`PATCH /account - ${JSON.stringify(account)}`)

    } catch (err) {
        next(err);
    }
}

export default{
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount,
    updateAccountBalance
}