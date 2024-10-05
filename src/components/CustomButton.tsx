import {Text, TouchableOpacity} from 'react-native';

type CustomButtonProps = {
    title: string;
    onPress: () => void;
}

const CustomButton = ({title, onPress}: CustomButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} className="bg-[#24786D] rounded-xl w-full">
            <Text className="text-white text-center font-psemibold py-3 text-base">{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;