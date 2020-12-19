module.exports.templateTags = [{
    name: 'relativetime',
    displayName: 'Relative Time',
    description: 'Generate a relative time',
    args: [
        {
            displayName: 'offset',
            description: 'offset',
            type: 'number',
            defaultValue: 0
        }
    ],
    async run (context, offset = 0) {
        return Date.now() + offset;
    }
}];
