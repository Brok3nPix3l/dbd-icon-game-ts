import { useState } from "react";
import blackSettings from "./images/settings.png";
import whiteSettings from "./images/settings-white.png";
import Modal from "./Modal";
import { PerksValue, ColorTheme } from "./App";
import { Option, PerksOption } from "./SettingsOption";

type SettingsProps = {
  handlePerksSettingsUpdated: (perksSetting: PerksValue) => void;
  colorTheme: ColorTheme;
};

export type Setting<T, O extends Option<T>> = {
  title: string;
  subtitle: string;
  options: Array<O>;
};

export type PerksSetting = Setting<PerksValue, PerksOption>;
export type SettingType = PerksSetting;

export default function Settings(props: SettingsProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePerksSetting = (setting: PerksValue) => {
    console.log(`Perk setting '${setting}' selected`);
    setModalOpen(false);
    props.handlePerksSettingsUpdated(setting);
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
          settings={[perksSettings]}
          handleClickedOutsideOfModal={handleClickedOutsideOfModal}
        />
      )}
    </>
  );
}
