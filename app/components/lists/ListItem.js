import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import React from 'react'

import { GestureHandlerRootView } from "react-native-gesture-handler"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/colors'
import AppText from '../AppText'



// </Swipeable> 
function ListItem({
    title, subTitle, image,
    IconComponent, onPress, renderRightActions }) {

    const Swipeable = require('react-native-gesture-handler/Swipeable').default;

    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light} onPress={onPress}>
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View styles={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>
                                {title}
                            </AppText>
                            {subTitle && (
                                <AppText
                                    style={styles.subTitle}
                                    numberOfLines={2}>
                                    {subTitle}
                                </AppText>
                            )}
                        </View>
                        <MaterialCommunityIcons
                            name='chevron-right'
                            color={colors.medium}
                            size={25}
                        />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "500",
        color: colors.black,
    }
})

export default ListItem
