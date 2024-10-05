import {Text, TextInput, View} from 'react-native';

type FormFieldProps = {
    title: string;
    placeholder: string;
    value: string;
    handleChange: (value: string) => void;
    errorMessage?: string;
}

const FormField = ({ title, value, placeholder, handleChange, errorMessage }: FormFieldProps) => {
    return (
        <View className={"space-y-2 mb-5"}>
            <Text className="text-base text-black font-pmedium">{title}</Text>
            <View className={`border-2 w-full h-16 px-4 bg-black-100 rounded-2xl flex-row items-center
                ${errorMessage ? 'border-red-500' : 'border-black-200'}`}>
                <TextInput
                    className="flex-1 text-zinc-700 font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChange}
                    keyboardType="numeric"
                />
            </View>
            <Text className="text-red-500 font-psemibold">{errorMessage}</Text>
        </View>
    );
};

export default FormField;
