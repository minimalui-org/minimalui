/**
 * React-Native cross-platform elevations: https://gist.github.com/mmazzarolo/84b36e89180a9ba22a32de5cdf813eb7
 * Based on https://ethercreative.github.io/react-native-shadow-generator/
 * The gist was buggy, Naeem fixed.
 *
 * Usage:
 * 1. Import "elevations" from this file
 *		import { elevations } from "config/elevations"
 * 2. Use it. Assuming you need an elevation of 2 (based on the Android
 *		elevation standard), doing the following will cast the same shadow
 *		on both platforms:
 *		return <View style={[{ width: 50, height: 50 }, elevations[2]]} />
 */
export declare const elevations: {}[];
export default elevations;
