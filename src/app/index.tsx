import {useState} from "react";
import {router} from "expo-router";
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from "react-native-safe-area-context";

import FormField from "@components/FormField";
import CustomButton from "@components/CustomButton";
import CustomSwitch from "@components/CustomSwitch";

const App = () => {
    const [n, setN] = useState("12");
    const [m, setM] = useState("3");
    const [isComputerFirst, setIsComputerFirst] = useState(false);
    const [errors, setErrors] = useState({n: "", m: ""});

    const handlePress = () => {
        if (validateFields()) {
            router.push({
                pathname: 'game',
                params: {
                    n,
                    m,
                    firstMove: isComputerFirst ? "computer" : "player",
                }
            });
        }
    }

    const validateFields = (): boolean => {
        let valid = true;
        let newErrors = {n: "", m: ""};

        if (!/^\d+$/.test(n)) {
            newErrors.n = "Please enter a whole number!";
            valid = false;
        } else if (Number(n) <= 0 || Number(n) > 100) {
            newErrors.n = "Please enter a number between 1 and 100!";
            valid = false;
        }

        if (!/^\d+$/.test(m)) {
            newErrors.m = "Please enter a whole number!";
            valid = false;
        } else if (Number(m) <= 0 || Number(m) > 100) {
            newErrors.m = "Please enter a number between 1 and 100!";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    return (
        <SafeAreaView className="w-full h-full px-5 flex-col space-y-4">
            <FormField title="Enter the amount of matches(2 * n + 1):" placeholder="n" value={n} handleChange={setN}
                       errorMessage={errors.n}/>
            <FormField title="Enter the number of matches allowed to take(1 to m):"
                       placeholder="m" value={m}
                       handleChange={setM} errorMessage={errors.m}/>
            <CustomSwitch title={"Computer goes first?: "} value={isComputerFirst} onValueChange={setIsComputerFirst}/>
            <CustomButton title="Start game" onPress={handlePress}/>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

export default App;
