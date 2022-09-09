import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium}
                style={styles.icon} />}
            <TextInput
                {...otherProps}
                style={defaultStyles.text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkgrey,
        borderRadius: 25,
        flexDirection: "row",
        width: "95%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginTop: 4,
        marginRight: 10
    },
    AppTextInput: {
        color: colors.dark,
        fontSize: 18,
    }
})

export default AppTextInput