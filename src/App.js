import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./View/home/Home";
import Reglage from "./View/setting/Reglage";

import ColorPicker from "./View/game/ColorPicker";
import Game from "./View/game/Game";

import mqtt from "precompiled-mqtt";

const mqttConnect = () => {
  const client = mqtt.connect("mqtt://test.mosquitto.org:8080");
  console.log(client);
  return client;
};

const mqttSub = () => {
  const client = mqttConnect();
  client.subscribe("message", function (err) {
    if (!err) {
      client.publish("message", "Hello back");
      client.on("message", function (topic, message) {
        // message is Buffer
        console.log(message.toString());
      });
    } else {
      console.log(err);
    }
  });
};

function App() {
  useEffect(() => {
    mqttSub();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reglage" element={<Reglage />} />
        <Route path="/code/:pseudo" element={<ColorPicker />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
