---
sidebarDepth: 1
---

# node

## ZKNode <a id="zknode"></a>

::: tip
ZKNode is the base class for all Zerker display objects, and it contains most of the basic information.
:::

CODE:

```dart
var node = ZKNode()
    ..rotation = 90
    ..position.x = x
    ..position.y = y;

this.stage.addChild(node);
```

### Constructor

* #### `ZKNode()` 

### Properties <a id="zknode-prop"></a>
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `id`          | *String* | <font color=gray size=2>(uuid)</font> | ZKNode Unique id |
| `type`        | *String* | <font color=gray size=2>"ZKNode"</font> | Type of this node |
| `anchor`      | *Point*  | <font color=gray size=2>Point(0.5, 0.5)</font> | The offset scale for this node's registration point |
| `position`    | *Point*  | <font color=gray size=2>Point(0, 0)</font> | The position of the node, relative to its parent. |
| `skew`        | *Point*  | <font color=gray size=2>Point(0, 0)</font> | The factor to skew this node |
| `rotation`    | *double* | <font color=gray size=2>0</font> | The rotation in degrees for this node. _[0-360]_|
| `width`       | *double* | <font color=gray size=2>0</font> | The display width of this node |
| `height`      | *double* | <font color=gray size=2>0</font> | The display height of this node |
| `oriWidth`    | *double* | <font color=gray size=2>0</font> | The original width(or content width) of this node object |
| `oriHeight`   | *double* | <font color=gray size=2>0</font> | The original height(or content height) of this node object |
| `alpha`       | *double* | <font color=gray size=2>1</font> | The alpha of this node. _[0-1]_ |
| `visible`     | *bool*   | <font color=gray size=2>true</font> | Whether to display nodes |
| `interactive` | *bool*   | <font color=gray size=2>true</font>  | Whether the node allows interactive events, Note: This property is used in conjunction with `stage.interactive`. |
| `parent`      | *ZKContainer* |  <font color=gray size=2>null</font> | A reference to the `ZKContainer` or `ZKStage` object that contains this display object, or null if it has not been added to one. |
| `color`       | *Color*  | <font color=gray size=2>Colors.blue</font> | Set brush color. |
| `paint`       | *Paint*  | <font color=gray size=2>Paint()</font> | The default Paint of this canvas, you can configure Paint to achieve various effects. |
| `center`      | *Offset*  | <font color=gray size=2>Offset(0,0)</font> | The offset for this node's registration point |
| `debug`      | *bool*  | <font color=gray size=2>false</font> | Use debug to easily debug your application. |
| `onTapDown` | *Function*  | <font color=gray size=2>null</font> | Gesture touch interaction function, start clicking. |
| `onTapMove` | *Function*  | <font color=gray size=2>null</font> | Gesture touch interaction function, Touch movement. |
| `onTapUp` | *Function*  | <font color=gray size=2>null</font> | Gesture touch interaction function, End of touch. |
| `context` | *ZKContext*  | <font color=gray size=2>null</font> | Operational context, including some common methods and variables. |


### Methods <a id="zknode-methods"></a>
* #### `void draw(Canvas canvas, [Size size]) `
  - Component drawing function for drawing display content.

* #### `void setPosition(double x, double y)`
  - Set the position.x and the position.x property.

* #### `void setScale(double s)`
  - Set both the scaleX and the scaleY property to the same value.

* #### `void remove()`
  - Remove from parent component.

* #### `Map<String, double> toMap`
  - Translate a map of a component for ZKTween.

* #### `String toString()`
  - Returns a string representation of this node.

* #### `void dispose()`
  - Destroy components and free up memory.

---

## ZKContainer  <a id="zkcontainer"></a>

::: tip
ZKContainer is a container component that can contain other components
:::

CODE:

```dart
var con = ZKContainer()
    ..position.x = x
    ..position.y = y;
    ..addChild(node1)
    ..addChildAt(sprite, 2)

this.stage.addChild(con);
```

### Constructor

* #### `ZKContainer()` 
  - ZKContainer inherits from [ZKNode](#zknode).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKContainer"</font> | Type of this node |
| `children`    | *List*  | <font color=gray size=2>[]</font> | The array of children in the display list. |

#### [Other properties](#zknode-prop) are inherited from ZKNode, please check.

### Methods
* #### `ZKNode getChild(int index)`
  - Get a child based on index.

* #### `void addChild(ZKNode child)`
  - Adds a child to the top of the display list..

* #### `void removeChild(ZKNode child)`
  - Removes the specified child from the display list.

* #### `void removeAllChild()`
  - Delete all children.

* #### `void addChildAt(ZKNode child, int index)`
  - Adds a child to the display list at the specified index.

* #### `void forEach(Function(ZKNode child) func)`
  - Loop Execution Child.

#### [Other methods](#zknode-methods) are inherited from ZKNode, please check.

---

## ZKScene

::: tip
Scene component can be used to switch.
:::

CODE:

```dart
var scene1 = ZKScene()
    ..addChild(hum)
    ..addChild(tree)
    ..addChild(stone)
    ..fadeIn();
```

### Constructor

* #### `ZKScene()` 
  - ZKScene inherits from [ZKContainer](#zknode).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKScene"</font> | Type of this node |

#### [Other properties](#zknode-prop) are inherited from ZKContainer, please check.

### Methods
* #### `void fadeIn([int time = 1600, Function onComplete])`
  - Scene component admission animation, including fade in, cut in, etc.

* #### `void fadeOut([int time = 1000, Function onComplete])`
  - Scene component animation, including fade out, cut out, etc.

* #### `void moveIn({double x, double y, int time = 1600, Function onComplete, dynamic ease})`
  - Scene component admission animation, including move in, cut in, etc.

* #### `void moveOut({double x, double y, int time = 1000, Function onComplete, dynamic ease})`
  - Scene component animation, including move out, cut out, etc.

#### [Other methods](#zknode-methods) are inherited from ZKContainer, please check.

---

## ZKStage

::: tip
This component is the only stage of a ZKApp.
:::

CODE:

```dart
this.stage.addChild(node);
```

### Constructor

* #### `ZKStage()` 
  - ZKStage inherits from [ZKContainer](#zknode).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKStage"</font> | Type of this node |

#### [Other properties](#zknode-prop) are inherited from ZKContainer, please check.

### Methods

#### [Other methods](#zknode-methods) are inherited from ZKContainer, please check.

---

## ZKGraphic

::: tip
The Graphic class exposes an easy to use API for generating vector drawing instructions and drawing them to a specified context.
:::

CODE:

```dart
var node = ZKGraphic()
    ..position.x = x
    ..position.y = y
    ..drawRect(0.0, 0.0, 100.0, 100.0)
    ..setStyle(color: Colors.cyan)
    ..drawRect(-10.0, -110.0, 20.0, 100.0)
    ..setStyle(color: Colors.red)
    ..drawCircle(-120.0, -10.0, 50.0)
    ..setStyle(color: Colors.green)
    ..drawTriangle(120.0, -10.0, 50.0, 50.0, 150.0, 250.0);
```

### Constructor

* #### `ZKGraphic()` 
  - ZKGraphic inherits from [ZKNode](#zknode).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKGraphic"</font> | Type of this node |

#### [Other properties](#zknode-prop) are inherited from ZKNode, please check.

### Methods
* #### `void drawArc(double x, double y, double r, double sAngle, double eAngle, [bool useCenter = true])`
  - Draw ace api

* #### `void drawOval(double x, double y, double w, double h)`
  - Draw Oval api

* #### `void drawRect(double x, double y, double w, double h)`
  - Draw Rect api

* #### `void drawCircle(double x, double y, double radius)`
  - Draw Circle api

* #### `void drawTriangle(double x1, double y1, double x2, double y2, double x3, double y3)`
  - Draw Triangle api.

* #### `void drawLine(double x1, double y1, double x2, double y2)`
  - Draw line api.

* #### `void clear()`
  - Empty component.

* #### `void setStyle`
  - Set the style of the derivative method.
```
setStyle(
      {BlendMode blendMode,
      Color color,
      ColorFilter colorFilter,
      FilterQuality filterQuality,
      bool invertColors,
      bool isAntiAlias,
      StrokeCap strokeCap,
      StrokeJoin strokeJoin,
      double strokeMiterLimit,
      double strokeWidth,
      PaintingStyle style}) 
```

#### [Other methods](#zknode-methods) are inherited from ZKNode, please check.

---

## ZKText

::: tip
Display one or more lines of dynamic text (not user editable) in the display list.
:::

CODE:

```dart
var text = ZKText()
    ..position.x = x
    ..position.y = y
    ..text = "Hello world"
    ..setStyle(color: Colors.blueGrey, backgroundColor: Colors.red[50]);
```

### Constructor

* #### `ZKText()` 
  - ZKText inherits from [ZKNode](#zknode).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKText"</font> | Type of this node |
| `text`        | *String* | <font color=gray size=2>""</font> | The text to display |
| `style`        | *TextStyle* | <font color=gray size=2>(inherit: false, color: Colors.blue, fontSize: 16.0)</font> | The text style of the component |

#### [Other properties](#zknode-prop) are inherited from ZKNode, please check.

### Methods
* #### `void setText(String t)`
  - setText.

* #### `void setStyle`
  - Set the style of the derivative method.
```
setStyle(
      {bool inherit: false,
      Color color: Colors.blue,
      Color backgroundColor,
      double fontSize: 16.0,
      FontWeight fontWeight,
      FontStyle fontStyle,
      double letterSpacing,
      double wordSpacing,
      double height,
      Paint background,
      List<Shadow> shadows,
      TextDecoration decoration,
      Color decorationColor,
      TextDecorationStyle decorationStyle,
      double decorationThickness,
      String fontFamily,

      /// text pos style
      TextAlign textAlign: TextAlign.center,
      TextDirection textDirection: TextDirection.ltr,
      double textScaleFactor: 1.0,
      int maxLines,
      String ellipsis,
      StrutStyle strutStyle,
      TextWidthBasis textWidthBasis: TextWidthBasis.parent}) 
```

#### [Other methods](#zknode-methods) are inherited from ZKNode, please check.


---

## ZKImage

::: tip
Image component.
:::

CODE:

```dart
var img = ZKImage(url)
    ..position.x = x
    ..position.y = y
    ..onLoad = (){
      print("img loaded")
    }
    ..onError = (err){
      print("img load err because $err")
    };
```

### Constructor

* #### `ZKImage([String url])` 
  - ZKImage inherits from [ZKNode](#zknode).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKImage"</font> | Type of this node |
| `image`       | *Image* | <font color=gray size=2>null</font> | Original image, ui.Image |
| `clip`        | *Rect* | <font color=gray size=2>null</font> | Cut display area of the Image |
| `onLoad`      | *Function* | <font color=gray size=2>null</font> | Image loaded successfully |
| `onError`     | *Function* | <font color=gray size=2>null</font> | Image failed to load |
| `frame`       | *Frame* | <font color=gray size=2>null</font> | Render frame |

#### [Other properties](#zknode-prop) are inherited from ZKNode, please check.

### Methods
* #### `void load(String url) async`
  - Image loading function.

#### [Other methods](#zknode-methods) are inherited from ZKNode, please check.

---

## ZKSprite

::: tip
The sprite component is a very useful component, you can do a lot of effects with it.
:::

CODE:

```dart
var hum = Sprite(key: "hum")
    ..position.x = x
    ..position.y = y
```

### Constructor

* #### `ZKSprite({String image, String key, String type, String json, double width = 100, double height = 100})` 
  - ZKSprite inherits from [ZKNode](#zknode).

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String* | <font color=gray size=2>"ZKSprite"</font> | Type of this node |
| `texture`     | *BaseTexture* | <font color=gray size=2>null</font> | Sprite component texture material |
| `textureType` | *String* | <font color=gray size=2>null</font> | Sprite component texture material type |
| `onLoad`      | *Function* | <font color=gray size=2>null</font> | ZKSprite loaded successfully |
| `onError`     | *Function* | <font color=gray size=2>null</font> | ZKSprite failed to load |
| `frame`       | *Frame* | <font color=gray size=2>null</font> | Render frame |
| `animator`    | *Animator* | <font color=gray size=2>null</font> | Frame Animation Manager |

#### [Other properties](#zknode-prop) are inherited from ZKNode, please check.

### Methods
* #### `void load(String url) async`
  - Image loading function.

* #### `void play(String name, [int rate, bool loop = false])`
  - Play Method of Animator (Combination)

* #### `void stop([String name])`
  - Stop Method of Animator (Combination)


#### [Other methods](#zknode-methods) are inherited from ZKNode, please check.


