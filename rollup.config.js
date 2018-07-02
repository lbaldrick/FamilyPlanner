import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import server from 'rollup-plugin-server';
import html from 'rollup-plugin-fill-html';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
    entry: 'src/index.js',
    dest: 'build/bundle.min.js',
    format: 'iife',
    sourceMap: 'true',
    plugins: [
        sass(),
        server({
            open: true,
            contentBase: ['public', 'build'],
            host: 'localhost',
            port: 3000,
        }),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        html({
            template: 'src/index.html',
            filename: 'index.html'
        }),
        commonjs({
            namedExports: {
                'node_modules/react-dom/index.js': [ 'render' ],
                'node_modules/react/index.js': [ 'Component', 'Children', 'createElement', 'PureComponent', 'Fragment' ]
            }
        }),
    ],
};