import { useEffect, useState } from "react";
import Signal from "../Signal/Signal";
import styles from "./TrafficLight.module.css";

const traficLights = [
    {
      color: 'green',
      wait: 2000,
      next: 'yellow',
      id: 1,
    },
    {
      color: 'yellow',
      wait: 3000,
      next: 'red',
      id: 2,
    },
    {
      color: 'red',
      wait: 1000,
      next: 'green',
      id: 3,
    },
  ];
const TrafficLight = () =>{
    const [signalLight , setSignalLight] = useState("green");
    const light = traficLights.find((pass) => pass.color === signalLight);
    useEffect(() =>{
        let timerId = setTimeout(()=>{
            setSignalLight(light.next)
        },light.wait);

        return () => clearTimeout(timerId);

    },[signalLight , light])

    return(
        <div className={styles.lightWrapper}>
            {
                traficLights.map((traffic) => {
                    return(
                        <Signal key={traffic.id} bgColor = {light.color} signal = {signalLight} />
                    )
                })
            }
        
        </div>
    )
}

export default TrafficLight;