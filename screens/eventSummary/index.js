import React from 'react';
import {StyleSheet} from 'react-native';
import ContainerSafeView from '../../components/container';
import {ScrollView} from 'react-native-gesture-handler';
import Section from '../../components/section';
import StyledText from '../../components/styledText';

const EventSummaryScreen = ({navigation}) => {
  return (
    <ContainerSafeView>
      <ScrollView style={styles.container}>
        <Section>
          <StyledText>Pets</StyledText>
          {pets.length > 0 &&
            pets.map(pet => <StyledImage uri={pet.img} circle />)}
        </Section>
      </ScrollView>
    </ContainerSafeView>
  );
};

export default EventSummaryScreen;
const styles = StyleSheet.create({container: {flex: 1}});
