import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            $components: path.resolve('./src/components/'),
            $store: path.resolve('./src/store/index.ts')
        }
    }
};

export default config;