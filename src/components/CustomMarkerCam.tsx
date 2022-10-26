import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import * as Animatable from "react-native-animatable";
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;


export const CustomMarkerCam = () => {
  return (
    <View style={styles.rectangleContainer}>
    <View style={styles.topOverlay}>
        
    </View>

    <View style={{ flexDirection: "row" }}>
        <View style={styles.leftAndRightOverlay} />

        <View style={styles.rectangle}>
            {/* <Icon
                name="scan-outline"
                size={SCREEN_WIDTH * 0.73}
                color={iconScanColor}
            />
            <Animatable.View
                style={styles.scanBar}
                direction="alternate-reverse"
                iterationCount="infinite"
                duration={1700}
                easing="linear"
                animation=""
                // animation={this.makeSlideOutTranslation(
                // "translateY",
                // SCREEN_WIDTH * -0.54
                // )}
            /> */}
        </View>

        <View style={styles.leftAndRightOverlay} />
    </View>

    <View style={styles.bottomOverlay} />
    </View>
  )
}

const overlayColor = "rgba(0,0,0,0.65)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "red";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";

const iconScanColor = "white";

const styles = StyleSheet.create({
    rectangleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
      },
    
      rectangle: {
        height: rectDimensions,
        width: rectDimensions,
        borderWidth: rectBorderWidth,
        borderColor: 'transparent',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
      },
    
      topOverlay: {
        flex: 1,
        height: SCREEN_WIDTH,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor,
        justifyContent: "center",
        alignItems: "center"
      },
    
      bottomOverlay: {
        flex: 1,
        height: SCREEN_WIDTH,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor,
        paddingBottom: SCREEN_WIDTH * 0.25
      },
    
      leftAndRightOverlay: {
        height: SCREEN_WIDTH * 0.65,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor
      },
    
      scanBar: {
        width: scanBarWidth,
        height: scanBarHeight,
        backgroundColor: scanBarColor
      }
});
export default CustomMarkerCam;
