import {useEffect, useMemo, useState} from "react";
import {Alert} from "react-native";
import {router} from "expo-router";
import Computer from "@utils/logic";

const useGame = (n: number, m: number, firstMove: boolean) => {
    const [matches, setMatches] = useState(2 * Number(n) + 1);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [isPlayerMove, setIsPlayerMove] = useState(firstMove);
    const [isGameOver, setIsGameOver] = useState(false);

    const computer = useMemo(() => new Computer(2 * n + 1, m), [n, m]);

    const handlePress = (num: number) => {
        setMatches(prevMatches => prevMatches - num);
        setPlayerScore(prevScore => prevScore + num);
        setIsPlayerMove(prevMove => !prevMove);
    }

    const handleGameRestart = () => {
        setMatches(2 * n + 1);
        setPlayerScore(0);
        setComputerScore(0);
        setIsPlayerMove(firstMove);
        setIsGameOver(false);
    }

    const handleGameOver = () => {
        const isPlayerWinner = playerScore % 2 == 0;
        Alert.alert("Game over", `You ${isPlayerWinner ? "won!🥳🥳🥳" : "lost😢😢😢. "}`, [
            {
                text: 'Restart',
                onPress: handleGameRestart
            },
            {
                text: 'Exit',
                onPress: () => router.back(),
                style: 'cancel',
            }
        ]);
    };

    useEffect(() => {
        if (isGameOver) return;

        if (matches <= 0) {
            setIsGameOver(true);
            handleGameOver();
            return;
        }

        if (!isPlayerMove ) {
            const move = computer.makeMove(matches, playerScore);

            const timeout = setTimeout(() => {
                setMatches(prevMatches => prevMatches - move);
                setComputerScore(prevComputerScore => prevComputerScore + move);
                setIsPlayerMove(true);
            }, 1000);

            if( timeout )
                return () => clearTimeout(timeout);
        }
    }, [matches, isPlayerMove, isGameOver, playerScore]);

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