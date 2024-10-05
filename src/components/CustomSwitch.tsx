import {Switch, Text, View} from 'react-native';

type CustomSwitchProps = {
    title: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const CustomSwitch = ({title, value, onValueChange}: CustomSwitchProps) => {
    return (
        <View className={"flex-row items-center justify-between mb-5"}>
            <Text className="text-base text-black font-pmedium">{title}</Text>
            <Switch
                value={value}
                onValueChange={onValueChange}
            />
        </View>
    );
};

export default CustomSwitch;