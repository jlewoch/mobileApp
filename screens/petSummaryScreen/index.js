import React from 'react';
import {deviceWidth, deviceHeight} from '../../constants/dimensions';

import ContainerSafeView from '../../components/container';
import TextSection from '../../components/textSection';
import {ScrollView} from 'react-native-gesture-handler';
import StyledImage from '../../components/styledImage';
import StyledText from '../../components/styledText';
import Section from '../../components/section';
import Row from '../../components/row';
import colors from '../../constants/colors';

const PetSummaryScreen = ({navigation}) => {
  const pet = navigation.getParam('pet');
  return (
    <ContainerSafeView>
      <ScrollView style={{backgroundColor: 'gray', flex: 1}}>
        <StyledImage
          uri={pet.img}
          style={{width: deviceWidth, height: deviceHeight / 3}}
        />

        {/* general information section */}
        <Section style={{marginBottom: 10}}>
          <StyledText type="title3" style={{fontWeight: 'bold'}}>
            General Pet Information
          </StyledText>
          <Row style={{paddingVertical: 3}}>
            <StyledText type="headline" style={{color: colors.main}}>
              Name:
            </StyledText>
            <StyledText>{` ${pet.name}`}</StyledText>
          </Row>
          <Row style={{paddingVertical: 3}}>
            <StyledText type="headline" style={{color: colors.main}}>
              Breed:
            </StyledText>
            <StyledText>{` ${pet.breed}`}</StyledText>
          </Row>
          <Row style={{paddingVertical: 3}}>
            <StyledText type="headline" style={{color: colors.main}}>
              Age:
            </StyledText>
            <StyledText>{` ${pet.age}`}</StyledText>
          </Row>
          <Row style={{paddingVertical: 3}}>
            <StyledText type="headline" style={{color: colors.main}}>
              Microchipped:
            </StyledText>
            <StyledText>{pet.microchip ? ' Yes' : ' No'}</StyledText>
          </Row>
          <Row style={{paddingVertical: 3}}>
            <StyledText type="headline" style={{color: colors.main}}>
              House Trained:
            </StyledText>
            <StyledText>{pet.house_trained ? ' Yes' : ' No'}</StyledText>
          </Row>
          <Row style={{paddingVertical: 3}}>
            <StyledText type="headline" style={{color: colors.main}}>
              Nutered\Spayed:
            </StyledText>
            <StyledText>{pet.nutered_spayed ? ' Yes' : ' No'}</StyledText>
          </Row>
        </Section>
        <Section style={{marginBottom: 10}}>
          <TextSection label="About Pet" text={pet.about} />
        </Section>

        {/* social behaviour section */}
        <Section style={{marginBottom: 10}}>
          <StyledText type="title3" style={{fontWeight: 'bold'}}>
            Social Behavior
          </StyledText>

          <StyledText
            type="headline"
            style={{color: colors.main, marginBottom: 5, marginTop: 10}}>
            Can be around?
          </StyledText>
          {pet.around_child && <StyledText>Children</StyledText>}
          {pet.around_dog && <StyledText>Dogs</StyledText>}
          {pet.around_cat && <StyledText>Cats</StyledText>}
          <StyledText
            type="headline"
            style={{color: colors.main, marginBottom: 5, marginTop: 10}}>
            Can play with?
          </StyledText>
          {pet.play_child && <StyledText>Children</StyledText>}
          {pet.play_dog && <StyledText>Dogs</StyledText>}
          {pet.play_cat && <StyledText>Cats</StyledText>}
          {/* other information section */}
        </Section>
        <Section>
          <StyledText type="title3" style={{fontWeight: 'bold'}}>
            Aditional Information
          </StyledText>

          <TextSection label="Medication" text={pet.medication || 'N/A'} />
          <TextSection label="Vet Info" text={pet.vet_info || 'N/A'} />
          <TextSection label="Notes" text={pet.notes || 'N/A'} />
        </Section>
      </ScrollView>
    </ContainerSafeView>
  );
};

export default PetSummaryScreen;
