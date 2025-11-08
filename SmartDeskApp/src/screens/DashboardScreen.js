import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 

import { dashboardStyles, colors } from '../styles/theme'; 
import PostureSectionIndicator from '../components/PostureIndicator'; 

const DashboardScreen = () => {
  const angleThoracic = 30; 
  const angleLumbar = 20;   
  
  const isAlertThoracic = angleThoracic > 35; 
  const isAlertLumbar = angleLumbar > 25; 
  const isAlertGeneral = isAlertThoracic || isAlertLumbar;

  const alertMessage = "ALERTA: CORRIJA SUA POSTURA!"; 

  return (
    <SafeAreaView style={dashboardStyles.scrollContainer} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.BACKGROUND} />
      
      <ScrollView 
        style={dashboardStyles.scrollContainer}
        contentContainerStyle={dashboardStyles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={dashboardStyles.title}>SmartDesk - Monitoramento Dual</Text>
        
        <View style={dashboardStyles.indicatorsRow}>
          <PostureSectionIndicator 
            title="ÂNGULO TORÁCICO" 
            angle={angleThoracic} 
            isAlert={isAlertThoracic} 
          />
          <PostureSectionIndicator 
            title="ÂNGULO LOMBAR" 
            angle={angleLumbar} 
            isAlert={isAlertLumbar} 
          />
        </View>

        <View style={isAlertGeneral ? dashboardStyles.alertBox : dashboardStyles.okBox}>
          <Text style={isAlertGeneral ? dashboardStyles.alertText : dashboardStyles.okText}>
            {isAlertGeneral ? alertMessage : "POSTURA OK"}
          </Text>
        </View>

        <View style={dashboardStyles.reportsSection}>
          <Text style={dashboardStyles.sectionHeader}>RELATÓRIO DE PROGRESSO</Text>
          <View style={dashboardStyles.metricCard}>
              <Text style={dashboardStyles.metricValue}>78%</Text>
              <Text style={dashboardStyles.metricLabel}>Tempo em Postura Correta</Text>
          </View>
          <View style={dashboardStyles.metricCard}>
              <Text style={dashboardStyles.metricValue}>12</Text>
              <Text style={dashboardStyles.metricLabel}>Correções Realizadas Hoje</Text>
          </View>
          <Text style={dashboardStyles.placeholderText}>[Gráfico das medições posturais - Torácica e Lombar]</Text>
        </View>
        
        <Text style={dashboardStyles.footer}>Interface pronta para integração com BLE (ESP32)</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;