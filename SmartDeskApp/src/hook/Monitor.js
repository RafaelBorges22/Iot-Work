import { useState, useEffect } from 'react';
import { MQTTService } from '../service/MQTT-Conection'; 

const LIMIT_THORACIC = 35; 
const LIMIT_LUMBAR = 25;   

export const usePostureMonitor = () => {
  const [angles, setAngles] = useState({ thoracic: 0, lumbar: 0 });
  const [isConnected, setIsConnected] = useState(false);
  
  const isAlertThoracic = angles.thoracic > LIMIT_THORACIC;
  const isAlertLumbar = angles.lumbar > LIMIT_LUMBAR;
  const isAlertGeneral = isAlertThoracic || isAlertLumbar;
  const alertMessage = isAlertGeneral ? "ALERTA: CORRIJA SUA POSTURA!" : "Postura OK";

  useEffect(() => {
    const handleMQTTMessage = (data) => {
      if (data.angleThoracic !== undefined && data.angleLumbar !== undefined) {
        setAngles({ 
          thoracic: data.angleThoracic,
          lumbar: data.angleLumbar
        });
      }
    };

    MQTTService.connect(handleMQTTMessage);
    setIsConnected(true); 

    return () => { 
      MQTTService.disconnect();
      setIsConnected(false);
    };
  }, []);

  return {
    angles,
    isConnected,
    isAlertThoracic,
    isAlertLumbar,
    isAlertGeneral,
    alertMessage,
  };
};