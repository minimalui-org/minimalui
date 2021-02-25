# Class: FlatList<ItemT\>

## Type parameters

Name | Default |
:------ | :------ |
`ItemT` | *any* |

## Hierarchy

* *Component*<FlatListProps<ItemT\>\>

  ↳ **FlatList**

## Constructors

### constructor

\+ **new FlatList**<ItemT\>(`props`: *FlatListProps*<ItemT\> \| *Readonly*<FlatListProps<ItemT\>\>): [*FlatList*](flatlist.md)<ItemT\>

#### Type parameters:

Name | Default |
:------ | :------ |
`ItemT` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *FlatListProps*<ItemT\> \| *Readonly*<FlatListProps<ItemT\>\> |

**Returns:** [*FlatList*](flatlist.md)<ItemT\>

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:477

\+ **new FlatList**<ItemT\>(`props`: *FlatListProps*<ItemT\>, `context`: *any*): [*FlatList*](flatlist.md)<ItemT\>

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Type parameters:

Name | Default |
:------ | :------ |
`ItemT` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *FlatListProps*<ItemT\> |
`context` | *any* |

**Returns:** [*FlatList*](flatlist.md)<ItemT\>

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

### flashScrollIndicators

• **flashScrollIndicators**: () => *void*

Displays the scroll indicators momentarily.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:4322

Defined in: node_modules/@types/react-native/index.d.ts:4322

___

### getNativeScrollRef

• **getNativeScrollRef**: () => *undefined* \| *null* \| *RefObject*<[*View*](view.md)\> \| *RefObject*<ScrollViewComponent\>

Provides a reference to the underlying host component

#### Type declaration:

▸ (): *undefined* \| *null* \| *RefObject*<[*View*](view.md)\> \| *RefObject*<ScrollViewComponent\>

**Returns:** *undefined* \| *null* \| *RefObject*<[*View*](view.md)\> \| *RefObject*<ScrollViewComponent\>

Defined in: node_modules/@types/react-native/index.d.ts:4332

Defined in: node_modules/@types/react-native/index.d.ts:4332

___

### getScrollResponder

• **getScrollResponder**: () => *undefined* \| *null* \| *Element*

Provides a handle to the underlying scroll responder.

#### Type declaration:

▸ (): *undefined* \| *null* \| *Element*

**Returns:** *undefined* \| *null* \| *Element*

Defined in: node_modules/@types/react-native/index.d.ts:4327

Defined in: node_modules/@types/react-native/index.d.ts:4327

___

### getScrollableNode

• **getScrollableNode**: () => *any*

#### Type declaration:

▸ (): *any*

**Returns:** *any*

Defined in: node_modules/@types/react-native/index.d.ts:4334

Defined in: node_modules/@types/react-native/index.d.ts:4334

___

### props

• `Readonly` **props**: *Readonly*<FlatListProps<ItemT\>\> & *Readonly*<{ `children?`: ReactNode  }\>

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:502

___

### recordInteraction

• **recordInteraction**: () => *void*

Tells the list an interaction has occurred, which should trigger viewability calculations,
e.g. if waitForInteractions is true and the user has not scrolled. This is typically called
by taps on items or by navigation actions.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:4317

Defined in: node_modules/@types/react-native/index.d.ts:4317

___

### refs

• **refs**: *object*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:508

___

### scrollToEnd

• **scrollToEnd**: (`params?`: { `animated?`: *undefined* \| *null* \| *boolean*  }) => *void*

Scrolls to the end of the content. May be janky without `getItemLayout` prop.

#### Type declaration:

▸ (`params?`: { `animated?`: *undefined* \| *null* \| *boolean*  }): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`params?` | *object* |
`params.animated?` | *undefined* \| *null* \| *boolean* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:4287

Defined in: node_modules/@types/react-native/index.d.ts:4287

___

### scrollToIndex

• **scrollToIndex**: (`params`: { `animated?`: *undefined* \| *null* \| *boolean* ; `index`: *number* ; `viewOffset?`: *undefined* \| *number* ; `viewPosition?`: *undefined* \| *number*  }) => *void*

Scrolls to the item at the specified index such that it is positioned in the viewable area
such that viewPosition 0 places it at the top, 1 at the bottom, and 0.5 centered in the middle.
Cannot scroll to locations outside the render window without specifying the getItemLayout prop.

#### Type declaration:

▸ (`params`: { `animated?`: *undefined* \| *null* \| *boolean* ; `index`: *number* ; `viewOffset?`: *undefined* \| *number* ; `viewPosition?`: *undefined* \| *number*  }): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *object* |
`params.animated?` | *undefined* \| *null* \| *boolean* |
`params.index` | *number* |
`params.viewOffset?` | *undefined* \| *number* |
`params.viewPosition?` | *undefined* \| *number* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:4294

Defined in: node_modules/@types/react-native/index.d.ts:4294

___

### scrollToItem

• **scrollToItem**: (`params`: { `animated?`: *undefined* \| *null* \| *boolean* ; `item`: ItemT ; `viewPosition?`: *undefined* \| *number*  }) => *void*

Requires linear scan through data - use `scrollToIndex` instead if possible.
May be janky without `getItemLayout` prop.

#### Type declaration:

▸ (`params`: { `animated?`: *undefined* \| *null* \| *boolean* ; `item`: ItemT ; `viewPosition?`: *undefined* \| *number*  }): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *object* |
`params.animated?` | *undefined* \| *null* \| *boolean* |
`params.item` | ItemT |
`params.viewPosition?` | *undefined* \| *number* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:4305

Defined in: node_modules/@types/react-native/index.d.ts:4305

___

### scrollToOffset

• **scrollToOffset**: (`params`: { `animated?`: *undefined* \| *null* \| *boolean* ; `offset`: *number*  }) => *void*

Scroll to a specific content pixel offset, like a normal `ScrollView`.

#### Type declaration:

▸ (`params`: { `animated?`: *undefined* \| *null* \| *boolean* ; `offset`: *number*  }): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *object* |
`params.animated?` | *undefined* \| *null* \| *boolean* |
`params.offset` | *number* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:4310

Defined in: node_modules/@types/react-native/index.d.ts:4310

___

### setNativeProps

• **setNativeProps**: (`props`: { [key: string]: *any*;  }) => *void*

#### Type declaration:

▸ (`props`: { [key: string]: *any*;  }): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:4337

Defined in: node_modules/@types/react-native/index.d.ts:4337

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<FlatListProps<ItemT\>\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<FlatListProps<ItemT\>\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:747

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<FlatListProps<ItemT\>\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<FlatListProps<ItemT\>\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:775

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

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<FlatListProps<ItemT\>\>, `prevState`: *Readonly*<{}\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<FlatListProps<ItemT\>\> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<FlatListProps<ItemT\>\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<FlatListProps<ItemT\>\> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<FlatListProps<ItemT\>\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<FlatListProps<ItemT\>\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:760

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

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<FlatListProps<ItemT\>\>, `prevState`: *Readonly*<{}\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<FlatListProps<ItemT\>\> |
`prevState` | *Readonly*<{}\> |

**Returns:** *any*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:680

___

### render

▸ **render**(): ReactNode

**Returns:** ReactNode

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:495

___

### setState

▸ **setState**<K\>(`state`: *null* \| {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<FlatListProps<ItemT\>\>) => *null* \| {} \| *Pick*<{}, K\> \| *Pick*<{}, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *never* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *null* \| {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<FlatListProps<ItemT\>\>) => *null* \| {} \| *Pick*<{}, K\> \| *Pick*<{}, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:489

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<FlatListProps<ItemT\>\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<FlatListProps<ItemT\>\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:634
