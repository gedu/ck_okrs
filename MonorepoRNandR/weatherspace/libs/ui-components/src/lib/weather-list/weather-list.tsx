import { LocationItem, buildIconUrl } from '@weatherspace/models';
import { FlatList, View, Text, Image, type ListRenderItem } from 'react-native';
import { ActivityIndicator } from '../activity-indicator/activity-indicator';

type WeatherListProps = {
  data: Array<LocationItem>;
  isLoading: boolean;
  onItemPress: (id: string) => void;
};

const WeatherItemList: ListRenderItem<LocationItem> = ({ item }) => {
  return (
    <View>
      <Image
        style={{ width: 40, height: 50 }}
        source={{ uri: buildIconUrl(item.weather.icon) }}
      />
      <Text>{item.name}</Text>
      <Text>{item.main.temp}</Text>
    </View>
  );
};

export function WeatherList({
  data,
  isLoading,
  onItemPress,
}: WeatherListProps) {
  if (isLoading) {
    return <ActivityIndicator />;
  }
  return <FlatList data={data} renderItem={WeatherItemList} />;
}

export default WeatherList;
