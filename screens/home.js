import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/title'
import 'react-native-gesture-handler'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Title/>
        <View style={style.bannerContainer}>
            <Image source={{uri: 'https://test.tt-soft.com/wp-content/uploads/2022/04/wordpress-website-tools.jpg'}}
                style={styles.banner}
                resizeMode="contain"
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home

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
})