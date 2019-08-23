---
sidebarDepth: 1
---

# QA

## Can Zerker only be used for games?
No, Zerker is an easy-to-use canvas graphics animation library.
With it you can easily create a lot of animations, such as app admission animation, like animation, scene switching, pop-up effects, text animation, etc.

<img :src="$withBase('/images/effect.gif')" alt="">
---

## About sound

There is no way to provide sound in Zerker. You can use the excellent solutions in the community, 
for example.[https://github.com/rxlabz/audioplayer](https://github.com/rxlabz/audioplayer) or [https://github.com/dooboolab/flutter_sound](https://github.com/dooboolab/flutter_sound)
```dart
await audioPlayer.play(kUrl);
await audioPlayer.stop();
```

---

## About physics and particles

There is already a dart version of box2d, although I have not used it.
[https://github.com/google/box2d.dart](https://github.com/google/box2d.dart)

Regarding particle animation, I have a plan to port the Proton library to flutter if I have time. 
[https://github.com/a-jie/Proton](https://github.com/a-jie/Proton)  

<img :src="$withBase('/images/p.png')" alt="">

---

## Set size and full screen


```dart
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
```
  
Setting up full screen is easy, you can refer to this article.
[http://developine.com/flutter-full-screen-splash-screen-tutorial/](http://developine.com/flutter-full-screen-splash-screen-tutorial/)

---

## How to manage assets

Regarding assets, I recommend you read this article.
[https://flutter.dev/docs/development/ui/assets-and-images](https://flutter.dev/docs/development/ui/assets-and-images)

In Zerker, you can preload in advance or load instantly.

```dart
Map urls = {
	"dot": "assets/dot.png",
	"json": "assets/data.json",
	"cloud": "assets/cloud.png",
	"enemy": {"json": "assets/altas1.json", "image": "assets/altas1.png"},
	"jump": {"image": "assets/jumpsheet.png", "width": 32, "height": 32},
}

var onProgress = (scale){
	print("Current loading progress $scale");
	progressLine.scaleX = 10 * scale;
};

ZKAssets.preload(urls:urls , parallel:6, onLoad: onLoad, onProgress: onProgress);

...

ZKImage dot = ZKImage(key: dot);
ZKSprite enemy = ZKSprite(key: enemy);
var json = ZKAssets.getAsset("json");
```

```dart
ZKSprite enemy = ZKSprite("json": "assets/altas1.json", "image": "assets/altas1.png");
enemy.onLoad = ...

ZKSprite abc = ZKSprite(image: "assets/abc.png");
abc.onLoad = ...
```
