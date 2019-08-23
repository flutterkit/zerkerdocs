---
sidebarDepth: 1
---

# Tutorial

## Implement a click animation

Zerker is great for making some action-packed effects, such as awesome animations, love animations, pop-up animations or meteor shower backgrounds.

In this example, we take the praise animation as an example.

#### 1. ui layout

---

## Make a simple game


---

## More detailed about ZKSprite

---

## Components communication

You can use `ZKBus` to implement component communication for any Zerker component. Use it to even communicate between flutter native widgets and zerker elements.

```dart
ZKButton btn = ZKButton("assets/btn.png");
btn.onTap = (){
	ZKBus.emit("show_dot", 300);
};
this.stage.addChid(dot);
...

/// other scene
ZKBus.on("show_dot", (posx){
	ZKTween(node).to({"x": posx}).start();
});

```