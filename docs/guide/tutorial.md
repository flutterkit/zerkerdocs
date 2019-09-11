---
sidebarDepth: 1
---

# Tutorial


## Start a simple demo

> Zerker is great for making some action-packed effects, such as awesome animations, love animations, pop-up animations or meteor shower backgrounds.

### Start example

The specific effect is as follows

<img :src="$withBase('/images/example/example1.gif')" alt="">

Detailed code please check [https://github.com/flutterkit/zerker/tree/master/example](https://github.com/flutterkit/zerker/tree/master/example)

#### 1. The first step is to create a zerker widget.

```dart
class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: Center(
          child: Zerker(app: MyZKApp(), clip: true, interactive: true, width: 350, height: 350),
        ));
  }
}
```

#### 2. Inherited from ZKApp.
```dart
class MyZKApp extends ZKApp {
```

#### 3. Preload assets in the init function
```dart
init() {
    super.init();
    stage.color = Colors.blueGrey;

    Map<String, dynamic> urls = {
      "boy": {"json": "assets/boy.json", "image": "assets/boy.png"},
      "bg": "assets/bg.png",
    };

    // preload all assets
    ZKAssets.preload(
        urls: urls,
        onProgress: (scale) {
          print("Assets loading ${scale * 100}%");
        },
        onLoad: () {
          initScene();
          _loaded = true;
          print("Assets load Complete");
        });
}
```

#### 4. Create various elements

> Note: To create a sprite animated material map, please see [https://flutterkit.github.io/zerkerdocs/guide/animation.html#sequence-frame-animation](https://flutterkit.github.io/zerkerdocs/guide/animation.html#sequence-frame-animation)

```dart
    // add title
    title = ZKText()
      ..position.x = appWidth / 2
      ..position.y = 20
      ..text = "Please click anywhere"
      ..setStyle(
        color: Colors.blueGrey, 
        backgroundColor: Colors.greenAccent, 
        textAlign: TextAlign.center);
    stage.addChild(title);

    // add boy
    boy = ZKSprite(key: "boy")
      ..setScale(1)
      ..anchor.y = 1
      ..position.x = size.width / 2
      ..position.y = appHeight - 16
      ..animator.make("run", ["Run ({1-15}).png"])
      ..animator.make("jump", ["Jump ({1-15}).png"])
      ..animator.make("dead", ["Dead ({1-15}).png"])
      ..animator.play("run", 25, true);
    stage.addChild(boy);
```

<img :src="$withBase('/images/example/boy.png')" alt="">


#### 5. Add an interactive event
```dart
_addAction() {
    boy.onTapDown = (event) {
      bg.stop();
      _jumping = false;
      boy.animator.play("dead", 20);
    };

    stage.onTapDown = (event) {
      if (event.target == boy) return;
      if (_jumping) return;

      bg.play();
      _jumping = true;
      boy.animator.play("jump", 20);
      ZKTween(boy)
          .to({"y": appHeight - 120}, 500)
          .easing(Ease.circ.easeOut)
          .chain(ZKTween(boy).to({"y": appHeight - 16}, 500).easing(Ease.circ.easeIn).onComplete((obj) {
                boy.animator.play("run", 25, true);
                _jumping = false;
              }))
          .start();
    };
}
```

#### 6. You're done

You're done

---

## Make a simple game  

In this example we will learn how to make a simple game. The zerker is great for small game development and you will find it really that simple.

#### Notice: Recent improvements in content... 

<br>
<img :src="$withBase('/images/wallpaper/04.jpg')" alt="">

---

## More examples

More zerker examples you can view here [https://github.com/flutterkit/zerker-samples](https://github.com/flutterkit/zerker-samples)

<img :src="$withBase('/images/example/basic_demo.gif')" alt="">

If you are interested in zerker then you are welcome to provide a better example for me.

---