# Class: ScrollView

## Hierarchy

* *ScrollViewBase*

  ↳ **ScrollView**

## Constructors

### constructor

\+ **new ScrollView**(`props`: ScrollViewProps \| *Readonly*<ScrollViewProps\>): [*ScrollView*](scrollview.md)

#### Parameters:

Name | Type |
:------ | :------ |
`props` | ScrollViewProps \| *Readonly*<ScrollViewProps\> |

**Returns:** [*ScrollView*](scrollview.md)

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:477

\+ **new ScrollView**(`props`: ScrollViewProps, `context`: *any*): [*ScrollView*](scrollview.md)

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
:------ | :------ |
`props` | ScrollViewProps |
`context` | *any* |

**Returns:** [*ScrollView*](scrollview.md)

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

• `Readonly` **props**: *Readonly*<ScrollViewProps\> & *Readonly*<{ `children?`: ReactNode  }\>

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:502

___

### refs

• **refs**: *object*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:508

___

### scrollWithoutAnimationTo

• `Optional` **scrollWithoutAnimationTo**: *undefined* \| (`y`: *number*, `x`: *number*) => *void*

**`deprecated`** Use scrollTo instead

Defined in: node_modules/@types/react-native/index.d.ts:6913

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<ScrollViewProps\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<ScrollViewProps\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:747

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<ScrollViewProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<ScrollViewProps\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:775

___

### addListenerOn

▸ **addListenerOn**(`eventEmitter`: *any*, `eventType`: *string*, `listener`: () => *any*, `context`: *any*): *void*

Special form of calling `addListener` that *guarantees* that a
subscription *must* be tied to a component instance, and therefore will
be cleaned up when the component is unmounted. It is impossible to create
the subscription and pass it in - this method must be the one to create
the subscription and therefore can guarantee it is retained in a way that
will be cleaned up.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`eventEmitter` | *any* | emitter to subscribe to.   |
`eventType` | *string* | Type of event to listen to.   |
`listener` | () => *any* | Function to invoke when event occurs.   |
`context` | *any* | Object to use as listener context.    |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:5464

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

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<ScrollViewProps\>, `prevState`: *Readonly*<{}\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<ScrollViewProps\> |
`prevState` | *Readonly*<{}\> |
`snapshot?` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:686

___

### componentWillMount

▸ **componentWillMount**(): *void*

`componentWillMount` is the closest thing to a  standard "constructor" for
React components.

The `keyboardWillShow` is called before input focus.

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6406

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<ScrollViewProps\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<ScrollViewProps\> |
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

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<ScrollViewProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<ScrollViewProps\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:760

___

### flashScrollIndicators

▸ **flashScrollIndicators**(): *void*

Displays the scroll indicators momentarily.

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6895

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

### getInnerViewNode

▸ **getInnerViewNode**(): *any*

**Returns:** *any*

Defined in: node_modules/@types/react-native/index.d.ts:6908

___

### getScrollResponder

▸ **getScrollResponder**(): ScrollResponderMixin

Returns a reference to the underlying scroll responder, which supports
operations like `scrollTo`. All ScrollView-like components should
implement this method so that they can be composed while providing access
to the underlying scroll responder's methods.

**Returns:** ScrollResponderMixin

Defined in: node_modules/@types/react-native/index.d.ts:6903

___

### getScrollableNode

▸ **getScrollableNode**(): *any*

**Returns:** *any*

Defined in: node_modules/@types/react-native/index.d.ts:6905

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<ScrollViewProps\>, `prevState`: *Readonly*<{}\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<ScrollViewProps\> |
`prevState` | *Readonly*<{}\> |

**Returns:** *any*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:680

___

### render

▸ **render**(): ReactNode

**Returns:** ReactNode

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:495

___

### scrollResponderGetScrollableNode

▸ **scrollResponderGetScrollableNode**(): *any*

Returns the node that represents native view that can be scrolled.
Components can pass what node to use by defining a `getScrollableNode`
function otherwise `this` is used.

**Returns:** *any*

Defined in: node_modules/@types/react-native/index.d.ts:6340

___

### scrollResponderHandleMomentumScrollBegin

▸ **scrollResponderHandleMomentumScrollBegin**(`e`: *ScrollResponderEvent*): *void*

Invoke this from an `onMomentumScrollBegin` event.

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6295

___

### scrollResponderHandleMomentumScrollEnd

▸ **scrollResponderHandleMomentumScrollEnd**(`e`: *ScrollResponderEvent*): *void*

Invoke this from an `onMomentumScrollEnd` event.

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6300

___

### scrollResponderHandleResponderGrant

▸ **scrollResponderHandleResponderGrant**(`e`: *ScrollResponderEvent*): *void*

Invoke this from an `onResponderGrant` event.

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6276

___

### scrollResponderHandleResponderReject

▸ **scrollResponderHandleResponderReject**(): *any*

Invoke this from an `onResponderReject` event.

Some other element is not yielding its role as responder. Normally, we'd
just disable the `UIScrollView`, but a touch has already began on it, the
`UIScrollView` will not accept being disabled after that. The easiest
solution for now is to accept the limitation of disallowing this
altogether. To improve this, find a way to disable the `UIScrollView` after
a touch has already started.

**Returns:** *any*

Defined in: node_modules/@types/react-native/index.d.ts:6240

___

### scrollResponderHandleResponderRelease

▸ **scrollResponderHandleResponderRelease**(`e`: *ScrollResponderEvent*): *void*

Invoke this from an `onResponderRelease` event.

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6269

___

### scrollResponderHandleScroll

▸ **scrollResponderHandleScroll**(`e`: *ScrollResponderEvent*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6271

___

### scrollResponderHandleScrollBeginDrag

▸ **scrollResponderHandleScrollBeginDrag**(`e`: *ScrollResponderEvent*): *void*

Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
animation, and there's not an easy way to distinguish a drag vs. stopping
momentum.

Invoke this from an `onScrollBeginDrag` event.

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6285

___

### scrollResponderHandleScrollEndDrag

▸ **scrollResponderHandleScrollEndDrag**(`e`: *ScrollResponderEvent*): *void*

Invoke this from an `onScrollEndDrag` event.

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6290

___

### scrollResponderHandleScrollShouldSetResponder

▸ **scrollResponderHandleScrollShouldSetResponder**(): *boolean*

Invoke this from an `onScroll` event.

**Returns:** *boolean*

Defined in: node_modules/@types/react-native/index.d.ts:6188

___

### scrollResponderHandleStartShouldSetResponder

▸ **scrollResponderHandleStartShouldSetResponder**(): *boolean*

Merely touch starting is not sufficient for a scroll view to become the
responder. Being the "responder" means that the very next touch move/end
event will result in an action/movement.

Invoke this from an `onStartShouldSetResponder` event.

`onStartShouldSetResponder` is used when the next move/end will trigger
some UI movement/action, but when you want to yield priority to views
nested inside of the view.

There may be some cases where scroll views actually should return `true`
from `onStartShouldSetResponder`: Any time we are detecting a standard tap
that gives priority to nested views.

- If a single tap on the scroll view triggers an action such as
  recentering a map style view yet wants to give priority to interaction
  views inside (such as dropped pins or labels), then we would return true
  from this method when there is a single touch.

- Similar to the previous case, if a two finger "tap" should trigger a
  zoom, we would check the `touches` count, and if `>= 2`, we would return
  true.

**Returns:** *boolean*

Defined in: node_modules/@types/react-native/index.d.ts:6215

___

### scrollResponderHandleStartShouldSetResponderCapture

▸ **scrollResponderHandleStartShouldSetResponderCapture**(`e`: *ScrollResponderEvent*): *boolean*

There are times when the scroll view wants to become the responder
(meaning respond to the next immediate `touchStart/touchEnd`), in a way
that *doesn't* give priority to nested views (hence the capture phase):

- Currently animating.
- Tapping anywhere that is not the focused input, while the keyboard is
  up (which should dismiss the keyboard).

Invoke this from an `onStartShouldSetResponderCapture` event.

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *boolean*

Defined in: node_modules/@types/react-native/index.d.ts:6228

___

### scrollResponderHandleTerminationRequest

▸ **scrollResponderHandleTerminationRequest**(): *boolean*

We will allow the scroll view to give up its lock iff it acquired the lock
during an animation. This is a very useful default that happens to satisfy
many common user experiences.

- Stop a scroll on the left edge, then turn that into an outer view's
  backswipe.
- Stop a scroll mid-bounce at the top, continue pulling to have the outer
  view dismiss.
- However, without catching the scroll view mid-bounce (while it is
  motionless), if you drag far enough for the scroll view to become
  responder (and therefore drag the scroll view a bit), any backswipe
  navigation of a swipe gesture higher in the view hierarchy, should be
  rejected.

**Returns:** *boolean*

Defined in: node_modules/@types/react-native/index.d.ts:6257

___

### scrollResponderHandleTouchEnd

▸ **scrollResponderHandleTouchEnd**(`e`: *ScrollResponderEvent*): *void*

Invoke this from an `onTouchEnd` event.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`e` | *ScrollResponderEvent* | Event.    |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6264

___

### scrollResponderHandleTouchMove

▸ **scrollResponderHandleTouchMove**(`e`: *ScrollResponderEvent*): *void*

Invoke this from an `onTouchMove` event.

Since we know that the `SimpleEventPlugin` occurs later in the plugin
order, after `ResponderEventPlugin`, we can detect that we were *not*
permitted to be the responder (presumably because a contained view became
responder). The `onResponderReject` won't fire in that case - it only
fires when a *current* responder rejects our request.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`e` | *ScrollResponderEvent* | Touch Start event.    |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6326

___

### scrollResponderHandleTouchStart

▸ **scrollResponderHandleTouchStart**(`e`: *ScrollResponderEvent*): *void*

Invoke this from an `onTouchStart` event.

Since we know that the `SimpleEventPlugin` occurs later in the plugin
order, after `ResponderEventPlugin`, we can detect that we were *not*
permitted to be the responder (presumably because a contained view became
responder). The `onResponderReject` won't fire in that case - it only
fires when a *current* responder rejects our request.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`e` | *ScrollResponderEvent* | Touch Start event.    |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6313

___

### scrollResponderInputMeasureAndScrollToKeyboard

▸ **scrollResponderInputMeasureAndScrollToKeyboard**(`left`: *number*, `top`: *number*, `width`: *number*, `height`: *number*): *void*

The calculations performed here assume the scroll view takes up the entire
screen - even if has some content inset. We then measure the offsets of the
keyboard, and compensate both for the scroll view's "contentInset".

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`left` | *number* | Position of input w.r.t. table view.   |
`top` | *number* | Position of input w.r.t. table view.   |
`width` | *number* | Width of the text input.   |
`height` | *number* | Height of the text input.    |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6396

___

### scrollResponderIsAnimating

▸ **scrollResponderIsAnimating**(): *boolean*

A helper function for this class that lets us quickly determine if the
view is currently animating. This is particularly useful to know when
a touch has just started or ended.

**Returns:** *boolean*

Defined in: node_modules/@types/react-native/index.d.ts:6333

___

### scrollResponderKeyboardDidHide

▸ **scrollResponderKeyboardDidHide**(`e`: *ScrollResponderEvent*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6442

___

### scrollResponderKeyboardDidShow

▸ **scrollResponderKeyboardDidShow**(`e`: *ScrollResponderEvent*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6440

___

### scrollResponderKeyboardWillHide

▸ **scrollResponderKeyboardWillHide**(`e`: *ScrollResponderEvent*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6438

___

### scrollResponderKeyboardWillShow

▸ **scrollResponderKeyboardWillShow**(`e`: *ScrollResponderEvent*): *void*

Warning, this may be called several times for a single keyboard opening.
It's best to store the information in this method and then take any action
at a later point (either in `keyboardDidShow` or other).

Here's the order that events occur in:
- focus
- willShow {startCoordinates, endCoordinates} several times
- didShow several times
- blur
- willHide {startCoordinates, endCoordinates} several times
- didHide several times

The `ScrollResponder` providesModule callbacks for each of these events.
Even though any user could have easily listened to keyboard events
themselves, using these `props` callbacks ensures that ordering of events
is consistent - and not dependent on the order that the keyboard events are
subscribed to. This matters when telling the scroll view to scroll to where
the keyboard is headed - the scroll responder better have been notified of
the keyboard destination before being instructed to scroll to where the
keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
will work.

WARNING: These callbacks will fire even if a keyboard is displayed in a
different navigation pane. Filter out the events to determine if they are
relevant to you. (For example, only if you receive these callbacks after
you had explicitly focused a node etc).

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6436

___

### scrollResponderScrollNativeHandleToKeyboard

▸ **scrollResponderScrollNativeHandleToKeyboard**(`nodeHandle`: *any*, `additionalOffset?`: *number*, `preventNegativeScrollOffset?`: *boolean*): *void*

This method should be used as the callback to onFocus in a TextInputs'
parent view. Note that any module using this mixin needs to return
the parent view's ref in getScrollViewRef() in order to use this method.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nodeHandle` | *any* | The TextInput node handle   |
`additionalOffset?` | *number* | The scroll view's top "contentInset".        Default is 0.   |
`preventNegativeScrollOffset?` | *boolean* | - |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6380

___

### scrollResponderScrollTo

▸ **scrollResponderScrollTo**(`x?`: *number* \| { `animated?`: *undefined* \| *boolean* ; `x?`: *undefined* \| *number* ; `y?`: *undefined* \| *number*  }, `y?`: *number*, `animated?`: *boolean*): *void*

A helper function to scroll to a specific point  in the scrollview.
This is currently used to help focus on child textviews, but can also
be used to quickly scroll to any element we want to focus. Syntax:

scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})

Note: The weird argument signature is due to the fact that, for historical reasons,
the function also accepts separate arguments as an alternative to the options object.
This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.

#### Parameters:

Name | Type |
:------ | :------ |
`x?` | *number* \| { `animated?`: *undefined* \| *boolean* ; `x?`: *undefined* \| *number* ; `y?`: *undefined* \| *number*  } |
`y?` | *number* |
`animated?` | *boolean* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6353

___

### scrollResponderTextInputFocusError

▸ **scrollResponderTextInputFocusError**(`e`: *ScrollResponderEvent*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *ScrollResponderEvent* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6398

___

### scrollResponderZoomTo

▸ **scrollResponderZoomTo**(`rect`: { `animated?`: *undefined* \| *boolean* ; `height`: *number* ; `width`: *number* ; `x`: *number* ; `y`: *number*  }, `animated?`: *boolean*): *void*

A helper function to zoom to a specific rect in the scrollview. The argument has the shape
{x: number; y: number; width: number; height: number; animated: boolean = true}

**`platform`** ios

#### Parameters:

Name | Type |
:------ | :------ |
`rect` | *object* |
`rect.animated?` | *undefined* \| *boolean* |
`rect.height` | *number* |
`rect.width` | *number* |
`rect.x` | *number* |
`rect.y` | *number* |
`animated?` | *boolean* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6365

___

### scrollTo

▸ **scrollTo**(`y?`: *number* \| { `animated?`: *undefined* \| *boolean* ; `x?`: *undefined* \| *number* ; `y?`: *undefined* \| *number*  }, `x?`: *number*, `animated?`: *boolean*): *void*

Scrolls to a given x, y offset, either immediately or with a smooth animation.
Syntax:

scrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})

Note: The weird argument signature is due to the fact that, for historical reasons,
the function also accepts separate arguments as an alternative to the options object.
This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.

#### Parameters:

Name | Type |
:------ | :------ |
`y?` | *number* \| { `animated?`: *undefined* \| *boolean* ; `x?`: *undefined* \| *number* ; `y?`: *undefined* \| *number*  } |
`x?` | *number* |
`animated?` | *boolean* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6880

___

### scrollToEnd

▸ **scrollToEnd**(`options?`: { `animated`: *boolean*  }): *void*

A helper function that scrolls to the end of the scrollview;
If this is a vertical ScrollView, it scrolls to the bottom.
If this is a horizontal ScrollView scrolls to the right.

The options object has an animated prop, that enables the scrolling animation or not.
The animated prop defaults to true

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | *object* |
`options.animated` | *boolean* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6890

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

Defined in: node_modules/@types/react-native/index.d.ts:6921

___

### setState

▸ **setState**<K\>(`state`: *null* \| {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<ScrollViewProps\>) => *null* \| {} \| *Pick*<{}, K\> \| *Pick*<{}, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *never* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *null* \| {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<ScrollViewProps\>) => *null* \| {} \| *Pick*<{}, K\> \| *Pick*<{}, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:489

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<ScrollViewProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<ScrollViewProps\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react-native/node_modules/@types/react/index.d.ts:634
