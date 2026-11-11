"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

type Remaining = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const EMPTY: Remaining = {
  days: "--",
  hours: "--",
  minutes: "--",
  seconds: "--",
};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function remaining(target: number): Remaining {
  const secondsLeft = Math.max(0, Math.floor((target - Date.now()) / 1000));
  return {
    days: pad(Math.floor(secondsLeft / 86400)),
    hours: pad(Math.floor((secondsLeft % 86400) / 3600)),
    minutes: pad(Math.floor((secondsLeft % 3600) / 60)),
    seconds: pad(secondsLeft % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState<Remaining>(EMPTY);

  useEffect(() => {
    const target = new Date(site.electionAt).getTime();
    const tick = () => setTime(remaining(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: "Hari" },
    { value: time.hours, label: "Jam" },
    { value: time.minutes, label: "Menit" },
    { value: time.seconds, label: "Detik" },
  ];

  return (
    <div className="count" aria-live="polite" aria-label="Hitung mundur menuju hari pemilihan">
      {units.map((unit) => (
        <div key={unit.label}>
          <b key={unit.value}>{unit.value}</b>
          <small>{unit.label}</small>
        </div>
      ))}
    </div>
  );
}
