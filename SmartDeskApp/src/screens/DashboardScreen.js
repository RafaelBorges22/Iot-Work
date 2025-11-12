// src/screens/DashboardScreen.js
import React from 'react';
import { View, Text, StatusBar, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { dashboardStyles, colors } from '../styles/theme';
import PostureSectionIndicator from '../components/PostureIndicator';
import { usePostureMonitor } from '../hook/Monitor';

const DashboardScreen = () => {
  const {
    angles,
    isConnected,
    isAlertThoracic,
    isAlertLumbar,
    isAlertGeneral,
    alertMessage,
    resetRemote,
  } = usePostureMonitor();

  return (
    <SafeAreaView style={dashboardStyles.scrollContainer} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.BACKGROUND} />

      <ScrollView
        style={dashboardStyles.scrollContainer}
        contentContainerStyle={dashboardStyles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={dashboardStyles.title}>SmartDesk - Monitoramento Dual</Text>

        <Text style={{ marginBottom: 8, color: isConnected ? 'green' : 'red' }}>
          {isConnected ? 'MQTT conectado' : 'MQTT desconectado'}
        </Text>

        <View style={dashboardStyles.indicatorsRow}>
          <PostureSectionIndicator
            title="ÂNGULO TORÁCICO"
            angle={angles.thoracic}
            isAlert={isAlertThoracic}
          />
          <PostureSectionIndicator
            title="ÂNGULO LOMBAR"
            angle={angles.lumbar}
            isAlert={isAlertLumbar}
          />
        </View>

        <View style={isAlertGeneral ? dashboardStyles.alertBox : dashboardStyles.okBox}>
          <Text style={isAlertGeneral ? dashboardStyles.alertText : dashboardStyles.okText}>
            {alertMessage}
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
          <Text style={dashboardStyles.placeholderText}>
            [Gráfico das medições posturais - Torácica e Lombar]
          </Text>
        </View>

        <Pressable
          onPress={resetRemote}
          style={{
            backgroundColor: colors.PRIMARY,
            padding: 12,
            borderRadius: 10,
            marginTop: 16,
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>
            Zerar ângulos no ESP32 (via MQTT)
          </Text>
        </Pressable>

        <Text style={dashboardStyles.footer}>
          Interface pronta para integração com MQTT (ESP32)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
