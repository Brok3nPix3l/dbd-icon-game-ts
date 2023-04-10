import { GamemodeValue, PerksValue, TimerValue } from "./App";
import { Setting, SettingType } from "./Settings";
import SettingsRow from "./SettingsRow";
import { v4 as uuid } from "uuid";
import { Option } from "./SettingsOption";

type ModalProps = {
  handleClickedOutsideOfModal: () => void;
  settings: Array<SettingType>;
};

export default function Modal(props: ModalProps) {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={() => props.handleClickedOutsideOfModal()}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-600 dark:bg-opacity-75"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}
            <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 dark:bg-black sm:p-6 sm:pb-4">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  {props.settings.map((setting, index) => {
                    return (
                      <>
                        {!!index && (
                          <hr
                            key={uuid()}
                            className="h-1 bg-black dark:bg-white"
                          />
                        )}
                        <SettingsRow
                          // {/* <SettingsRow<(typeof setting)["options"][0]["value"],Option<(typeof setting)["options"][0]["value"]>> */}
                          setting={setting}
                          key={uuid()}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
