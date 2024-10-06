import {useLocalSearchParams, useNavigation} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {View, Button, ScrollView} from "react-native";
import {useEffect} from "react";

import MatchesButton from "@components/MatchesButton";
import EntityPile from "@components/EntityPile";
import useGame from "@hooks/useGame";

const Game = () => {
    const navigation = useNavigation();
    const {n, m, firstMove} = useLocalSearchParams();
    const {
        matches,
        playerScore,
        computerScore,
        isPlayerMove,
        handlePress,
        handleGameRestart
    } = useGame(Number(n), Number(m), firstMove === "player");

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={handleGameRestart}
                    title="Restart"
                    color="#24786D"
                />
            )
        });
    }, [navigation]);

    return (
        <SafeAreaView className="w-full h-full bg-[#E0F2F1]">
            <ScrollView className="px-5">
                <View className="flex-row justify-evenly mb-12">
                    <EntityPile entityName="you" score={playerScore}/>
                    <EntityPile entityName="enemy" score={computerScore}/>
                </View>

                <View className="flex-wrap flex-row justify-start">
                    {Array.from({length: Math.min(Number(m), 2 * Number(n) + 1)}, (_, i) => (
                        <MatchesButton key={i} numberOfMatches={i + 1} onPress={() => handlePress(i + 1)}
                                       disabled={!isPlayerMove || i >= matches}/>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Game;
