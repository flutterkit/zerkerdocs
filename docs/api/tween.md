---
sidebarDepth: 1
---

# tween

## ZKTween

::: tip
ZKTween is a easing animation processing class.
:::

CODE:

```dart
ZKTween(text.position)
	.to({"x": event.dx, "y": event.dy}, 2000)
    .easing(Ease.elastic.easeOut)
    .onUpdate((obj) {
    	node1.rotation++;
    })
    .start();

ZKTween(node1)
    .to({
    	"x": event.dx + 100,
    	"y": event.dy + 100,
    	"scaleX": Random().nextDouble() * 2,
    	"scaleY": Random().nextDouble() * 2
    }, 1000)
    .easing(Ease.back.easeInOut)
    .start();
```

### Constructor

* #### `ZKTween(dynamic target)` 

### Methods
* #### `ZKTween to(Map<String, dynamic> properties, [int duration = 1000])`
  - Adds a tween from the current values to the specified properties. Set duration to 0 to jump to these value.

* #### `ZKTween start([time])`
  - Start easing animation.

* #### `ZKTween stop()`
  - Stop easing animation.

* #### `ZKTween delay(int amount)`
  - Set the delay animation time.

* #### `ZKTween easing(easing)`
  - Set easing animation.

* #### `ZKTween chain(ZKTween chainedTween)`
  - Execute the second animation in sequence.

* #### `ZKTween onUpdate(Function onUpdateCallback)`
  - Update simultaneous execution function.

* #### `ZKTween onComplete(Function onCompleteCallback)`
  - Complete simultaneous execution function.

---

## Ease

::: tip
Various easing functions
:::

### Static Properties
```
class Ease {
  static BaseEasing linear = Linear();
  static BaseEasing quad = Quad();
  static BaseEasing cubic = Cubic();
  static BaseEasing quart = Quart();
  static BaseEasing quint = Quint();
  static BaseEasing sine = Sine();
  static BaseEasing expo = Expo();
  static BaseEasing circ = Circ();
  static BaseEasing elastic = Elastic();
  static BaseEasing back = Back();
  static BaseEasing bounce = Bounce();
}
```