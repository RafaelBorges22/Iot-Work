import React from 'react';
import { View, Text } from 'react-native';
import { indicatorStyles, colors } from '../styles/theme';

const PostureSectionIndicator = ({ title, angle, isAlert }) => {
  const indicatorColor = isAlert ? colors.ALERT : colors.SUCCESS; 
  
  return (
    <View style={indicatorStyles.sectionContainer}>
      <Text style={indicatorStyles.title}>{title}</Text>
      
      <View style={[indicatorStyles.circle, { borderColor: indicatorColor }]}>
        <Text style={indicatorStyles.angleValue}>{angle.toFixed(0)}°</Text>
      </View>
      <Text style={[indicatorStyles.statusText, { color: indicatorColor }]}>
        {isAlert ? 'INCORRETA' : 'IDEAL'}
      </Text>
    </View>
  );
};

export default PostureSectionIndicator;