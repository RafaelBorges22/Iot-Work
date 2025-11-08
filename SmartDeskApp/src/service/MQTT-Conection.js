
// precisará instalar e configurar uma biblioteca MQTT como 'mqtt' (Node.js/Web)
// ou uma específica para React Native.
import mqtt from 'mqtt'; 

const BROKER_URL = 'mqtt://endereço do broke.mosquitto:1883';
const TOPIC_POSTURE_DATA = 'smartdesk/postura/data'; // Tópico onde o ESP32 publica os ângulos

let client = null;

export const MQTTService = {
  
  // 1. Inicia a conexão com o broker Mosquitto
  connect: (onMessageCallback) => {
    if (client && client.connected) {
      console.log('MQTT já conectado.');
      return;
    }

    console.log(`MQTT: Conectando ao broker em ${BROKER_URL}`);
    
    // Conexção ao broker MQTT
    client = mqtt.connect(BROKER_URL, {
      clientId: `SmartDeskApp_${Math.random().toString(16).substr(2, 8)}`,
    });

    client.on('connect', () => {
      console.log('MQTT: Conectado com sucesso ao Mosquitto!');
      client.subscribe(TOPIC_POSTURE_DATA, (err) => {
        if (!err) {
          console.log(`MQTT: Inscrito no tópico ${TOPIC_POSTURE_DATA}`);
        }
      });
    });

    client.on('message', (topic, message) => {
      try {
        // mensagem do MQTT é uma string JSON
        const data = JSON.parse(message.toString());
        // Chama o callback no hook para processar os dados
        onMessageCallback(data);
      } catch (error) {
        console.error('MQTT Erro ao processar mensagem:', error);
      }
    });

    client.on('error', (error) => console.error('MQTT Erro de conexão:', error));
    client.on('close', () => console.log('MQTT: Conexão fechada.'));
  },

  publish: (topic, message) => {
    if (client && client.connected) {
      client.publish(topic, message);
      console.log(`MQTT: Publicado no tópico ${topic}`);
    } else {
      console.warn('MQTT: Não conectado. Não foi possível publicar.');
    }
  },

  disconnect: () => {
    if (client) {
      client.end();
      client = null;
      console.log('MQTT: Desconectado.');
    }
  }
};