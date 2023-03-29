---
sidebarDepth: 1
---

# texture and assets

## ZKAssets

::: tip
ZKAssets is a unified material loading management class.
:::

CODE:

```dart
Altas fire = await ZKAssets.loadAltas(
  key: "fire", 
  json: "assets/a.json", 
  image: "assets/fire.png"
);

ImgTexture ball = await ZKAssets.loadImage(
  key: "ball",  
  image: "assets/ball.png"
);

SpriteSheet hum = await ZKAssets.loadImage(
  key: "hum",  
  image: "assets/hum.png",
  width: 32,
  height: 32
);

/// preload Assets
Map<String,dynamic> urls = {
  "dot": "dot.png",
  "json": "data.json",
  "cloud": "cloud.png",
  "enemy": {"json": "altas1.json", "image": "altas1.png" },
  "jump": {"image": "jumpsheet.png", "width": 32, "height": 32 },
};

ZKAssets.preload(
  urls: urls,
  baseUrl: "assets/",
  onLoad: (){
    ...
  }
);
```

### Static Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `baseUrl`     | *String* | <font color=gray size=2>""</font> | a public base url for easy filling |
| `memCache`    | *CacheMap* | <font color=gray size=2>CacheMap()</font> | a memory container |
| `parallel`    | *int*    | <font color=gray size=2>8</font> | Number of concurrent downloads |
| `scale`       | *double* | <font color=gray size=2>0</font> | loading progress |


### Static Methods
* #### `dynamic getAsset(String key)`
  - Get resources from the memory container by key.

* #### `void dispose()`
  - Free memory resources.

* #### `String getType(dynamic texture)`
  - Judge and return the resource type.

* #### `Future<ByteData> loadByte(String path) async`
  - base loadByte func.

* #### `Future<String> loadString(String path) async`
  - base loadString func.

* #### `Future<ui.Image> loadAssetImage(String path) async`
  - base loadImage func from asets.

* #### `Future<Map<String, dynamic>> loadJson`
  - base loadJson func.

* #### `Future<Atlas> loadAltas({@required String json, String key, String image, String baseUrl, bool cache = true}) async`
  - Load sprite atlas function.

* #### `Future<SpriteSheet> loadSpriteSheet({String key, @required Size size, String image, String baseUrl, bool cache = true}) async`
  - Load sprite sheet function.

* #### `Future<ImgTexture> loadImage({dynamic path, dynamic image,String baseUrl,String key,Function onLoad,Function onError,bool cache = true}`
  - Load ImgTexture function.

* #### `void preload({List<String> urls, String baseUrl, Function onLoad, Function onError})`
  - Assets preload function, you can load some images or json.

---

## Atlas

::: tip
Sprite atlas class, You can make it with the following tools.

:::

### Constructor

* #### `Atlas(Map<String, dynamic> json, [Image image])` 
  - Atlas inherits from BaseTexture.

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String*  | <font color=gray size=2>Atlas</font> | The type of Texture. |
| `image`       | *ui.Image*| <font color=gray size=2>null</font> | Original image of the assets. |
| `imageUrl`    | *String* | <font color=gray size=2>""</font> | The image url |
| `total`    | *int* | <font color=gray size=2>0</font> | Total number of frames |
| `length`    | *int* | <font color=gray size=2>0</font> | Total number of frames. [same as total] |
| `list`    | *List\<Frame\>* | <font color=gray size=2>[]</font> | Frame combination |
| `size`    | *Size* | <font color=gray size=2>null</font> | Display area |

### Methods
* #### `Frame getFrame(dynamic key)`
  - Get a frame.

* #### `void generateFrames()`
  - generate any frames.

---

## SpriteSheet

::: tip
Sprite sheet class.
:::

### Constructor

* #### `SpriteSheet(Image image, Size frameSize)` 
  - SpriteSheet inherits from BaseTexture.

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String*  | <font color=gray size=2>spritesheet</font> | The type of Texture. |
| `image`       | *ui.Image*| <font color=gray size=2>null</font> | Original image of the assets. |
| `total`    | *int* | <font color=gray size=2>0</font> | Total number of frames |
| `length`    | *int* | <font color=gray size=2>0</font> | Total number of frames. [same as total] |
| `list`    | *List\<Frame\>* | <font color=gray size=2>[]</font> | Frame combination |
| `size`    | *Size* | <font color=gray size=2>null</font> | Display area |

### Methods
* #### `Frame getFrame(dynamic key)`
  - Get a frame.

* #### `void generateFrames()`
  - generate any frames.

---

## ImgTexture

::: tip
Image Texture Class.
:::

### Constructor

* #### `ImgTexture(Image image)` 
  - ImgTexture inherits from BaseTexture.

### Properties
| Name          | Type     |  Defaults  |  Description  |
| --------      | :-----:  | :---- | :---- |
| `type`        | *String*  | <font color=gray size=2>spritesheet</font> | The type of Texture. |
| `image`       | *ui.Image*| <font color=gray size=2>null</font> | Original image of the assets. |
| `total`    | *int* | <font color=gray size=2>0</font> | Total number of frames |
| `length`    | *int* | <font color=gray size=2>0</font> | Total number of frames. [same as total] |
| `list`    | *List\<Frame\>* | <font color=gray size=2>[]</font> | Frame combination |
| `size`    | *Size* | <font color=gray size=2>null</font> | Display area |

### Methods
* #### `Frame getFrame(dynamic key)`
  - Get a frame.

* #### `void generateFrames()`
  - generate any frames.

