import {Text, TouchableOpacity, View} from 'react-native';

type MatchesButtonProps = {
    numberOfMatches: number;
    disabled?: boolean;
    onPress: () => void;
}

const MatchesButton = ({numberOfMatches, disabled, onPress}: MatchesButtonProps) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress}
                          className={`${disabled ? "opacity-50" : "opacity-100"} bg-[#227B94] m-1 rounded-full`}>
            <View className="w-16 h-16 rounded-full border-2 border-[#33372C] justify-center items-center shadow-md">
                <Text className="text-white text-lg font-psemibold">{numberOfMatches}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MatchesButton;
