const path = require("path");

module.exports = function(ctx) {
  return {
    boot: ["addressbar-color.js"],

    css: ["app.css"],

    extras: ["roboto-font", "material-icons"],

    supportTS: true,

    framework: {
      lang: "pl",
      components: [
        "QLayout",
        "QHeader",
        "QDrawer",
        "QPageContainer",
        "QPage",
        "QToolbar",
        "QBtn",
        "QIcon",
        "QList",
        "QItem",
        "QItemSection",
        "QItemLabel",
        "QCard",
        "QCardSection",
        "QCardActions",
        "QTabs",
        "QTab",
        "QTabPanels",
        "QTabPanel",
        "QSelect",
        "QRadio",
        "QDialog",
        "QInput",
        "QExpansionItem",
        "QTable",
        "QSpinnerPuff",
        "QChip",
        "QAvatar"
      ],

      directives: ["Ripple", "TouchRepeat"],

      plugins: ["Notify", "LoadingBar", "AddressbarColor", "LocalStorage"],
      config: {
        loadingBar: { color: "primary" }
      }
    },

    supportIE: false,

    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      chainWebpack(chain) {
        chain.output.set("globalObject", "this");

        chain.resolve.alias.set("@", path.resolve(__dirname, "src"));
      },
      extendWebpack(cfg) {
        // copy _redirects file
        if (!cfg.output) return; // If running quasar dev
        const CopyWebpackPlugin = require("copy-webpack-plugin");
        cfg.plugins.push(
          new CopyWebpackPlugin([
            {
              from: "_redirects",
              to: cfg.output.path
            }
          ])
        );
      }
    },

    devServer: {
      // https: false,
      port: 8080,
      open: true
    },

    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        name: "Plan Lekcji",
        short_name: "Plan Lekcji",

        display: "standalone",
        orientation: "portrait",
        background_color: "#1d1d1d",
        theme_color: "#1d1d1d",
        icons: [
          {
            src: "statics/icons/android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png"
          },
          {
            src: "statics/icons/android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "statics/icons/android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "statics/icons/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "statics/icons/android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "statics/icons/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ]
      }
    },

    cordova: {
      // id: 'tk.poly.ekolib'
    },

    electron: {}
  };
};
