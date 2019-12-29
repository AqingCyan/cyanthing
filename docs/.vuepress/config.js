module.exports = {
  "title": "小薛菜菜子的技术轴",
  "description": "看点技术书，写点小页面；I'm always a beginner🌈",
  base: '/',
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    vssueConfig: {
      platform: 'github',
      owner: 'AqingCyan',
      repo: 'cyanthing',
      clientId: '630a66f6ab2974e86ecb',
      clientSecret: '7d9934b82a47b3a74ddf521698609c55b44996a7',
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "归档",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "相关链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/aqingcyan",
            "icon": "reco-github"
          },
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": '午后南杂',
        "desc": 'Enjoy when you can, and endure when you must.',
        "email": 'recoluan@qq.com',
        "link": 'https://www.recoluan.com'
      },
    ],
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "小薛菜菜子",
    "record": "京ICP备19058107号",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}
