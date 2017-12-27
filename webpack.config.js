const path = require('path');

module.exports = {

    entry: './src/index.js',

    output: {

        path: path.resolve('./', "build"),
        filename: 'App.bundle.js'
    },

    module: {

        rules: [

            {
                test: /\.js$/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                use: [
                    
                    { loader: 'style-loader'},

                    {
                        loader: 'css-loader',
                        options: {

                            modules: true
                        }
                    }
                ]

                /*
                Parametr use to odpowiednik dla pojedynczego loader. Przyjmuje listę loaderów przez które musi przejść plik .css,
                 aby stać się modułem. Dzięki opcji module: true ustawionej na loaderze css-loader, Webpack nie tylko potrafi 
                 ładować pliki .css, ale także zmienia ich zasięg na lokalny (tzn. działa tylko w obrębie danego modułu,
                     w którym został zaimportowany). Dzięki temu nie musimy się martwić o to, że użyliśmy już jakiejś klasy.

                     2. Loader zmieni nazwę klasy className na module na ciag losowych znakow aby nazwy klas sie nie powtarzaly
                     w wynikowym pliku.
                */
            }
        ]
    }

}