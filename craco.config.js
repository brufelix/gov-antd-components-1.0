const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { 
                '@primary-color': '#52DF9A',
                '@link-color': '#52DF9A',
                '@link-hover-color': '#00B894',
                '@border-radius-base': '2px',
                '@menu-highlight-color': '#333333',
                '@menu-item-active-border-width': '0px',
                '@menu-bg':'white',
                '@menu-item-active-bg': '#00B894',
                '@menu-item-color': "#B3B3B3",
                '@menu-item-hover-bg': '#00B894',
                '@btn-primary-bg': '#52DF9A',
                '@btn-border-radius-base': '10px',
                '@slider-track-background-color': '#f2f2f2',
                '@layout-header-background': "#52DF9A",
                '@input-bg': '#00B894',
                '@input-color': '#f2f2f2',
                '@input-icon-color':'#52DF9A',
                '@input-icon-hover-color': '#00B894',
                '@input-placeholder-color': '#f2f2f2',
                '@table-header-bg': '#00B894',
                '@table-header-color': '#f2f2f2',
                '@drawer-bg': 'white',
              },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  }