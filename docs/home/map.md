---
title: 地图使用
order: 1

nav:
  title: 首页
  path: /
---

# 高德地图

## 使用高德地图

### 注册账号并申请 Key

1. 首先，[注册开发者账号](https://lbs.amap.com/dev/id/choose)，成为高德开放平台开发者

2. 登陆之后，在进入「应用管理」 页面「创建新应用」

3. 为应用[添加 Key](https://lbs.amap.com/dev/key/app)，「服务平台」一项请选择「 Web 端 ( JSAPI ) 」

### 引入 L7

#### 添加 div 标签指定地图容器

```html
<div id="map"></div>
```

#### 初始化 L7 Scene

```ts
const scene = new Scene({
  id: 'map',
  map: new GaodeMap({
    center: [121.438579, 31.246384],
    pitch: 0,
    zoom: 10,
    token: '高德地图token',
  }),
});
```

<code src="./demos/map.tsx"></code>

**<font color=red>token 不添加可能会导致地图底图白屏 控制台报`<AMap JSAPI> KEY 异常，错误信息：INVALID_USER_DOMAIN 错误`</font>**

### Scene 的使用

`scene`是包含地图、地图控件、组件、加载资源的全局对象，通过 `scene` 场景对象，我们可以获取到操作地图需要的所有内容。

具体 API 请前往 [L7](https://l7.antv.antgroup.com/api/scene) 官网查看
