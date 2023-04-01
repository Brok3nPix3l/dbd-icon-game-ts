import { useState } from "react";
import blackSettings from "./images/settings.png";
import whiteSettings from "./images/settings-white.png";
import Modal from "./Modal";
import { PerksSetting, ColorTheme } from "./App";

type SettingsProps = {
  handlePerksSettingsUpdated: (perksSetting: PerksSetting) => void;
  colorTheme: ColorTheme;
};

export default function Settings(props: SettingsProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePerksSetting = (setting: PerksSetting) => {
    console.log(setting);
    setModalOpen(false);
    props.handlePerksSettingsUpdated(setting);
  };

  const handleClickedOutsideOfModal = () => {
    setModalOpen(false);
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
          setPerksSetting={handlePerksSetting}
          handleClickedOutsideOfModal={handleClickedOutsideOfModal}
        />
      )}
    </>
  );
}
