# Class: Image

## Hierarchy

* *ImageBase*

  ↳ **Image**

## Constructors

### constructor

\+ **new Image**(`props`: ImageProps \| *Readonly*<ImageProps\>): [*Image*](image.md)

#### Parameters:

Name | Type |
:------ | :------ |
`props` | ImageProps \| *Readonly*<ImageProps\> |

**Returns:** [*Image*](image.md)

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:477

\+ **new Image**(`props`: ImageProps, `context`: *any*): [*Image*](image.md)

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
:------ | :------ |
`props` | ImageProps |
`context` | *any* |

**Returns:** [*Image*](image.md)

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:479

## Properties

### context

• **context**: *any*

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:477

___

### props

• `Readonly` **props**: *Readonly*<ImageProps\> & *Readonly*<{ `children?`: ReactNode  }\>

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:502

___

### refs

• **refs**: { [key: string]: *React.Component*<any, any\>;  } & { [key: string]: ReactInstance;  }

Defined in: node_modules/@types/react-native/index.d.ts:368

___

### state

• **state**: *Readonly*<{}\>

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:503

___

### contextType

▪ `Optional` `Static` **contextType**: *undefined* \| *Context*<any\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:459

## Methods

### UNSAFE\_componentWillMount

▸ `Optional`**UNSAFE_componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:715

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<ImageProps\>, `nextContext`: *any*): *void*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<ImageProps\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:747

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<ImageProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<ImageProps\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:775

___

### blur

▸ **blur**(): *void*

Removes focus from an input or view. This is the opposite of `focus()`.

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:366

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters:

Name | Type |
:------ | :------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:644

___

### componentDidMount

▸ `Optional`**componentDidMount**(): *void*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:623

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<ImageProps\>, `prevState`: *Readonly*<{}\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<ImageProps\> |
`prevState` | *Readonly*<{}\> |
`snapshot?` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:686

___

### componentWillMount

▸ `Optional`**componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:701

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<ImageProps\>, `nextContext`: *any*): *void*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<ImageProps\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:730

___

### componentWillUnmount

▸ `Optional`**componentWillUnmount**(): *void*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:639

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<ImageProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<ImageProps\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:760

___

### focus

▸ **focus**(): *void*

Requests focus for the given input or view. The exact behavior triggered
will depend on the platform and type of view.

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:361

___

### forceUpdate

▸ **forceUpdate**(`callback?`: () => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:494

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<ImageProps\>, `prevState`: *Readonly*<{}\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<ImageProps\> |
`prevState` | *Readonly*<{}\> |

**Returns:** *any*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:680

___

### measure

▸ **measure**(`callback`: MeasureOnSuccessCallback): *void*

Determines the location on screen, width, and height of the given view and
returns the values via an async callback. If successful, the callback will
be called with the following arguments:

 - x
 - y
 - width
 - height
 - pageX
 - pageY

Note that these measurements are not available until after the rendering
has been completed in native. If you need the measurements as soon as
possible, consider using the [`onLayout`
prop](docs/view.html#onlayout) instead.

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | MeasureOnSuccessCallback |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:318

___

### measureInWindow

▸ **measureInWindow**(`callback`: MeasureInWindowOnSuccessCallback): *void*

Determines the location of the given view in the window and returns the
values via an async callback. If the React root view is embedded in
another native view, this will give you the absolute coordinates. If
successful, the callback will be called with the following
arguments:

 - x
 - y
 - width
 - height

Note that these measurements are not available until after the rendering
has been completed in native.

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | MeasureInWindowOnSuccessCallback |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:335

___

### measureLayout

▸ **measureLayout**(`relativeToNativeComponentRef`: *number* \| *HostComponent*<unknown\>, `onSuccess`: MeasureLayoutOnSuccessCallback, `onFail`: () => *void*): *void*

Like [`measure()`](#measure), but measures the view relative an ancestor,
specified as `relativeToNativeComponentRef`. This means that the returned x, y
are relative to the origin x, y of the ancestor view.
_Can also be called with a relativeNativeNodeHandle but is deprecated._

#### Parameters:

Name | Type |
:------ | :------ |
`relativeToNativeComponentRef` | *number* \| *HostComponent*<unknown\> |
`onSuccess` | MeasureLayoutOnSuccessCallback |
`onFail` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:343

___

### render

▸ **render**(): ReactNode

**Returns:** ReactNode

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:495

___

### setNativeProps

▸ **setNativeProps**(`nativeProps`: *object*): *void*

This function sends props straight to native. They will not participate in
future diff process - this means that if you do not include them in the
next render, they will remain active (see [Direct
Manipulation](https://reactnative.dev/docs/direct-manipulation)).

#### Parameters:

Name | Type |
:------ | :------ |
`nativeProps` | *object* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:355

___

### setState

▸ **setState**<K\>(`state`: *null* \| {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<ImageProps\>) => *null* \| {} \| *Pick*<{}, K\> \| *Pick*<{}, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *never* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *null* \| {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<ImageProps\>) => *null* \| {} \| *Pick*<{}, K\> \| *Pick*<{}, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:489

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<ImageProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<ImageProps\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:634

___

### abortPrefetch

▸ `Optional` `Static`**abortPrefetch**(`requestId`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`requestId` | *number* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:4018

___

### getSize

▸ `Static`**getSize**(`uri`: *string*, `success`: (`width`: *number*, `height`: *number*) => *void*, `failure?`: (`error`: *any*) => *void*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`uri` | *string* |
`success` | (`width`: *number*, `height`: *number*) => *void* |
`failure?` | (`error`: *any*) => *void* |

**Returns:** *any*

Defined in: node_modules/@types/react-native/index.d.ts:4010

___

### getSizeWithHeaders

▸ `Static`**getSizeWithHeaders**(`uri`: *string*, `headers`: { [index: string]: *string*;  }, `success`: (`width`: *number*, `height`: *number*) => *void*, `failure?`: (`error`: *any*) => *void*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`uri` | *string* |
`headers` | *object* |
`success` | (`width`: *number*, `height`: *number*) => *void* |
`failure?` | (`error`: *any*) => *void* |

**Returns:** *any*

Defined in: node_modules/@types/react-native/index.d.ts:4011

___

### prefetch

▸ `Static`**prefetch**(`url`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: node_modules/@types/react-native/index.d.ts:4017

___

### queryCache

▸ `Optional` `Static`**queryCache**(`urls`: *string*[]): *Promise*<{ [url: string]: *memory* \| *disk* \| *disk/memory*;  }\>

#### Parameters:

Name | Type |
:------ | :------ |
`urls` | *string*[] |

**Returns:** *Promise*<{ [url: string]: *memory* \| *disk* \| *disk/memory*;  }\>

Defined in: node_modules/@types/react-native/index.d.ts:4019

___

### resolveAssetSource

▸ `Static`**resolveAssetSource**(`source`: ImageSourcePropType): ImageResolvedAssetSource

**`see`** https://reactnative.dev/docs/image#resolveassetsource

#### Parameters:

Name | Type |
:------ | :------ |
`source` | ImageSourcePropType |

**Returns:** ImageResolvedAssetSource

Defined in: node_modules/@types/react-native/index.d.ts:4024
