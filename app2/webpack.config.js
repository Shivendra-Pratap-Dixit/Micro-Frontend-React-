const HtmlWebPackPlugin=require("html-webpack-plugin")
const {ModuleFederationPlugin}=require("webpack").container;
const path=require("path");

const htmlPlugin=new HtmlWebPackPlugin({
    template:"./public/index.html",
    filename:"./index.html"
});
module.exports={
    mode:"development",
    devServer:{
        static:path.join(__dirname,"dist"),
        port:3002,
        historyApiFallback:{
            index:"/public/index.html"
        },
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
    },
    plugins:[
        htmlPlugin,
        new ModuleFederationPlugin({
            name:"app2",
            filename:"remoteEntry.js",
            exposes:{
                "./Image":"./src/Image"
            }
        })
    ]
}