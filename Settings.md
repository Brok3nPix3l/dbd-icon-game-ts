# SettingType = PerksSetting | GamemodeSetting | TimerSetting;

## type PerksSetting = Setting&lt;PerksValue, PerksOption&gt;;
## type GamemodeSetting = Setting&lt;GamemodeValue, GamemodeOption&gt;;
## type TimerSetting = Setting&lt;TimerValue, TimerOption&gt;;

Thus, SettingType = Setting&lt;PerksValue, PerksOption&gt;  
| Setting&lt;GamemodeValue, GamemodeOption&gt;  
| Setting&lt;TimerValue, TimerOption&gt;

type Setting&lt;T, O extends Option&lt;T&gt;&gt; = {  
  title: string;  
  subtitle: string;  
  options: Array&lt;O&gt;;  
};

Thus, SettingType = {  
  title: string;  
  subtitle: string;  
  options: Array&lt;Option&lt;PerksValue&gt;&gt;;  
} | {  
  title: string;  
  subtitle: string;  
  options: Array&lt;Option&lt;GamemodeValue&gt;&gt;;  
} | {  
  title: string;  
  subtitle: string;  
  options: Array&lt;Option&lt;TimerValue&gt;&gt;;  
}  

type Option&lt;Type&gt; = {  
  title: string;  
  value: Type;  
  selectHandler: (setting: Type) => void;  
};

Thus, SettingType = {  
  title: string;  
  subtitle: string;  
  options: Array&lt;{  
    title: string;  
    value: PerksValue;  
    selectHandler: (setting: PerksValue) => void;  
  }&gt;  
} | {  
  title: string;  
  subtitle: string;  
  options: Array&lt;{  
    title: string;  
    value: GamemodeValue;  
    selectHandler: (setting: GamemodeValue) => void;  
  }&gt;  
} | {  
  title: string;  
  subtitle: string;  
  options: Array&lt;{  
    title: string;  
    value: TimerValue;  
    selectHandler: (setting: TimerValue) => void;  
  }&gt;  
}
