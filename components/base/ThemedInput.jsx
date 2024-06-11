import { TextInput } from "react-native"
import { useThemeColor } from "../../hooks/useThemeColor"

const ThemedInput = ({value, onChangeText, placeholder,  multiline})=>{
    const colors = useThemeColor()

    let selectedColors;

    return(
        <TextInput style={{
            padding:10, 
            borderRadius:10, 
            backgroundColor:colors.elevated,
            color:colors.text,
            width:'100%',
            textAlignVertical:multiline? 'top' : 'center',
            height:multiline ? 96 : 48
        }} placeholderTextColor={colors.text} multiline={multiline} onChangeText={onChangeText} placeholder={placeholder}/>
    )
}

export default ThemedInput