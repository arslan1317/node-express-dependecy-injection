module.exports = function UserService(opts) {

    async function getUser(args) {
        return "test";
    }

    return {
        getUser,
    };
}