module.exports = {
	name: 'avatar',
	description: 'Change bot avatar based on URL',
	execute(message, args) {
        path = args[0];
        console.log(path);
         message.client.user.setAvatar(path);
	},
};