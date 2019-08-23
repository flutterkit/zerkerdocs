---
sidebarDepth: 1
---

# extras

## ZKButton

::: tip
Extras class: A button component.
:::

CODE:

```dart
var btn = ZKButton("assets/btn.png")
  ..setScale(.5)
  ..position.x = 100
  ..position.y = 100;
  stage.addChild(btn);
```

### Constructor

* #### `ZKButton(String url)` 
  - ZKButton inherits from [ZKContainer](/api/node.html#zkcontainer).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKButton"</font> | Type of this node |
| `onClick`     | *Function* | <font color=gray size=2>null</font> | Button Click Function |

#### [Other properties](#zknode-prop) are inherited from ZKNode, please check.

#### [Other methods](#zknode-methods) are inherited from ZKNode, please check.

---

## ZKScrollBg

::: tip
A background component that scrolls around in a loop, commonly used in games.
:::

CODE:

```dart
var scrollbg = ZKScrollBg(image: "assets/bg.png", total: 2, direction: "left", time: 30 * 1000);
    scrollbg.anchor.y = 1;
    scrollbg.position.y = this.context.appHeight;
    stage.addChildAt(scrollbg, 0);
```

### Constructor

* #### `ZKScrollBg`
```
{String key,
String image,
int total,
int count = 2,
double width,
double height,
int time = DEFAULT_TIME,
String direction = 'left'}
``` 
  - ZKScrollBg inherits from [ZKConttainer](/api/node.html#zkcontainer).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKScrollBg"</font> | Type of this node |
| `onLoad`      | *Function* | <font color=gray size=2>null</font> | ZKSprite loaded successfully |

#### [Other properties](#zknode-prop) are inherited from ZKNode, please check.

#### [Other methods](#zknode-methods) are inherited from ZKNode, please check.

---

## ZKCircle

::: tip
A Circle component.
:::

CODE:

```dart
var circle = ZKCircle(20.0);
circle.color = Colors.blue;
```

### Constructor

* #### `ZKCircle(double radius, [Color: color])`
  - ZKCircle inherits from [ZKNode](/api/node.html#zknode).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKCircle"</font> | Type of this node |
| `radius`      | *double* | <font color=gray size=2>10</font> | circle radius |

#### [Other properties](#zknode-prop) are inherited from ZKNode, please check.

#### [Other methods](#zknode-methods) are inherited from ZKNode, please check.




