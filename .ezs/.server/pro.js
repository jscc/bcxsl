import path from 'path'
import webpack from 'webpack'
import Copy from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const rootPath = path.resolve(__dirname, '../../')
const options = 
{
    mode: 'production',
    entry: path.resolve(rootPath, 'src/app.js'),
    output: 
    {
        filename: '[hash:8].js',
        path: path.resolve(rootPath, 'dist'),
        publicPath: '/'
    },
    plugins:
    [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin
        (
            {
                template: path.resolve(rootPath, 'public/index.html'),
                minify:
                {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true
                }
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
        new MiniCssExtractPlugin
        (
            {
                filename: '[hash:8].css'
            }
        )
    ],
    module:
    {
        rules: 
        [
            {
                test: /\.css$/,
                use: 
                [
                    MiniCssExtractPlugin.loader,
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
    }
}

const compiler = webpack(options)
console.log('ssssssss')
compiler.run
(
    (err, stats) =>
    {
        checkError(err, stats)
    }
)

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