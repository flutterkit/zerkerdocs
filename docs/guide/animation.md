---
sidebarDepth: 1
---

# Animation

An application or game is of course inseparable from a variety of animation effects. You can easily achieve many cool effects in zerker.

Use ZKTween to create easing animations such as displacement and zoom.
Use Animator to precisely control sequence frame animations and implement sprite animations.

<img :src="$withBase('/images/ball.png')" alt="">

## About ZKTween

ZKTween is a simple and lightweight animation tool. See the documentation for it [ZKTween Docs](/api/tween.html#zktween).

### Features
* Does one thing and one thing only: tween properties
* Very simple to use, but it can achieve a lot of effects
* Easing functions are reusable outside of Tween.

### About ease function
<img :src="$withBase('/images/ease.png')" alt="">

### Useage

#### ZKTween has two ways of using
* control position

```dart
ZKTween(text.position)
	.to({"x": event.dx, "y": event.dy}, 2000)
    .easing(Ease.elastic.easeOut)
    .onUpdate((obj) {
    	otherNode.rotation++;
    })
    .start();
```

* control Node
```dart
ZKTween(sprite)
	.to({
    "x": event.dx + 100,
    "y": event.dy + 100,
    "scaleX": Random().nextDouble() * 2,
    "scaleY": Random().nextDouble() * 2
    }, 1000)
    .easing(Ease.back.easeInOut)
    .onComplete(...)
    .start();
```

### Thanks
ZKTween refers to the implementation code of [tween.js](https://github.com/tweenjs/tween.js). They are really great. I want to pay tribute to the original author!

### A standalone version
A separate version is located [https://github.com/flutterkit/tweener](https://github.com/flutterkit/tweener), you can use it to manipulate more elements (outside zerker), it is really easy to use.

---

## Scene transition effect

The `ZKScene` inherits from the `ZKContainer` and it provides several transition effects. It adapts to several elements moving together into (or disappearing) the scene.

It can be applied in games, level switching or switching between two game sets.

```dart
ZKScene scene = ZKScene();
scene.addChild(node1);
scene.addChild(node2);
scene.addChild(image1);
scene.addChild(sprite1);
scene.addChild(sprite2);
stage.addChild(scene);

scene.moveIn(time: 5000, x: 300);

...
if(...){
    scene.fadeOut(5000, (){
        print("GAME OVER!");
    });
}
```

---

## Sequence frame animation

Sequence frame animation can achieve various common effects such as character walking, enemy death, explosion, etc. 

In Zerker you can use Animator to control sequence frame animation.

### About Texture
Sequence frame animation relies on textures. Currently, Zerker supports two general animation class maps ([atlas](https://en.wikipedia.org/wiki/Texture_atlas), [spritesheet](https://www.codeandweb.com/what-is-a-sprite-sheet)).
You can use the tools provided in another tutorial to create two types of textures.  

<img :src="$withBase('/images/altas.webp')" alt="">

```json
"Apple.png": {
    "frame": {"x":292,"y":304,"w":60,"h":61},
    "rotated": false,
    "trimmed": true,
    "spriteSourceSize": {"x":23,"y":29,"w":60,"h":61},
    "sourceSize": {"w":90,"h":90},
    "pivot": {"x":0.5,"y":0.5}
},
"Banana.png": {
    "frame": {"x":299,"y":192,"w":99,"h":113},
    "rotated": false,
    "trimmed": true,
    "spriteSourceSize": {"x":14,"y":15,"w":99,"h":113},
    "sourceSize": {"w":128,"h":128},
    "pivot": {"x":0.5,"y":0.5}
},
...
```

### Make animations with spritesheet
Use spritesheet to specify the display width and height (different from atlas).
Specify the frame to use index numbers or shorthand.

```dart
List<String> list = ["front", "left", "after", "right"];
ZKSprite sprite = ZKSprite(image: "assets/hum.png", type: "spritesheet", width: 32, height: 32)
  ..animator.make(list[0], [0, 1, 2, 3, 4])
  ..animator.make(list[1], ['5-9'])
  ..animator.make(list[2], ['10-14'])
  ..animator.make(list[3], ['15-19'])
  ..onTapDown = (event) {
    sprite.animator.play(list[(index++) % 4], 8, true);
  };
```

### Make animations with atlas
Atlas animation, set the frame can be passed to keyname filename or index

```dart
ZKSprite sprite = ZKSprite(key: "dino")
    ..anchor.x = 0.1
    ..anchor.y = 0.9
    ..setScale(.6)
    ..animator.make("run", ["01.png", "02.png", "03.png", "04.png"])
    ..animator.make("jump", ["05.png", "06.png", "07.png"], 10, true)

    sprite.animator.play("run", 8, true);
    sprite.animator.play("jump");
```

## Making atlas and spritesheet

It is recommended that you use the following tools to make two kinds of materials.

* [http://free-tex-packer.com/](http://free-tex-packer.com/)
* [https://www.codeandweb.com/free-sprite-sheet-packer](https://www.codeandweb.com/free-sprite-sheet-packer)
* [https://amakaseev.github.io/sprite-sheet-packer/](https://amakaseev.github.io/sprite-sheet-packer/)
* [http://www.spriteland.com/apps/spritemaker.html](http://www.spriteland.com/apps/spritemaker.html)

<img :src="$withBase('/images/packer.jpeg')" alt="">
<img :src="$withBase('/images/ftp.png')" alt="">

### Note
When exporting, be sure to set `JSON(hash)` or `JSON(array)`. Currently only supports these two formats.

<img :src="$withBase('/images/out.png')" alt="">


