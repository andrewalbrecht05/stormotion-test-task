import {useEffect, useState} from "react";
import {Alert} from "react-native";
import {router} from "expo-router";
import {computerMove} from "@utils/logic";

const useGame = (n: number, m: number, firstMove: boolean) => {
    const [matches, setMatches] = useState(2 * Number(n) + 1);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [isPlayerMove, setIsPlayerMove] = useState(firstMove);

    const handlePress = (num: number) => {
        setMatches(matches - num);
        setPlayerScore(playerScore + num);
        setIsPlayerMove(!isPlayerMove);
    }

    const handleGameRestart = () => {
        setMatches(2 * Number(n) + 1);
        setPlayerScore(0);
        setComputerScore(0);
        setIsPlayerMove(firstMove);
    }

    const handleGameOver = () => {
        const isPlayerWinner = playerScore % 2 === 0 && computerScore % 2 !== 0;

        Alert.alert("Game over", `You ${isPlayerWinner ? "won!🥳🥳🥳" : "lost😢😢😢. "}`, [
            {
                text: 'Restart',
                onPress: () => {
                    console.log('Restart pressed');
                    handleGameRestart();
                },
            },
            {
                text: 'Exit',
                onPress: () => {
                    console.log('Exit Pressed');
                    router.back();
                },
                style: 'cancel',
            }
        ]);
    };

    useEffect(() => {
        console.log("Start");
        console.log(matches);
        console.log(isPlayerMove);
        if (matches <= 0)
            return handleGameOver();
        if (isPlayerMove) return;

        const move = computerMove(matches, m, computerScore);


        setTimeout(() => {
            setMatches(matches - move);
            setComputerScore(computerScore + move);
            setIsPlayerMove(!isPlayerMove);
        }, 1000)
    }, [isPlayerMove]);

    return {
        matches,
        playerScore,
        computerScore,
        isPlayerMove,
        handlePress,
        handleGameRestart,
    };
}

export default useGame;