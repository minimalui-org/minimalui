# Interface: Dimensions

Initial dimensions are set before `runApplication` is called so they should
be available before any other require's are run, but may be updated later.

Note: Although dimensions are available immediately, they may change (e.g
due to device rotation) so any rendering logic or styles that depend on
these constants should try to call this function on every render, rather
than caching the value (for example, using inline styles rather than
setting a value in a `StyleSheet`).

Example: `const {height, width} = Dimensions.get('window');`

**`param`** Name of dimension as defined when calling `set`.

**`returns`** Value for the dimension.

**`see`** https://reactnative.dev/docs/dimensions#content

## Methods

### addEventListener

▸ **addEventListener**(`type`: *change*, `handler`: (`\_\_namedParameters`: { `screen`: ScaledSize ; `window`: ScaledSize  }) => *void*): *void*

Add an event listener for dimension changes

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`type` | *change* | the type of event to listen to   |
`handler` | (`\_\_namedParameters`: { `screen`: ScaledSize ; `window`: ScaledSize  }) => *void* | the event handler    |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6103

___

### get

▸ **get**(`dim`: *window* \| *screen*): ScaledSize

Initial dimensions are set before runApplication is called so they
should be available before any other require's are run, but may be
updated later.
Note: Although dimensions are available immediately, they may
change (e.g due to device rotation) so any rendering logic or
styles that depend on these constants should try to call this
function on every render, rather than caching the value (for
example, using inline styles rather than setting a value in a
StyleSheet).
Example: const {height, width} = Dimensions.get('window');

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dim` | *window* \| *screen* | Name of dimension as defined when calling set.   |

**Returns:** ScaledSize

Value for the dimension.

Defined in: node_modules/@types/react-native/index.d.ts:6089

___

### removeEventListener

▸ **removeEventListener**(`type`: *change*, `handler`: (`\_\_namedParameters`: { `screen`: ScaledSize ; `window`: ScaledSize  }) => *void*): *void*

Remove an event listener

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`type` | *change* | the type of event   |
`handler` | (`\_\_namedParameters`: { `screen`: ScaledSize ; `window`: ScaledSize  }) => *void* | the event handler    |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6114

___

### set

▸ **set**(`dims`: { [key: string]: *any*;  }): *void*

This should only be called from native code by sending the didUpdateDimensions event.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dims` | *object* | Simple string-keyed object of dimensions to set    |

**Returns:** *void*

Defined in: node_modules/@types/react-native/index.d.ts:6095
