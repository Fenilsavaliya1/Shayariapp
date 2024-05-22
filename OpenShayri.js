import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, Pressable } from "react-native";
export const OpenShayri = ({route}) => {

    const {shayri,color,item} = route.params;
    const [plush, setplush] = useState(0);
    const [plush2, setplush2] = useState(0)
    
    const bgarr = [require('./img/img1.jpg'), require('./img/img2.jpg'), require('./img/img3.jpg'), require('./img/img4.jpg'), require('./img/img5.jpg'),
                   require('./img/img6.jpg'), require('./img/img7.jpg'), require('./img/img8.jpg'), require('./img/img9.jpg'), require('./img/img10.jpg'),
                   require('./img/img11.jpg'), require('./img/img12.jpg'), require('./img/img13.jpg'), require('./img/img14.jpg'), require('./img/img15.jpg'),
                   require('./img/img16.jpg'), require('./img/img17.jpg'), require('./img/img18.jpg'), require('./img/img19.jpg'), require('./img/img20.jpg'),
                   require('./img/img21.jpg'), require('./img/img22.jpg'), require('./img/img23.jpg'), require('./img/img24.jpg'), require('./img/img25.jpg'),   
                   require('./img/img26.jpg'), require('./img/img27.jpg'), require('./img/img28.jpg'), require('./img/img29.jpg'), require('./img/img30.jpg'),
                   require('./img/img31.jpg')
                  ]
    
   const txtcolor = ["white"]
    
    function increment() { 
        if (plush == bgarr.lenght - 1) {
            
            setplush(0)
        } else { 
            setplush(plush + 1);
        }
    }

    function increment2() { 
        if (plush2 == bgarr.lenght) {
            
            setplush2(0)
        } else { 
            setplush2(plush2 + 1);
        }
    }
    
    
   console.log(plush2)
    return(
        <>
        <View style={style.main}>
            <View style={[{backgroundColor:"white"},style.peta]}>
                <Text style={style.head}>{item}</Text>
                <Pressable style={style.bgperent} onPress={()=>{increment()}}>
                    <ImageBackground style={style.bg} source={bgarr[plush]} resizeMode="stretch">
                        <Text style={style.txt}> {shayri} </Text>
                    </ImageBackground>
                </Pressable>
                <Text style={style.footer}></Text>
            </View>
        </View>
        </>
    )
}
const style = StyleSheet.create({
    main:{
        height:"100%",
        backgroundColor:"black",
        justifyContent:"center",
    },
    peta:{
        height:"65%",
        width:"90%",
        alignSelf:"center",
        borderRadius:15,
        justifyContent:"space-between",
    },
    head:{
        height:"12.5%",
        // backgroundColor:"yellow",
        fontSize:30,
        textAlignVertical:"center",
        textAlign:"center",
        color:"black",
        fontWeight:"900",
    },
    bgperent:{
        height:"75%",
    },
    bg:{
        height:"100%",
        backgroundColor:"white",
    },
    txt:{
        height:"100%",
        width:"99%",
        fontSize:25,
        color:"white",
        textAlign:"center",
        padding:20,
        textAlignVertical:"center",
        alignSelf:"center",
        fontWeight:"900",
    },
    footer:{
        height:"12.5%",
        // backgroundColor:"yellow",
        fontSize:30,
        textAlignVertical:"center",
        textAlign:"center",
        color:"black",
        fontWeight:"900",
    },
})