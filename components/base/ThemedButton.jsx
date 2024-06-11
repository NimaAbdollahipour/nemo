import { TouchableOpacity, Text } from "react-native"
import { useThemeColor } from "../../hooks/useThemeColor"

const ThemedButton = ({text, variant, onPress})=>{
    const colors = useThemeColor()

    let selectedColors;
    
    if(variant === 'primary'){
        selectedColors = {
            border:colors.text,
            background:colors.text,
            text:colors.elevated
        }
    }else{
        selectedColors = {
            border:colors.text,
            background:'transparent',
            text:colors.text
        }
    }

    return(
        <TouchableOpacity style={{
            padding:10, 
            borderRadius:10, 
            borderWidth:2, 
            borderColor:selectedColors.border, 
            backgroundColor:selectedColors.background, 
            display:'flex', 
            justifyContent:'center',
            alignItems:'center',
            width:'100%'
        }} onPress={onPress}>
            <Text style={{color:selectedColors.text, fontWeight:'bold'}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ThemedButton