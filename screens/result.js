import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Result = (navigation, route) => {
    const {score} = route.params
    const resultBanner= score>10?"https://wptablebuilder.com/wp-content/uploads/2022/05/Best_WordPress_Quiz_Plugins_WPTB1920x960.png": "https://img.freepik.com/vector-gratis/concepto-abstracto-presentacion-digital_335657-3042.jpg"
    return (
        <View style={styles.container}>
            <Title titleText='QUIZZLER'/>
            <Text style={styles.scoreValue}>{score}</Text>
            <View style={style.bannerContainer}>
                <Image source={{uri: resultBanner}}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
                <Text style={styles.buttonText}>HOME</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Result;

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button:{
        width: '100',
        backgroundColor: '#FBB181',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    scoreValue:{
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center',
    }
});