import { useEffect, useState } from "react";
import Icon from "./Icon";

import aceInTheHole from "/IconPerks_aceInTheHole.webp";
import adrenaline from "/IconPerks_adrenaline.webp";
import aftercare from "/IconPerks_aftercare.webp";
import agitation from "/IconPerks_agitation.webp";
import aNursesCalling from "/IconPerks_aNursesCalling.webp";
import anyMeansNecessary from "/IconPerks_anyMeansNecessary.webp";
import appraisal from "/IconPerks_appraisal.webp";
import alert from "/IconPerks_alert.webp";
import autodidact from "/IconPerks_autodidact.webp";
import backgroundPlayer from "/IconPerks_backgroundPlayer.webp";
import balancedLanding from "/IconPerks_balancedLanding.webp";
import bamboozle from "/IconPerks_bamboozle.webp";
import barbecueAndChilli from "/IconPerks_barbecueAndChilli.webp";
import beastOfPrey from "/IconPerks_beastOfPrey.webp";
import bitterMurmur from "/IconPerks_bitterMurmur.webp";
import bloodEcho from "/IconPerks_bloodEcho.webp";
import bloodhound from "/IconPerks_bloodhound.webp";
import bloodRush from "/IconPerks_bloodRush.webp";
import bloodWarden from "/IconPerks_bloodWarden.webp";
import boilOver from "/IconPerks_boilOver.webp";
import bond from "/IconPerks_bond.webp";
import boonDarkTheory from "/IconPerks_boonDarkTheory.webp";
import borrowedTime from "/IconPerks_borrowedTime.webp";
import botanyKnowledge from "/IconPerks_botanyKnowledge.webp";
import breakdown from "/IconPerks_breakdown.webp";
import breakout from "/IconPerks_breakout.webp";
import brutalStrength from "/IconPerks_brutalStrength.webp";
import buckleUp from "/IconPerks_buckleUp.webp";
import callOfBrine from "/IconPerks_callOfBrine.webp";
import calmSpirit from "/IconPerks_calmSpirit.webp";
import corruptIntervention from "/IconPerks_corruptIntervention.webp";
import coulrophobia from "/IconPerks_coulrophobia.webp";
import coupDeGrace from "/IconPerks_coupDeGr%3Fce.webp";
import cutLoose from "/IconPerks_cutLoose.webp";
import danceWithMe from "/IconPerks_danceWithMe.webp";
import darkDevotion from "/IconPerks_darkDevotion.webp";
import darknessRevealed from "/IconPerks_darknessRevealed.webp";
import darkSense from "/IconPerks_darkSense.webp";
import deadHard from "/IconPerks_deadHard.webp";
import deception from "/IconPerks_deception.webp";
import decisiveStrike from "/IconPerks_decisiveStrike.webp";
import deerstalker from "/IconPerks_deerstalker.webp";
import dejaVu from "/IconPerks_dejaVu.webp";
import deliverance from "/IconPerks_deliverance.webp";
import detectivesHunch from "/IconPerks_detectivesHunch.webp";
import discorance from "/IconPerks_discordance.webp";
import dissolution from "/IconPerks_dissolution.webp";
import distortion from "/IconPerks_distortion.webp";
import distressing from "/IconPerks_distressing.webp";
import diversion from "/IconPerks_diversion.webp";
import dyingLight from "/IconPerks_dyingLight.webp";
import empathicConnection from "/IconPerks_empathicConnection.webp";
import empathy from "/IconPerks_empathy.webp";
import enduring from "/IconPerks_enduring.webp";
import fireUp from "/IconPerks_fireUp.webp";
import flipFlop from "/IconPerks_flip-Flop.webp";
import fogwise from "/IconPerks_fogwise.webp";
import franklinsDemise from "/IconPerks_franklinsDemise.webp";
import friendlyCompetition from "/IconPerks_friendlyCompetition.webp";
import furtiveChase from "/IconPerks_furtiveChase.webp";
import gameAFoot from "/IconPerks_gameAfoot.webp";
import guardian from "/IconPerks_guardian.webp";
import hangmansTrick from "/IconPerks_hangmansTrick.webp";
import headOn from "/IconPerks_headOn.webp";
import hexDevourHope from "/IconPerks_hexDevourHope.webp";
import hexFaceTheDarkness from "/IconPerks_hexFaceTheDarkness.webp";
import hexHauntedGround from "/IconPerks_hexHauntedGround.webp";
import hexHuntressLullaby from "/IconPerks_hexHuntressLullaby.webp";
import hexNoOneEscapesDeath from "/IconPerks_hexNoOneEscapesDeath.webp";
import hexRuin from "/IconPerks_hexRuin.webp";
import hexTheThirdSeal from "/IconPerks_hexTheThirdSeal.webp";
import hexThrillOfTheHunt from "/IconPerks_hexThrillOfTheHunt.webp";
import hoarder from "/IconPerks_hoarder.webp";
import hope from "/IconPerks_hope.webp";
import hubris from "/IconPerks_hubris.webp";
import imAllEars from "/IconPerks_imAllEars.webp";
import infectiousFright from "/IconPerks_infectiousFright.webp";
import innerFocus from "/IconPerks_innerFocus.webp";
import innerHealing from "/IconPerks_innerHealing.webp";
import insidious from "/IconPerks_insidious.webp";
import ironGrasp from "/IconPerks_ironGrasp.webp";
import ironMaiden from "/IconPerks_ironMaiden.webp";
import ironWill from "/IconPerks_ironWill.webp";
import kindred from "/IconPerks_kindred.webp";
import knockOut from "/IconPerks_knockOut.webp";
import leader from "/IconPerks_leader.webp";
import leftBehind from "/IconPerks_leftBehind.webp";
import leverage from "/IconPerks_leverage.webp";
import lightborn from "/IconPerks_lightborn.webp";
import lightweight from "/IconPerks_lightweight.webp";
import lithe from "/IconPerks_lithe.webp";
import luckyBreak from "/IconPerks_luckyBreak.webp";
import madGrid from "/IconPerks_madGrit.webp";
import makeYourChoice from "/IconPerks_makeYourChoice.webp";
import mercilessStorm from "/IconPerks_mercilessStorm.webp";
import mettleOfMan from "/IconPerks_mettleOfMan.webp";
import monitorAndAbuse from "/IconPerks_monitorAndAbuse.webp";
import nemesis from "/IconPerks_nemesis.webp";
import noMither from "/IconPerks_noMither.webp";
import noOneLeftBehind from "/IconPerks_noOneLeftBehind.webp";
import nowhereToHide from "/IconPerks_nowhereToHide.webp";
import objectOfObsession from "/IconPerks_objectOfObsession.webp";
import openHanded from "/IconPerks_open-Handed.webp";
import oppression from "/IconPerks_oppression.webp";
import overcharge from "/IconPerks_overcharge.webp";
import overwhelmingPresence from "/IconPerks_overwhelmingPresence.webp";
import overzealous from "/IconPerks_overzealous.webp";
import parentalGuidance from "/IconPerks_parentalGuidance.webp";
import pharmacy from "/IconPerks_pharmacy.webp";
import playWithYourFood from "/IconPerks_playWithYourFood.webp";
import plunderersInstinct from "/IconPerks_plunderersInstinct.webp";
import poised from "/IconPerks_poised.webp";
import popGoesTheWeasel from "/IconPerks_popGoesTheWeasel.webp";
import potentialEnergy from "/IconPerks_potentialEnergy.webp";
import powerStruggle from "/IconPerks_powerStruggle.webp";
import predator from "/IconPerks_predator.webp";
import premonition from "/IconPerks_premonition.webp";
import proveThyself from "/IconPerks_proveThyself.webp";
import quickAndQuiet from "/IconPerks_quickAndQuiet.webp";
import quickGambit from "/IconPerks_quickGambit.webp";
import rancor from "/IconPerks_rancor.webp";
import rememberMe from "/IconPerks_rememberMe.webp";
import renewal from "/IconPerks_renewal.webp";
import residualManifest from "/IconPerks_residualManifest.webp";
import resilience from "/IconPerks_resilience.webp";
import saboteur from "/IconPerks_saboteur.webp";
import saveTheBestForLast from "/IconPerks_saveTheBestForLast.webp";
import scourgeHookFloodsOfRage from "/IconPerks_scourgeHookFloodsOfRage.webp";
import scourgeHookMonstrousShrine from "/IconPerks_scourgeHookMonstrousShrine.webp";
import selfCare from "/IconPerks_self-Care.webp";
import septicTouch from "/IconPerks_septicTouch.webp";
import shadowborn from "/IconPerks_shadowborn.webp";
import shatteredHope from "/IconPerks_shatteredHope.webp";
import sloppyButcher from "/IconPerks_sloppyButcher.webp";
import smallGame from "/IconPerks_smallGame.webp";
import soleSurvivor from "/IconPerks_soleSurvivor.webp";
import solidarity from "/IconPerks_solidarity.webp";
import spiesFromTheShadows from "/IconPerks_spiesFromTheShadows.webp";
import spineChill from "/IconPerks_spineChill.webp";
import spiritFury from "/IconPerks_spiritFury.webp";
import sprintBurst from "/IconPerks_sprintBurst.webp";
import stakeOut from "/IconPerks_stakeOut.webp";
import streetwise from "/IconPerks_streetwise.webp";
import stridor from "/IconPerks_stridor.webp";
import surveillance from "/IconPerks_surveillance.webp";
import teamworkCollectiveStealth from "/IconPerks_teamworkCollectiveStealth.webp";
import teamworkPowerOfTwo from "/IconPerks_teamworkPowerOfTwo.webp";
import technician from "/IconPerks_technician.webp";
import tenacity from "/IconPerks_tenacity.webp";
import territorialImperitive from "/IconPerks_territorialImperative.webp";
import thanatophobia from "/IconPerks_thanatophobia.webp";
import thisIsNotHappening from "/IconPerks_thisIsNotHappening.webp";
import thrillingTremors from "/IconPerks_thrillingTremors.webp";
import thwack from "/IconPerks_thwack.webp";
import tinkerer from "/IconPerks_tinkerer.webp";
import unbreakable from "/IconPerks_unbreakable.webp";
import unnervingPresence from "/IconPerks_unnervingPresence.webp";
import unrelenting from "/IconPerks_unrelenting.webp";
import upTheAnte from "/IconPerks_upTheAnte.webp";
import urbanEvasion from "/IconPerks_urbanEvasion.webp";
import vigil from "/IconPerks_vigil.webp";
import wakeUp from "/IconPerks_wakeUp.webp";
import wellMakeIt from "/IconPerks_wellMakeIt.webp";
import wereGonnaLiveForever from "/IconPerks_wereGonnaLiveForever.webp";
import whispers from "/IconPerks_whispers.webp";
import windowsOfOpportunity from "/IconPerks_windowsOfOpportunity.webp";
import zanshinTactics from "/IconPerks_zanshinTactics.webp";
import { ICON_TRANSFORMATION } from "./Icon";
import { v4 as uuid } from "uuid";
import shuffleArray from "shuffle-array";

function App() {
  const [score, setScore] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  type Answer = null | "correct" | "wrong";
  const [currentAnswer, setCurrentAnswer] = useState<Answer>(null);
  const [perks, setPerks] = useState(
    shuffleArray([
      aceInTheHole,
      adrenaline,
      aftercare,
      agitation,
      alert,
      aNursesCalling,
      anyMeansNecessary,
      appraisal,
      autodidact,
      backgroundPlayer,
      balancedLanding,
      bamboozle,
      barbecueAndChilli,
      beastOfPrey,
      bitterMurmur,
      bloodEcho,
      bloodhound,
      bloodRush,
      bloodWarden,
      boilOver,
      bond,
      boonDarkTheory,
      borrowedTime,
      botanyKnowledge,
      breakdown,
      breakout,
      brutalStrength,
      buckleUp,
      callOfBrine,
      calmSpirit,
      corruptIntervention,
      coulrophobia,
      coupDeGrace,
      cutLoose,
      danceWithMe,
      darkDevotion,
      darknessRevealed,
      darkSense,
      deadHard,
      deception,
      decisiveStrike,
      deerstalker,
      dejaVu,
      deliverance,
      detectivesHunch,
      discorance,
      dissolution,
      distortion,
      distressing,
      diversion,
      dyingLight,
      empathicConnection,
      empathy,
      enduring,
      fireUp,
      flipFlop,
      fogwise,
      franklinsDemise,
      friendlyCompetition,
      furtiveChase,
      gameAFoot,
      guardian,
      hangmansTrick,
      headOn,
      hexDevourHope,
      hexFaceTheDarkness,
      hexHauntedGround,
      hexHuntressLullaby,
      hexNoOneEscapesDeath,
      hexRuin,
      hexTheThirdSeal,
      hexThrillOfTheHunt,
      hoarder,
      hope,
      hubris,
      imAllEars,
      infectiousFright,
      innerFocus,
      innerHealing,
      insidious,
      ironGrasp,
      ironMaiden,
      ironWill,
      kindred,
      knockOut,
      leader,
      leftBehind,
      leverage,
      lightborn,
      lightweight,
      lithe,
      luckyBreak,
      madGrid,
      makeYourChoice,
      mercilessStorm,
      mettleOfMan,
      monitorAndAbuse,
      nemesis,
      noMither,
      noOneLeftBehind,
      nowhereToHide,
      objectOfObsession,
      openHanded,
      oppression,
      overcharge,
      overwhelmingPresence,
      overzealous,
      parentalGuidance,
      pharmacy,
      playWithYourFood,
      plunderersInstinct,
      poised,
      popGoesTheWeasel,
      potentialEnergy,
      powerStruggle,
      predator,
      premonition,
      proveThyself,
      quickAndQuiet,
      quickGambit,
      rancor,
      rememberMe,
      renewal,
      residualManifest,
      resilience,
      saboteur,
      saveTheBestForLast,
      scourgeHookFloodsOfRage,
      scourgeHookMonstrousShrine,
      selfCare,
      septicTouch,
      shadowborn,
      shatteredHope,
      sloppyButcher,
      smallGame,
      soleSurvivor,
      solidarity,
      spiesFromTheShadows,
      spineChill,
      spiritFury,
      sprintBurst,
      stakeOut,
      streetwise,
      stridor,
      surveillance,
      teamworkCollectiveStealth,
      teamworkPowerOfTwo,
      technician,
      tenacity,
      territorialImperitive,
      thanatophobia,
      thisIsNotHappening,
      thrillingTremors,
      thwack,
      tinkerer,
      unbreakable,
      unnervingPresence,
      unrelenting,
      upTheAnte,
      urbanEvasion,
      vigil,
      wakeUp,
      wellMakeIt,
      wereGonnaLiveForever,
      whispers,
      windowsOfOpportunity,
      zanshinTactics,
    ])
  );
  const [perkIndex, setPerkIndex] = useState(0);

  const none: ICON_TRANSFORMATION = "none";
  const invertY: ICON_TRANSFORMATION = "invert-y";
  const rotate180: ICON_TRANSFORMATION = "rotate 180";
  const invertYRotate180: ICON_TRANSFORMATION = "invert-y rotate 180";
  const [transformationsPermutation, setTransformationsPermutation] = useState<
    ICON_TRANSFORMATION[]
  >(shuffleArray([none, invertY, rotate180, invertYRotate180]));

  // TODO: enforce image sizes and make them responsive
  // TODO: survivor and killer toggles
  // type perkObject = {
  //   imageSource: string,
  //   role: "survivor" | "killer"
  // }
  // const survivorPerks = useCallback(() => {
  //   perks.filter((perkObject: perkObject) => {
  //     perkObject.role === "survivor";
  //   })
  // }, [perks])

  const currentPerk = perks[perkIndex];

  const correctAnswer = () => {
    console.log("correct");
    setScore((prev) => prev + 1);
    setCurrentAnswer("correct");
  };

  const wrongAnswer = () => {
    console.log("wrong");
    setCurrentAnswer("wrong");
  };

  const handleSelectedIcon = (correct: boolean) => {
    correct ? correctAnswer() : wrongAnswer();
    setTotalGuesses((prev) => prev + 1);
    generateNewIcons();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentAnswer(null);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [totalGuesses]);

  const generateNewIcons = () => {
    setTransformationsPermutation(
      shuffleArray([none, invertY, rotate180, invertYRotate180])
    );
    if (perkIndex === perks.length - 1) {
      console.log("Shuffling perks");
      setPerks((prev) => shuffleArray(prev));
      setPerkIndex(0);
      return;
    }
    console.log("Next perk");
    setPerkIndex((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen flex-col justify-center gap-20 bg-gradient-to-b from-stone-500 to-stone-700">
      <>
        <h1 className="text-center text-5xl text-slate-900">
          Which icon is correct?
        </h1>
        <div className="flex justify-center gap-1 p-2">
          {/* TODO: this gets run any time the component re-renders. need to fix this, but it works for now */}
          {transformationsPermutation.map((transform: ICON_TRANSFORMATION) => {
            return (
              <Icon
                imageSrc={currentPerk}
                handleSelectedIcon={handleSelectedIcon}
                transform={transform}
                key={uuid()}
              />
            );
          })}
        </div>
        <div className="flex justify-center text-4xl text-slate-900">
          Score:{" "}
          <span
            className={`whitespace-pre ${
              currentAnswer === "correct"
                ? "text-green-400"
                : currentAnswer === "wrong"
                ? "text-red-500"
                : ""
            }`}
          >
            {" "}
            {score}{" "}
          </span>
          <span>{totalGuesses === 0 ? "" : `/ ${totalGuesses}`}</span>
        </div>
      </>
    </div>
  );
}

export default App;
