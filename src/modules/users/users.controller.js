const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    create: (req, res) => {
        res.send('will create User');
    },
    update: (req, res) => {
        res.send('Will update User');
    },
    delete: (req,res) => {
        const id = req.params.id;
        res.send('User deleted')
    }
}

module.exports = UsersController;