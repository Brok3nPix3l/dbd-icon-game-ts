import { useState } from "react";
import blackSettings from "./images/settings.png";
import whiteSettings from "./images/settings-white.png";
import Modal from "./Modal";
import { PerksValue, ColorTheme, GamemodeValue, TimerValue } from "./App";
import {
  GamemodeOption,
  Option,
  PerksOption,
  TimerOption,
} from "./SettingsOption";

type SettingsProps = {
  handlePerksSettingsUpdated: (perksSetting: PerksValue) => void;
  handleGamemodeSettingsUpdated: (gamemodeSetting: GamemodeValue) => void;
  handleTimerSettingsUpdated: (timerSetting: TimerValue) => void;
  colorTheme: ColorTheme;
};

export type Setting<T, O extends Option<T>> = {
  title: string;
  subtitle: string;
  options: Array<O>;
};

export type PerksSetting = Setting<PerksValue, PerksOption>;
export type GamemodeSetting = Setting<GamemodeValue, GamemodeOption>;
export type TimerSetting = Setting<TimerValue, TimerOption>;
export type SettingType = PerksSetting | GamemodeSetting | TimerSetting;

export default function Settings(props: SettingsProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePerksSetting = (setting: PerksValue) => {
    console.log(`Perk setting '${setting}' selected`);
    setModalOpen(false);
    props.handlePerksSettingsUpdated(setting);
  };

  const handleGamemodeSetting = (setting: GamemodeValue) => {
    console.log(`Gamemode setting '${setting}' selected`);
    setModalOpen(false);
    props.handleGamemodeSettingsUpdated(setting);
  };

  const handleTimerSetting = (setting: TimerValue) => {
    console.log(`Timer setting ${setting} selected`);
    setModalOpen(false);
    props.handleTimerSettingsUpdated(setting);
  };

  const handleClickedOutsideOfModal = () => {
    console.log("Clicked outside of modal");
    setModalOpen(false);
  };

  const perksSettings: PerksSetting = {
    title: "Perks",
    subtitle: "Which set of perks would you like to play with?",
    options: [
      {
        title: "all",
        value: "all",
        selectHandler: (option: PerksValue) => handlePerksSetting(option),
      },
      {
        title: "survivor",
        value: "survivor",
        selectHandler: (option: PerksValue) => handlePerksSetting(option),
      },
      {
        title: "killer",
        value: "killer",
        selectHandler: (option: PerksValue) => handlePerksSetting(option),
      },
    ],
  };

  const gamemodeSettings: GamemodeSetting = {
    title: "Game Mode",
    subtitle: "Which game mode would you like to play?",
    options: [
      {
        title: "time attack",
        value: "time attack",
        selectHandler: (option: GamemodeValue) => handleGamemodeSetting(option),
      },
      {
        title: "endless",
        value: "endless",
        selectHandler: (option: GamemodeValue) => handleGamemodeSetting(option),
      },
    ],
  };

  const timerSettings: TimerSetting = {
    title: "Timer",
    subtitle: "How long would you like the timer to last?",
    options: [
      {
        title: "30 seconds",
        value: 30,
        selectHandler: (option: TimerValue) => handleTimerSetting(option),
      },
      {
        title: "1 minute",
        value: 60,
        selectHandler: (option: TimerValue) => handleTimerSetting(option),
      },
      {
        title: "2 minutes",
        value: 120,
        selectHandler: (option: TimerValue) => handleTimerSetting(option),
      },
    ],
  };

  return (
    <>
      <button className="w-10">
        <img
          src={props.colorTheme === "light" ? blackSettings : whiteSettings}
          onClick={() => setModalOpen(true)}
        />
      </button>
      {modalOpen && (
        <Modal
          settings={[perksSettings, gamemodeSettings, timerSettings]}
          handleClickedOutsideOfModal={handleClickedOutsideOfModal}
        />
      )}
    </>
  );
}
