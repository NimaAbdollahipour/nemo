import { useThemeColor } from "../../hooks/useThemeColor"
import {View, Text, Pressable} from 'react-native'

const RadioButton = ({value, label, selected, onPress})=>{
    const colors = useThemeColor()

    return(
        <Pressable 
        onPress={()=>onPress(value)} 
        style={{
            display:'flex',
            flexDirection:'row', 
            alignItems:'center', 
            gap:10}}>
            <View style={{
                width:24, 
                height:24, 
                borderRadius:12, 
                borderWidth:2, 
                borderColor:colors.text, 
                padding:2}}>
                <View style={{
                    width:16, 
                    height:16, 
                    borderRadius:8, 
                    backgroundColor:selected===value?colors.text:'transparent'}}>
                </View>
            </View>
            <Text style={{color:colors.text}}>{label}</Text>
        </Pressable>
    )
}

export default RadioButton