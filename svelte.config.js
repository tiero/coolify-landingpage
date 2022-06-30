import preprocess from 'svelte-preprocess'
import path from 'path'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: [
    preprocess({
      postcss: true
    })
  ],
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
    // browser:{
    //   hydrate: process.env.NODE_ENV === 'development',
    //   router: process.env.NODE_ENV === 'development',
    // },
    vite: {
      server: {
        hmr: {
          port: 23456
        }
      },
      resolve: {
        alias: {
          $components: path.resolve('./src/components/'),
          $store: path.resolve('./src/store/index.ts')
        }
      }
    }
  }
}
