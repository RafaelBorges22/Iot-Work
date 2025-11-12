// src/service/MQTT-Conection.js
import { Client, Message } from 'paho-mqtt';

const BROKER_URL = 'wss://test.mosquitto.org:8081/mqtt'; // WebSocket seguro
const TOPIC_POSTURE_DATA = 'smartdesk/angles';           // ESP32 -> app
const TOPIC_COMMAND = 'smartdesk/cmd';                   // app  -> ESP32

let client = null;

export const MQTTService = {
  connect: (onMessageCallback) => {
    if (client && client.isConnected()) {
      console.log('MQTT (Paho): já conectado.');
      return;
    }

    const clientId = `SmartDeskApp_${Math.random().toString(16).slice(2, 10)}`;

    // Forma recomendada no browser/RN: passar a URL completa no construtor
    client = new Client(BROKER_URL, clientId);

    client.onConnectionLost = (responseObject) => {
      console.log('MQTT (Paho): conexão perdida', responseObject?.errorMessage);
    };

    client.onMessageArrived = (message) => {
      try {
        if (message.destinationName === TOPIC_POSTURE_DATA) {
          const data = JSON.parse(message.payloadString);
          onMessageCallback && onMessageCallback(data);
        }
      } catch (err) {
        console.log('MQTT (Paho): erro ao processar mensagem', err);
      }
    };

    client.connect({
      useSSL: true,
      timeout: 8,
      cleanSession: true,
      reconnect: true,
      mqttVersion: 4, // MQTT 3.1.1
      onSuccess: () => {
        console.log('MQTT (Paho): conectado!');
        client.subscribe(TOPIC_POSTURE_DATA, { qos: 0 });
      },
      onFailure: (err) => {
        console.log('MQTT (Paho): falha de conexão', err);
      },
    });
  },

  publishReset: () => {
    if (!client || !client.isConnected()) {
      console.log('MQTT (Paho): não conectado — não foi possível publicar.');
      return;
    }
    const msg = new Message('reset');
    msg.destinationName = TOPIC_COMMAND;
    client.send(msg);
    console.log('MQTT (Paho): enviado "reset" em', TOPIC_COMMAND);
  },

  disconnect: () => {
    if (client) {
      try {
        client.disconnect();
      } catch {}
      client = null;
      console.log('MQTT (Paho): desconectado.');
    }
  },
};
