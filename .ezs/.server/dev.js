import path from 'path'
import webpack from 'webpack'
import Copy from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import webpackDevServer from 'webpack-dev-server'
import OpenPack from 'openpack'
import MemoryFS from 'memory-fs'

const fs = new MemoryFS()
const rootPath = path.resolve(__dirname, '../../')
const options = 
{
    mode: 'development',
    entry: path.resolve(rootPath, 'src/app.js'),
    output: 
    {
        filename: '[hash:8].js',
        path: path.resolve(rootPath, 'dist/')
    },
    plugins:
    [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin
        (
            {
                template: path.resolve(rootPath, 'public/index.html')
            }
        ),
        new Copy
        (
            [
                {
                    from: path.resolve(rootPath, 'public'),
                    to: path.resolve(rootPath, 'dist'),
                    ignore: [ 'index.html' ]
                }
            ]
        ),
        new webpack.HotModuleReplacementPlugin(),
        // new OpenPack
        // (
        //     {
        //         browser: 'chrome',
        //         lan: true
        //     }
        // )
    ],
    module:
    {
        rules: 
        [
            {
                test: /\.css$/,
                use:
                [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 
                [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 
                [
                    'file-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer:
    {
        // contentBase: path.resolve(rootPath, 'dist/'),
        hot: true,
        open: true,
        // overlay: true,
        // port: 1798
    }
}

webpackDevServer.addDevServerEntrypoints
(
    options,
    options.devServer
)
const compiler = webpack(options)
compiler.outputFileSystem = fs
// compiler.watch
// (
//     {
//         aggregateTimeout: 300,
//         // ignored: /node_modules/,
//         poll: 1000
//     },
//     (err, stats) =>
//     {
//         checkError(err, stats)
//     }
// )
let devServer = new webpackDevServer(compiler, options.devServer)
devServer.listen
(
    1798,
    'localhost',
    () => console.log('dev server listening port 1798')
)

// compiler.run
// (
//     (err, stats) =>
//     {
//         checkError(err, stats)
//     }
// )

function checkError(err, stats)
{
    if (err) 
    {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return true;
    }
    
    const info = stats.toJson(
        {
            colors: true
        }
    )
    
      if (stats.hasErrors()) {
        console.error(info.errors);
      }
    
      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }
      
    console.log(stats.toString(
        {
            colors: true
        }) + "\n");

}