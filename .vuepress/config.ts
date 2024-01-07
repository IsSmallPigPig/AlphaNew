import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  base: "/",
  title: "AlphaBlog",
  head: [["link", { rel: "icon", href: "/icons/logo.ico" }]],
  shouldPrefetch: false,
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  
  theme: recoTheme({
    primaryColor: "#0076FF",
    logo: "/icons/logo.png",
    author: "SmallPigPig",
    authorAvatar: "/icons/logo.png",
    docsRepo: "https://github.com/ShiYiZhiHanZhuZhuYa",
    docsBranch: "main",
    docsDir: "",
    catalogTitle: "此页内容 🖨️",

    algolia: {
      appId: "LWU5H2OL7G",
      apiKey: "d2ee206ad9f95580681f586ec28f267d",
      indexName: "alphaalist",
      inputSelector: '搜索',
      algoliaOptionos: { 'facetFilters': ["lang:$LANG"] },
      debug: false,
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    commentConfig: {
      type: "valine",
      options: {
        appId: "sGmPQ8D3h1utFk3GegemG9be-gzGzoHsz",
        appKey: "ncl8w5Ty8yZdXdvlTy19hwhx",
        recordIP: true,
        // visitor: true,
        hideComments: true,
      }
    },

    series: {
      '/docs/docs/document/': [
        {
          collapsible: true,
          icon: "/icons/Nginx.svg",
          text: '文档的说明',
          children: ['/docs/document/beforeread.html', '/docs/document/rule.html', '/docs/document/use.html', '/docs/document/pull.html'] 
        },
        {
          collapsible: true,
          text: '七年级资料',
          children: ['/docs/document/7/7a.html', '/docs/document/7/7b.html']
        },
        {
          collapsible: true,
          text: '八年级资料',
          children: ['/docs/document/8/8a.html', '/docs/document/8/8b.html']
        },
        {
          collapsible: true,
          text: "九年级资料",
          children: ['/docs/document/9/9a.html', '/docs/document/9/9b.html']
        }
    ],

    '/docs/docs/about/': [
      {
        collapsible: true,
        text: "关于文档",
        children: ['/docs/about/关于文档/关于网站.html', '/docs/about/关于文档/关于作者.html']
      },
      {
        collapsible: true,
        text: "文档优势",
        children: ['/docs/about/文档优势/标准的语法.html', '/docs/about/文档优势/简洁的代码.html', '/docs/about/文档优势/清晰的目标.html', '/docs/about/文档优势/整齐的分类.html']
      }
    ]
    },

    navbar: [
      { text: '博客', link: '/posts', icon: 'Compass' },
      { text: '分类', link: '/categories/gengxingonggao/1/', icon: 'Folder' },
      {
        text: '文档',
        icon: 'Document',
        children: [
          {
            text: '七年级资料',
            children: [
              { text: '七年级上册', link: '/docs/document/7/7a.md' },
              { text: '七年级下册', link: '/docs/document/7/7b.md' },
            ],
          },
          {
            text: '八年级资料',
            children: [
              { text: '八年级上册', link: '/docs/document/8/8a.md' },
              { text: '八年级下册', link: '/docs/document/8/8b.md' },
            ],
          },
          {
            text: '九年级资料',
            children: [
              { text: '九年级上册', link: '/docs/document/9/9a.md' },
              { text: '九年级下册', link: '/docs/document/9/9b.md' },
            ],
          },
          
        ],
      },

      {
        text: '关于',
        icon: 'Account',
        children: [
          {
            text: '关于文档',
            children: [
              { text: '关于网站', link: '/docs/about/关于文档/关于网站.md' },
              { text: '关于作者', link: '/docs/about/关于文档/关于作者.md' },
            ],
          },
        ]
      },
      { text: '日志', link: '/timeline', icon: 'Box' },
    ],
  }),

  plugins: [
    mdEnhancePlugin({
      mark: true,
      footnote: true
    }),
    componentsPlugin({
      rootComponents: {
        backToTop: {
          progress: true
        },
      },
      locales: {
        backToTop: {
          "/": {
            backToTop: "返回顶部"
          }
        }
      }
    }),
  ]
  // debug: true,
});
