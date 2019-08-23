---
sidebarDepth: 1
---

# other

## Animator

::: tip
Frame animation manager.
:::

CODE:

```dart
var list = ["front", "left", "after", "right"];
var sprite = ZKSprite(image: "assets/bigboy.png", type: "spritesheet", width: 32, height: 32)
  ..animator.make(list[0], ['0-4'])
  ..animator.make(list[1], ['5-9'])
  ..animator.make(list[2], ['10-14'])
  ..animator.make(list[3], ['15-19'])
  ..onTapDown = (event) {
    sprite.animator.play(list[(index++) % 4], 8, true);
    // sprite.animator.stop(list[(index++) % 4]);
  };
```

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `framesLength`| *int* | <font color=gray size=2></font> | Limit available frames length |
| `isEnabled`   | *bool* | <font color=gray size=2>false</font> | Whether the current animation manager is available (including available frames) |
| `status`      | *String*    | <font color=gray size=2>stop</font> | Current animation manager status |
| `onComplete`  | *Function* | <font color=gray size=2>null</font> | Callback function at the end of animation frame execution |


### Methods
* #### `void play(String name, [int rate, bool loop = false])`
  - Play registered animations, including frame rate and loops, etc.

* #### `void stop([String name])`
  - Stop current (specified) animation.

* #### `void make(String name, [List frames, int rate = Constant.RATE, bool loop = false])`
  - Register animation, set sequence frame list, frame rate, loop, etc.

* #### `void add({String name, List frames, int rate = Constant.RATE, bool loop = false})`
  - Another form of registration animation.

* #### `void remove(String name, [bool destroy = false])`
  - Remove registered animation frames and set whether to destroy frames.

* #### `void clear()`
  - Clear all frames.

---

## ZKBus

::: tip
A very simple event bus
:::

```dart
ZKBus.emit("SHOW");
...

ZKBus.on("SHOW", (){
  ZKTween(this)...
});

ZKBus.off("SHOW");
```

### Static Methods
* #### `emit(Sting eventName, [dynamic args])`
  - Send an event with parameters

* #### `on(Sting eventName , Function callback)`
  - Register to listen for an event.

* #### `off(Sting eventName , [Function callback]])`
  - Remove an event listener.

---

## ZKContext

::: tip
Operational context, including some public functions and variables.
:::

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `size`        | *Size*  | <font color=gray size=2>null</font> | Current zerker app size. |
| `offset`      | *Offset*| <font color=gray size=2>null</font> | Current zerker app offset. |
| `ratio`    | *double* | <font color=gray size=2>1</font> | Set image resolution |
| `expansion`    | *dynamic* | <font color=gray size=2>null</font> | An extension field |
| `screenWidth`    | *double* | <font color=gray size=2></font> | Screen size |
| `screenHeight`    | *double* | <font color=gray size=2></font> | Screen size |
| `appWidth`    | *double* | <font color=gray size=2></font> | Current zerker app size |
| `appHeight`    | *double* | <font color=gray size=2></font> | Current zerker app size |



