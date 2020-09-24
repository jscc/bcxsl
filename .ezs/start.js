const babelRegister = require('babel-register')
babelRegister
(
    {
        presets: 
        [ 
            [
                "env",
                {
                    "targets":
                    {
                        "node": "current"
                    }
                }
            ]
        ]
    }
)

let server = ''
if(process.env.NODE_ENV === 'development')
{
    server = require('./.server/dev')
}
else if(process.env.NODE_ENV === 'production')
{
    server = require('./.server/pro')
}
else if(process.env.NODE_ENV === 'production_doc')
{
    server = require('./.server/doc')
}
module.exports = server