import React from 'react';
import {StyleSheet} from 'react-native';
import ContainerSafeView from '../../components/container';
import {ScrollView} from 'react-native-gesture-handler';
import Section from '../../components/section';
import StyledText from '../../components/styledText';
import Row from '../../components/row';
import colors from '../../constants/colors';
import Card from '../../components/card';
import List from '../../components/list';
import Icon from '../../components/icon';

const EventSummaryScreen = ({navigation}) => {
  const {pets} = navigation.getParam('event');
  return (
    <ContainerSafeView style={{backgroundColor: colors.subText}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.container}>
        <Section>
          <StyledText type="title3" style={styles.label}>
            Request Information
          </StyledText>
          <Row style={styles.row}>
            <StyledText type="headline" style={styles.titleText}>
              Date:
            </StyledText>
            <StyledText>{` ${'test'}`}</StyledText>
          </Row>
          <Row style={styles.row}>
            <StyledText type="headline" style={styles.titleText}>
              Type:
            </StyledText>
            <StyledText>{` ${'test'}`}</StyledText>
          </Row>
          <Row style={{}}>
            <StyledText type="headline" style={styles.titleText}>
              Start Time:
            </StyledText>
            <StyledText>{` ${'test'}`}</StyledText>
          </Row>
          <Row style={styles.row}>
            <StyledText type="headline" style={styles.titleText}>
              End Time:
            </StyledText>
            <StyledText>{` ${'test'}`}</StyledText>
          </Row>
        </Section>
        <Section style={[styles.container, styles.bottom]}>
          <List
            label="Participating Pets"
            items={pets}
            card={(pet, idx) => (
              <Card
                key={idx}
                onPress={() => navigation.navigate('PetSummary', {pet})}
                title={pet.name}
                desc={pet.breed}
                details={pet.age}
                image
                imageSrc={pets.img && `${pet.owner}/${pet.img}`}
              />
            )}
          />
        </Section>
      </ScrollView>
    </ContainerSafeView>
  );
};
EventSummaryScreen.navigationOptions = ({navigation}) => ({
  title: 'Event Summary',
  headerLeft: () => (
    <Icon
      name="arrowleft"
      color="white"
      onPress={() => navigation.navigate('Dashboard')}
      style={{marginLeft: 15}}
    />
  ),
});
export default EventSummaryScreen;
const styles = StyleSheet.create({
  container: {flex: 1},
  row: {paddingVertical: 3},
  bottom: {marginTop: 10},
  titleText: {color: colors.main},
  label: {marginBottom: 5},
});
