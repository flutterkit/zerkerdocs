---
home: true
heroImage: /images/top.png
actionText: Get started
actionLink: /guide/
features:
  - title: Simple and lightweight
    details: Using Zerker is very simple, it has very simple api and operation methods, anyone can quickly learn to use, and you will also like Zerker.
  - title: Various animation effects
    details: Use Zerker to achieve a variety of animation effects, such as the like effect, admission animation, pop-up effect, etc.
  - title: Develop 2d games
    details: Zerker is also very good at developing games, supporting spritesheets, atals and many other assets, making it easy to create a variety of small games.

footer: MIT Licensed | Copyright © 2019-present
---


## Introduction

Zerker is a flexible and lightweight flutter canvas graphic animation library.

With Zerker, you can create a lot of seemingly cumbersome animation effects, such as animated animations, pop-up animations, scene transitions, icon effects, and more.

<img align=center :src="$withBase('/images/fp.png')" alt="">

At the same time, you can create a lot of simple games with Zerker. Zerker contains elements such as sprites, scrolling backgrounds, and atlases, making it easy to create game worlds with them.

## Getting Started

```dart
class MyZKApp extends ZKApp {
  ZKNode _node;

  @override
  bool interactive = true;

  @override
  bool clip = true;

  @override
  init() {
    super.init();
    /// 
  }

  @override
  update(int time) {
    super.update(time);
  }

  @override
  customDraw(Canvas canvas) {}

  @override
  void dispose() {
    super.dispose();
  }
}
```

## License
Zerker is licensed under MIT license. View license. [https://github.com/flutterkit/zerker/blob/master/LICENSE](https://github.com/flutterkit/zerker/blob/master/LICENSE)