import { TouchableOpacity } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor"

const ThemedCard = ({variant, onPress, onLongPress, children})=>{
    const colors = useThemeColor()

    let selectedColor;

    if(variant==="high"){
        selectedColor = colors.high
    }else if(variant==="low"){
        selectedColor = colors.low
    }else if(variant==="selected"){
        selectedColor = colors.selected
    }else if(variant==="warning"){
        selectedColor = colors.warning
    }else{
        selectedColor = colors.elevated
    }

    return(
        <TouchableOpacity 
        onPress={onPress && onPress()} 
        onLongPress={onLongPress && onLongPress()} 
        style={{
            backgroundColor:selectedColor,
            padding:10,
            borderRadius:10,
            width:'100%'
        }}>
            {children}
        </TouchableOpacity>
    )
}

export default ThemedCard