
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/arcsandspaces/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/arcsandspaces"
  },
  {
    "renderMode": 2,
    "route": "/arcsandspaces/gallery"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 559, hash: '935905aa7d1105d4d975cbbc1f803ad2e25d7298389778bbaab74cdd34c5369b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1073, hash: '96c1f2232dc85135534c2e77ff2fa3e262b1ebbc061c52dda2541773771930d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12793, hash: 'ba7db7a6977ea6cbe2b8b76becd2c962500d7c44233acee78772025314682bb9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 6205, hash: '5fafa777a2ac54f7b4728e94f9af504d90f411bd0d71267a5abf865c41ba9b56', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
