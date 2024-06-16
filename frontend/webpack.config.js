module.exports = {
    // opsi konfigurasi webpack lainnya

    resolve: {
        fallback: {
            "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
            "path": require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "http": require.resolve("stream-http"),
            "timers": require.resolve("timers-browserify"),
             'react-native$': 'react-native-web'
            // Tambahkan fallback lain sesuai kebutuhan
        }
    },
    
};
