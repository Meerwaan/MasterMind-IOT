import logo from "./logo.svg";
import "./App.css";

import { useNavigate, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./View/home/Home";
import Game from "./View/game/Game";

import mqtt from "precompiled-mqtt";

const mqttConnect = () => {
  const client = mqtt.connect("mqtt://test.mosquitto.org:8081");
  console.log(client);
  return client;
};

const mqttSub = () => {
  const client = mqttConnect();
  client.subscribe("sequence", function (err) {
    if (!err) {
      client.publish("sequence", "Hello back");
      client.on("message", function (topic, message) {
        // message is Buffer
        console.log(message.toString());
        client.end();
      });
    }
  });
};

function App() {
  useEffect(() => {
    mqttConnect();
    mqttSub();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
