---
sidebarDepth: 1
---

# QA

## Can Zerker only be used for games?
No, Zerker is an easy-to-use canvas graphics animation library.
With it you can easily create a lot of animations, such as app admission animation, like animation, scene switching, pop-up effects, text animation, etc.

<img :src="$withBase('/images/wallpaper/01.jpg')" alt="">
<br>
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

## About source code style

Because I originally wanted to create a multi-language common framework, so I don’t use a lot of dart syntactic sugar in zerker.

I think one day maybe he can transplant to unity or other places very quickly.

Of course, I very much welcome you to join the development of zerker.

---

## Next to do

It’s really a bit busy recently, of course I will try to continue optimizing zerker. If you are interested in zerker, you are welcome to join the development of `flutterkit`.

In addition, I also thought of another very interesting project. I want to name it `c2f` for now. It can convert css style to flutter style, I think there will be web developers like it. [https://github.com/flutterkit/c2f](https://github.com/flutterkit/c2f)

<img :src="$withBase('/images/wallpaper/06.jpg')" alt="">