---
home: true
heroImage: /images/top.png
actionText: Get started
actionLink: /guide/
features:
  - title: Simple and lightweight
    details: Using Zerker is very simple, it has very simple api and operation methods, anyone can quickly learn to use, and you will also like Zerker.
  - title: Various scenes
    details: Zerker can be used in a variety of scenarios. You can use it to create opening animations, like small animations, and a variety of small games.
  - title: Animation
    details: You can use ZKTween to implement various easing animations, using sprite.frames to implement frame animation.

footer: MIT Licensed | Copyright © 2019-present
---


## Introduction

Zerker is a flexible and lightweight flutter canvas graphic animation library.

With Zerker, you can create a lot of seemingly cumbersome animation effects, such as animated animations, pop-up animations, scene transitions, icon effects, and more.

At the same time, you can create a lot of simple games with Zerker. Zerker contains elements such as sprites, scrolling backgrounds, and atlases, making it easy to create game worlds with them.

## Getting Started

```dart
class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: Center(
          child: Container(
            color: Colors.amber[600],
            width: 350.0,
            height: 350.0,
            child: Zerker(app: MyZKApp()),
          ),
        ));
  }
}

class MyZKApp extends ZKApp {
  ZKNode node1;
  ZKNode node2;
  ZKText text;
  ZKImage img;
  ZKGraphic graphic;
```

## Your Opinion
If you have any feedback on Zerker, please feel free to send it via Twitter or email! Thank you very much for your interest in Zerker.😊