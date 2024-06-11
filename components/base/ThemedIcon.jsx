import { useThemeColor } from "../../hooks/useThemeColor"
import { Ionicons } from "@expo/vector-icons";

const ThemedIcon = ({name, small, onPress})=>{
    const colors = useThemeColor()

    return(
        <Ionicons name={name} size={small?24:32} color={colors.text} onPress={onPress}/>
    )
}

export default ThemedIcon