import {Text, View} from 'react-native';

type EntityPileProps = {
    entityName: string;
    score: number;
}

const EntityPile = ({entityName, score}: EntityPileProps) => {
    return (
        <View className={`bg-[#24786D] p-5 rounded-lg shadow-lg w-36`}>
            <Text className="font-pbold text-center text-white text-xl mb-2">{entityName}</Text>
            <Text className="text-center text-white text-3xl">{score}</Text>
        </View>
    );
};

export default EntityPile;
