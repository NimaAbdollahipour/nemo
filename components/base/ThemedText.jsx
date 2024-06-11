import { Text } from "react-native"
import { useThemeColor } from "../../hooks/useThemeColor"

const ThemedText = ({children, bold})=>{
    const colors = useThemeColor()

    return(
        <Text style={{fontWeight:bold?'bold':'normal', color:colors.text}}>{children}</Text>
    )
}

export default ThemedText