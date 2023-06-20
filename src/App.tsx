import { useEffect, useRef, useState } from "react";
import shuffleArray from "shuffle-array";
import { v4 as uuid } from "uuid";

import aNursesCalling from "/IconPerks_aNursesCalling.webp";
import aceInTheHole from "/IconPerks_aceInTheHole.webp";
import adrenaline from "/IconPerks_adrenaline.webp";
import aftercare from "/IconPerks_aftercare.webp";
import agitation from "/IconPerks_agitation.webp";
import alert from "/IconPerks_alert.webp";
import anyMeansNecessary from "/IconPerks_anyMeansNecessary.webp";
import appraisal from "/IconPerks_appraisal.webp";
import autodidact from "/IconPerks_autodidact.webp";
import awakenedAwareness from "/IconPerks_awakenedAwareness.webp";
import backgroundPlayer from "/IconPerks_backgroundPlayer.webp";
import balancedLanding from "/IconPerks_balancedLanding.webp";
import bamboozle from "/IconPerks_bamboozle.webp";
import barbecueAndChilli from "/IconPerks_barbecueAndChilli.webp";
import beastOfPrey from "/IconPerks_beastOfPrey.webp";
import betterThanNew from "/IconPerks_betterThanNew.webp";
import biteTheBullet from "/IconPerks_biteTheBullet.webp";
import bitterMurmur from "/IconPerks_bitterMurmur.webp";
import blastMine from "/IconPerks_blastMine.webp";
import bloodEcho from "/IconPerks_bloodEcho.webp";
import bloodPact from "/IconPerks_bloodPact.webp";
import bloodRush from "/IconPerks_bloodRush.webp";
import bloodWarden from "/IconPerks_bloodWarden.webp";
import bloodhound from "/IconPerks_bloodhound.webp";
import boilOver from "/IconPerks_boilOver.webp";
import bond from "/IconPerks_bond.webp";
import boonCircleOfHealing from "/IconPerks_boonCircleOfHealing.webp";
import boonDarkTheory from "/IconPerks_boonDarkTheory.webp";
import boonExponential from "/IconPerks_boonExponential.webp";
import boonShadowStep from "/IconPerks_boonShadowStep.webp";
import borrowedTime from "/IconPerks_borrowedTime.webp";
import botanyKnowledge from "/IconPerks_botanyKnowledge.webp";
import breakdown from "/IconPerks_breakdown.webp";
import breakout from "/IconPerks_breakout.webp";
import brutalStrength from "/IconPerks_brutalStrength.webp";
import buckleUp from "/IconPerks_buckleUp.webp";
import builtToLast from "/IconPerks_builtToLast.webp";
import callOfBrine from "/IconPerks_callOfBrine.webp";
import calmSpirit from "/IconPerks_calmSpirit.webp";
import kinship from "/IconPerks_camaraderie.webp";
import clairvoyance from "/IconPerks_clairvoyance.webp";
import correctiveAction from "/IconPerks_correctiveAction.webp";
import corruptIntervention from "/IconPerks_corruptIntervention.webp";
import coulrophobia from "/IconPerks_coulrophobia.webp";
import counterForce from "/IconPerks_counterforce.webp";
import coupDeGrace from "/IconPerks_coupDeGrace.webp";
import claustrophobia from "/IconPerks_cruelLimits.webp";
import cutLoose from "/IconPerks_cutLoose.webp";
import danceWithMe from "/IconPerks_danceWithMe.webp";
import darkDevotion from "/IconPerks_darkDevotion.webp";
import darkSense from "/IconPerks_darkSense.webp";
import darknessRevealed from "/IconPerks_darknessRevealed.webp";
import deadHard from "/IconPerks_deadHard.webp";
import deadMansSwitch from "/IconPerks_deadMansSwitch.webp";
import deadlock from "/IconPerks_deadlock.webp";
import deathbound from "/IconPerks_deathbound.webp";
import deception from "/IconPerks_deception.webp";
import decisiveStrike from "/IconPerks_decisiveStrike.webp";
import deerstalker from "/IconPerks_deerstalker.webp";
import dejaVu from "/IconPerks_dejaVu.webp";
import deliverance from "/IconPerks_deliverance.webp";
import desperateMeasures from "/IconPerks_desperateMeasures.webp";
import detectivesHunch from "/IconPerks_detectivesHunch.webp";
import discordance from "/IconPerks_discordance.webp";
import dissolution from "/IconPerks_dissolution.webp";
import distortion from "/IconPerks_distortion.webp";
import distressing from "/IconPerks_distressing.webp";
import diversion from "/IconPerks_diversion.webp";
import dragonsGrip from "/IconPerks_dragonsGrip.webp";
import dyingLight from "/IconPerks_dyingLight.webp";
import empathicConnection from "/IconPerks_empathicConnection.webp";
import empathy from "/IconPerks_empathy.webp";
import enduring from "/IconPerks_enduring.webp";
import eruption from "/IconPerks_eruption.webp";
import fastTrack from "/IconPerks_fastTrack.webp";
import fireUp from "/IconPerks_fireUp.webp";
import selfAware from "/IconPerks_fixated.webp";
import flashbang from "/IconPerks_flashbang.webp";
import flipFlop from "/IconPerks_flip-Flop.webp";
import fogwise from "/IconPerks_fogwise.webp";
import forThePeople from "/IconPerks_forThePeople.webp";
import forcedPenance from "/IconPerks_forcedPenance.webp";
import franklinsDemise from "/IconPerks_franklinsDemise.webp";
import friendlyCompetition from "/IconPerks_friendlyCompetition.webp";
import furtiveChase from "/IconPerks_furtiveChase.webp";
import gameAFoot from "/IconPerks_gameAfoot.webp";
import gearhead from "/IconPerks_gearhead.webp";
import grimEmbrace from "/IconPerks_grimEmbrace.webp";
import guardian from "/IconPerks_guardian.webp";
import hangmansTrick from "/IconPerks_hangmansTrick.webp";
import headOn from "/IconPerks_headOn.webp";
import hexBloodFavour from "/IconPerks_hexBloodFavour.webp";
import hexCrowdControl from "/IconPerks_hexCrowdControl.webp";
import hexDevourHope from "/IconPerks_hexDevourHope.webp";
import hexFaceTheDarkness from "/IconPerks_hexFaceTheDarkness.webp";
import hexHauntedGround from "/IconPerks_hexHauntedGround.webp";
import hexHuntressLullaby from "/IconPerks_hexHuntressLullaby.webp";
import hexNoOneEscapesDeath from "/IconPerks_hexNoOneEscapesDeath.webp";
import hexPentimento from "/IconPerks_hexPentimento.webp";
import hexPlaything from "/IconPerks_hexPlaything.webp";
import hexRetribution from "/IconPerks_hexRetribution.webp";
import hexRuin from "/IconPerks_hexRuin.webp";
import hexTheThirdSeal from "/IconPerks_hexTheThirdSeal.webp";
import hexThrillOfTheHunt from "/IconPerks_hexThrillOfTheHunt.webp";
import hexUndying from "/IconPerks_hexUndying.webp";
import hoarder from "/IconPerks_hoarder.webp";
import hope from "/IconPerks_hope.webp";
import hubris from "/IconPerks_hubris.webp";
import hyperfocus from "/IconPerks_hyperfocus.webp";
import hysteria from "/IconPerks_hysteria.webp";
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
import lethalPursuer from "/IconPerks_lethalPursuer.webp";
import leverage from "/IconPerks_leverage.webp";
import lightborn from "/IconPerks_lightborn.webp";
import lightweight from "/IconPerks_lightweight.webp";
import lithe from "/IconPerks_lithe.webp";
import lowProfile from "/IconPerks_lowProfile.webp";
import luckyBreak from "/IconPerks_luckyBreak.webp";
import madGrid from "/IconPerks_madGrit.webp";
import makeYourChoice from "/IconPerks_makeYourChoice.webp";
import mercilessStorm from "/IconPerks_mercilessStorm.webp";
import mettleOfMan from "/IconPerks_mettleOfMan.webp";
import fearmonger from "/IconPerks_mindbreaker.webp";
import monitorAndAbuse from "/IconPerks_monitorAndAbuse.webp";
import nemesis from "/IconPerks_nemesis.webp";
import noMither from "/IconPerks_noMither.webp";
import noOneLeftBehind from "/IconPerks_noOneLeftBehind.webp";
import noWayOut from "/IconPerks_noWayOut.webp";
import nowhereToHide from "/IconPerks_nowhereToHide.webp";
import objectOfObsession from "/IconPerks_objectOfObsession.webp";
import offTheRecord from "/IconPerks_offTheRecord.webp";
import openHanded from "/IconPerks_open-Handed.webp";
import oppression from "/IconPerks_oppression.webp";
import overcharge from "/IconPerks_overcharge.webp";
import overcome from "/IconPerks_overcome.webp";
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
import reactiveHealing from "/IconPerks_reactiveHealing.webp";
import reassurance from "/IconPerks_reassurance.webp";
import redHerring from "/IconPerks_redHerring.webp";
import rememberMe from "/IconPerks_rememberMe.webp";
import renewal from "/IconPerks_renewal.webp";
import repressedAliance from "/IconPerks_repressedAlliance.webp";
import residualManifest from "/IconPerks_residualManifest.webp";
import resilience from "/IconPerks_resilience.webp";
import resurgence from "/IconPerks_resurgence.webp";
import rookieSpirit from "/IconPerks_rookieSpirit.webp";
import saboteur from "/IconPerks_saboteur.webp";
import saveTheBestForLast from "/IconPerks_saveTheBestForLast.webp";
import scourgeHookFloodsOfRage from "/IconPerks_scourgeHookFloodsOfRage.webp";
import scourgeHookGiftOfPain from "/IconPerks_scourgeHookGiftOfPain.webp";
import scourgeHookMonstrousShrine from "/IconPerks_scourgeHookMonstrousShrine.webp";
import scourgeHookPainResonance from "/IconPerks_scourgeHookPainResonance.webp";
import selfCare from "/IconPerks_self-Care.webp";
import selfPreservation from "/IconPerks_self-Preservation.webp";
import septicTouch from "/IconPerks_septicTouch.webp";
import shadowborn from "/IconPerks_shadowborn.webp";
import shatteredHope from "/IconPerks_shatteredHope.webp";
import situationalAwareness from "/IconPerks_situationalAwareness.webp";
import slipperyMeat from "/IconPerks_slipperyMeat.webp";
import sloppyButcher from "/IconPerks_sloppyButcher.webp";
import smallGame from "/IconPerks_smallGame.webp";
import smashHit from "/IconPerks_smashHit.webp";
import soleSurvivor from "/IconPerks_soleSurvivor.webp";
import solidarity from "/IconPerks_solidarity.webp";
import soulGuard from "/IconPerks_soulGuard.webp";
import spiesFromTheShadows from "/IconPerks_spiesFromTheShadows.webp";
import spineChill from "/IconPerks_spineChill.webp";
import spiritFury from "/IconPerks_spiritFury.webp";
import sprintBurst from "/IconPerks_sprintBurst.webp";
import stakeOut from "/IconPerks_stakeOut.webp";
import starstruck from "/IconPerks_starstruck.webp";
import streetwise from "/IconPerks_streetwise.webp";
import stridor from "/IconPerks_stridor.webp";
import superiorAnatomy from "/IconPerks_superiorAnatomy.webp";
import jolt from "/IconPerks_surge.webp";
import surveillance from "/IconPerks_surveillance.webp";
import teamworkCollectiveStealth from "/IconPerks_teamworkCollectiveStealth.webp";
import teamworkPowerOfTwo from "/IconPerks_teamworkPowerOfTwo.webp";
import technician from "/IconPerks_technician.webp";
import tenacity from "/IconPerks_tenacity.webp";
import terminus from "/IconPerks_terminus.webp";
import territorialImperitive from "/IconPerks_territorialImperative.webp";
import thanatophobia from "/IconPerks_thanatophobia.webp";
import thisIsNotHappening from "/IconPerks_thisIsNotHappening.webp";
import thrillingTremors from "/IconPerks_thrillingTremors.webp";
import thwack from "/IconPerks_thwack.webp";
import tinkerer from "/IconPerks_tinkerer.webp";
import trailOfTorment from "/IconPerks_trailOfTorment.webp";
import unbreakable from "/IconPerks_unbreakable.webp";
import unnervingPresence from "/IconPerks_unnervingPresence.webp";
import unrelenting from "/IconPerks_unrelenting.webp";
import upTheAnte from "/IconPerks_upTheAnte.webp";
import urbanEvasion from "/IconPerks_urbanEvasion.webp";
import vigil from "/IconPerks_vigil.webp";
import visionary from "/IconPerks_visionary.webp";
import wakeUp from "/IconPerks_wakeUp.webp";
import wellMakeIt from "/IconPerks_wellMakeIt.webp";
import wereGonnaLiveForever from "/IconPerks_wereGonnaLiveForever.webp";
import whispers from "/IconPerks_whispers.webp";
import windowsOfOpportunity from "/IconPerks_windowsOfOpportunity.webp";
import wiretap from "/IconPerks_wiretap.webp";
import zanshinTactics from "/IconPerks_zanshinTactics.webp";

import Icon, { ICON_TRANSFORMATION } from "./Icon";
import Settings from "./Settings";
import darkMode from "./images/dark-mode.png";
import lightMode from "./images/light-mode.png";

export type PerksValue = "all" | "survivor" | "killer";
export type GamemodeValue = "time attack" | "endless";
export type TimerValue = 30 | 60 | 120;
export type ValueType = PerksValue | GamemodeValue | TimerValue;
export type ColorTheme = "light" | "dark";
type Answer = null | "correct" | "wrong";
type Perk = {
  imageSource: string;
  role: "survivor" | "killer";
};

const perksArray: Perk[] = [
  { imageSource: slipperyMeat, role: "survivor" },
  { imageSource: kinship, role: "survivor" },
  { imageSource: lowProfile, role: "survivor" },
  { imageSource: reactiveHealing, role: "survivor" },
  { imageSource: wiretap, role: "survivor" },
  { imageSource: selfPreservation, role: "survivor" },
  { imageSource: smashHit, role: "survivor" },
  { imageSource: fastTrack, role: "survivor" },
  { imageSource: builtToLast, role: "survivor" },
  { imageSource: desperateMeasures, role: "survivor" },
  { imageSource: visionary, role: "survivor" },
  { imageSource: forThePeople, role: "survivor" },
  { imageSource: redHerring, role: "survivor" },
  { imageSource: offTheRecord, role: "survivor" },
  { imageSource: selfAware, role: "survivor" },
  { imageSource: situationalAwareness, role: "survivor" },
  { imageSource: repressedAliance, role: "survivor" },
  { imageSource: bloodPact, role: "survivor" },
  { imageSource: soulGuard, role: "survivor" },
  { imageSource: boonExponential, role: "survivor" },
  { imageSource: correctiveAction, role: "survivor" },
  { imageSource: overcome, role: "survivor" },
  { imageSource: boonShadowStep, role: "survivor" },
  { imageSource: boonCircleOfHealing, role: "survivor" },
  { imageSource: clairvoyance, role: "survivor" },
  { imageSource: blastMine, role: "survivor" },
  { imageSource: resurgence, role: "survivor" },
  { imageSource: counterForce, role: "survivor" },
  { imageSource: rookieSpirit, role: "survivor" },
  { imageSource: flashbang, role: "survivor" },
  { imageSource: biteTheBullet, role: "survivor" },
  { imageSource: hyperfocus, role: "survivor" },
  { imageSource: reassurance, role: "survivor" },
  { imageSource: betterThanNew, role: "survivor" },
  { imageSource: fearmonger, role: "killer" },
  { imageSource: claustrophobia, role: "killer" },
  { imageSource: jolt, role: "killer" },
  { imageSource: terminus, role: "killer" },
  { imageSource: awakenedAwareness, role: "killer" },
  { imageSource: superiorAnatomy, role: "killer" },
  { imageSource: hexPentimento, role: "killer" },
  { imageSource: scourgeHookPainResonance, role: "killer" },
  { imageSource: grimEmbrace, role: "killer" },
  { imageSource: scourgeHookGiftOfPain, role: "killer" },
  { imageSource: hexPlaything, role: "killer" },
  { imageSource: deadlock, role: "killer" },
  { imageSource: eruption, role: "killer" },
  { imageSource: hysteria, role: "killer" },
  { imageSource: lethalPursuer, role: "killer" },
  { imageSource: noWayOut, role: "killer" },
  { imageSource: hexCrowdControl, role: "killer" },
  { imageSource: starstruck, role: "killer" },
  { imageSource: hexUndying, role: "killer" },
  { imageSource: hexBloodFavour, role: "killer" },
  { imageSource: dragonsGrip, role: "killer" },
  { imageSource: deathbound, role: "killer" },
  { imageSource: trailOfTorment, role: "killer" },
  { imageSource: forcedPenance, role: "killer" },
  { imageSource: hexRetribution, role: "killer" },
  { imageSource: deadMansSwitch, role: "killer" },
  { imageSource: gearhead, role: "killer" },
  { imageSource: aceInTheHole, role: "survivor" },
  { imageSource: adrenaline, role: "survivor" },
  { imageSource: aftercare, role: "survivor" },
  { imageSource: agitation, role: "killer" },
  { imageSource: alert, role: "survivor" },
  { imageSource: aNursesCalling, role: "killer" },
  { imageSource: anyMeansNecessary, role: "survivor" },
  { imageSource: appraisal, role: "survivor" },
  { imageSource: autodidact, role: "survivor" },
  { imageSource: backgroundPlayer, role: "survivor" },
  { imageSource: balancedLanding, role: "survivor" },
  { imageSource: bamboozle, role: "killer" },
  { imageSource: barbecueAndChilli, role: "killer" },
  { imageSource: beastOfPrey, role: "killer" },
  { imageSource: bitterMurmur, role: "killer" },
  { imageSource: bloodEcho, role: "killer" },
  { imageSource: bloodhound, role: "killer" },
  { imageSource: bloodRush, role: "survivor" },
  { imageSource: bloodWarden, role: "killer" },
  { imageSource: boilOver, role: "survivor" },
  { imageSource: bond, role: "survivor" },
  { imageSource: boonDarkTheory, role: "survivor" },
  { imageSource: borrowedTime, role: "survivor" },
  { imageSource: botanyKnowledge, role: "survivor" },
  { imageSource: breakdown, role: "survivor" },
  { imageSource: breakout, role: "survivor" },
  { imageSource: brutalStrength, role: "killer" },
  { imageSource: buckleUp, role: "survivor" },
  { imageSource: callOfBrine, role: "killer" },
  { imageSource: calmSpirit, role: "survivor" },
  { imageSource: corruptIntervention, role: "killer" },
  { imageSource: coulrophobia, role: "killer" },
  { imageSource: coupDeGrace, role: "killer" },
  { imageSource: cutLoose, role: "survivor" },
  { imageSource: danceWithMe, role: "survivor" },
  { imageSource: darkDevotion, role: "killer" },
  { imageSource: darknessRevealed, role: "killer" },
  { imageSource: darkSense, role: "survivor" },
  { imageSource: deadHard, role: "survivor" },
  { imageSource: deception, role: "survivor" },
  { imageSource: decisiveStrike, role: "survivor" },
  { imageSource: deerstalker, role: "killer" },
  { imageSource: dejaVu, role: "survivor" },
  { imageSource: deliverance, role: "survivor" },
  { imageSource: detectivesHunch, role: "survivor" },
  { imageSource: discordance, role: "killer" },
  { imageSource: dissolution, role: "killer" },
  { imageSource: distortion, role: "survivor" },
  { imageSource: distressing, role: "killer" },
  { imageSource: diversion, role: "survivor" },
  { imageSource: dyingLight, role: "killer" },
  { imageSource: empathicConnection, role: "survivor" },
  { imageSource: empathy, role: "survivor" },
  { imageSource: enduring, role: "killer" },
  { imageSource: fireUp, role: "killer" },
  { imageSource: flipFlop, role: "survivor" },
  { imageSource: fogwise, role: "survivor" },
  { imageSource: franklinsDemise, role: "killer" },
  { imageSource: friendlyCompetition, role: "survivor" },
  { imageSource: furtiveChase, role: "killer" },
  { imageSource: gameAFoot, role: "killer" },
  { imageSource: guardian, role: "survivor" },
  { imageSource: hangmansTrick, role: "killer" },
  { imageSource: headOn, role: "survivor" },
  { imageSource: hexDevourHope, role: "killer" },
  { imageSource: hexFaceTheDarkness, role: "killer" },
  { imageSource: hexHauntedGround, role: "killer" },
  { imageSource: hexHuntressLullaby, role: "killer" },
  { imageSource: hexNoOneEscapesDeath, role: "killer" },
  { imageSource: hexRuin, role: "killer" },
  { imageSource: hexTheThirdSeal, role: "killer" },
  { imageSource: hexThrillOfTheHunt, role: "killer" },
  { imageSource: hoarder, role: "killer" },
  { imageSource: hope, role: "survivor" },
  { imageSource: hubris, role: "killer" },
  { imageSource: imAllEars, role: "killer" },
  { imageSource: infectiousFright, role: "killer" },
  { imageSource: innerFocus, role: "survivor" },
  { imageSource: innerHealing, role: "survivor" },
  { imageSource: insidious, role: "killer" },
  { imageSource: ironGrasp, role: "killer" },
  { imageSource: ironMaiden, role: "killer" },
  { imageSource: ironWill, role: "survivor" },
  { imageSource: kindred, role: "survivor" },
  { imageSource: knockOut, role: "killer" },
  { imageSource: leader, role: "survivor" },
  { imageSource: leftBehind, role: "survivor" },
  { imageSource: leverage, role: "killer" },
  { imageSource: lightborn, role: "killer" },
  { imageSource: lightweight, role: "survivor" },
  { imageSource: lithe, role: "survivor" },
  { imageSource: luckyBreak, role: "survivor" },
  { imageSource: madGrid, role: "killer" },
  { imageSource: makeYourChoice, role: "killer" },
  { imageSource: mercilessStorm, role: "killer" },
  { imageSource: mettleOfMan, role: "survivor" },
  { imageSource: monitorAndAbuse, role: "killer" },
  { imageSource: nemesis, role: "killer" },
  { imageSource: noMither, role: "survivor" },
  { imageSource: noOneLeftBehind, role: "survivor" },
  { imageSource: nowhereToHide, role: "killer" },
  { imageSource: objectOfObsession, role: "survivor" },
  { imageSource: openHanded, role: "survivor" },
  { imageSource: oppression, role: "killer" },
  { imageSource: overcharge, role: "killer" },
  { imageSource: overwhelmingPresence, role: "killer" },
  { imageSource: overzealous, role: "survivor" },
  { imageSource: parentalGuidance, role: "survivor" },
  { imageSource: pharmacy, role: "survivor" },
  { imageSource: playWithYourFood, role: "killer" },
  { imageSource: plunderersInstinct, role: "survivor" },
  { imageSource: poised, role: "survivor" },
  { imageSource: popGoesTheWeasel, role: "killer" },
  { imageSource: potentialEnergy, role: "survivor" },
  { imageSource: powerStruggle, role: "survivor" },
  { imageSource: predator, role: "killer" },
  { imageSource: premonition, role: "survivor" },
  { imageSource: proveThyself, role: "survivor" },
  { imageSource: quickAndQuiet, role: "survivor" },
  { imageSource: quickGambit, role: "survivor" },
  { imageSource: rancor, role: "killer" },
  { imageSource: rememberMe, role: "killer" },
  { imageSource: renewal, role: "survivor" },
  { imageSource: residualManifest, role: "survivor" },
  { imageSource: resilience, role: "survivor" },
  { imageSource: saboteur, role: "survivor" },
  { imageSource: saveTheBestForLast, role: "killer" },
  { imageSource: scourgeHookFloodsOfRage, role: "killer" },
  { imageSource: scourgeHookMonstrousShrine, role: "killer" },
  { imageSource: selfCare, role: "survivor" },
  { imageSource: septicTouch, role: "killer" },
  { imageSource: shadowborn, role: "killer" },
  { imageSource: shatteredHope, role: "killer" },
  { imageSource: sloppyButcher, role: "killer" },
  { imageSource: smallGame, role: "survivor" },
  { imageSource: soleSurvivor, role: "survivor" },
  { imageSource: solidarity, role: "survivor" },
  { imageSource: spiesFromTheShadows, role: "killer" },
  { imageSource: spineChill, role: "survivor" },
  { imageSource: spiritFury, role: "killer" },
  { imageSource: sprintBurst, role: "survivor" },
  { imageSource: stakeOut, role: "survivor" },
  { imageSource: streetwise, role: "survivor" },
  { imageSource: stridor, role: "killer" },
  { imageSource: surveillance, role: "killer" },
  { imageSource: teamworkCollectiveStealth, role: "survivor" },
  { imageSource: teamworkPowerOfTwo, role: "survivor" },
  { imageSource: technician, role: "survivor" },
  { imageSource: tenacity, role: "survivor" },
  { imageSource: territorialImperitive, role: "killer" },
  { imageSource: thanatophobia, role: "killer" },
  { imageSource: thisIsNotHappening, role: "survivor" },
  { imageSource: thrillingTremors, role: "killer" },
  { imageSource: thwack, role: "killer" },
  { imageSource: tinkerer, role: "killer" },
  { imageSource: unbreakable, role: "survivor" },
  { imageSource: unnervingPresence, role: "killer" },
  { imageSource: unrelenting, role: "killer" },
  { imageSource: upTheAnte, role: "survivor" },
  { imageSource: urbanEvasion, role: "survivor" },
  { imageSource: vigil, role: "survivor" },
  { imageSource: wakeUp, role: "survivor" },
  { imageSource: wellMakeIt, role: "survivor" },
  { imageSource: wereGonnaLiveForever, role: "survivor" },
  { imageSource: whispers, role: "killer" },
  { imageSource: windowsOfOpportunity, role: "survivor" },
  { imageSource: zanshinTactics, role: "killer" },
];

function App() {
  const [score, setScore] = useState<number>(0);
  const [totalGuesses, setTotalGuesses] = useState<number>(0);
  const [currentAnswer, setCurrentAnswer] = useState<Answer>(null);
  const [colorTheme, setColorTheme] = useState<ColorTheme>(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );
  const [perks, setPerks] = useState<Perk[]>(() => shuffleArray(perksArray));
  const [nextPerkIndex, setNextPerkIndex] = useState<number>(1);
  const [perksSetting, setPerksSetting] = useState<PerksValue>("all");
  const [gamemodeSetting, setGamemodeSetting] =
    useState<GamemodeValue>("endless");
  const timerDuration = useRef<number>(60);
  const timerInterval = useRef<number>();
  const handlePerksSettingsUpdated = (perksSetting: PerksValue) => {
    console.log(`Perk setting changed to '${perksSetting}'`);
    setPerksSetting(perksSetting);
    resetGame();
    let newPerks: Perk[] = [];
    if (perksSetting === "all") newPerks = shuffleArray(perksArray);
    if (perksSetting === "survivor") newPerks = shuffleArray(survivorPerks);
    if (perksSetting === "killer") newPerks = shuffleArray(killerPerks);
    setPerks(newPerks);
  };
  const handleGamemodeSettingsUpdated = (gamemodeSetting: GamemodeValue) => {
    console.log(`Gamemode setting changed to '${gamemodeSetting}'`);
    setGamemodeSetting(gamemodeSetting);
    if (timerInterval.current) clearInterval(timerInterval.current);
    if (gamemodeSetting === "time attack") {
      setTimer(timerDuration.current);
      timerInterval.current = setInterval(
        () =>
          setTimer((prev) => {
            if (prev > 0) return prev - 1;
            clearInterval(timerInterval.current);
            return prev;
          }),
        1000
      );
    }
    resetGame();
  };
  const handleTimerSettingsUpdated = (timerSetting: TimerValue) => {
    console.log(`Time setting changed to ${timerSetting}`);
    timerDuration.current = timerSetting;
  };

  const resetGame = () => {
    console.log("resetting game");
    setScore(0);
    setTotalGuesses(0);
    setNextPerkIndex(1);
    setPerks((prev) => shuffleArray(prev));
  };

  const none: ICON_TRANSFORMATION = "none";
  const invertY: ICON_TRANSFORMATION = "invert-y";
  const rotate180: ICON_TRANSFORMATION = "rotate 180";
  const invertYRotate180: ICON_TRANSFORMATION = "invert-y rotate 180";
  const [transformationsPermutation, setTransformationsPermutation] = useState<
    ICON_TRANSFORMATION[]
  >(shuffleArray([none, invertY, rotate180, invertYRotate180]));

  const survivorPerks = perksArray.filter((perk) => {
    return perk.role === "survivor";
  });
  const killerPerks = perksArray.filter((perk) => {
    return perk.role === "killer";
  });

  const currentPerkIndex =
    nextPerkIndex === 0 ? perks.length - 1 : nextPerkIndex - 1;
  const currentPerk = perks[currentPerkIndex];
  const nextPerk = perks[nextPerkIndex];
  useEffect(() => {
    if (!nextPerk) {
      console.log("No next perk found. Are you debugging?");
      return;
    }
    new Image().src = nextPerk.imageSource;
    console.log(nextPerk);
  }, [nextPerk]);

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

  const [timer, setTimer] = useState<number>(0);

  const generateNewIcons = () => {
    console.log("generating new icons");
    setTransformationsPermutation(
      shuffleArray([none, invertY, rotate180, invertYRotate180])
    );
    if (nextPerkIndex === perks.length - 1) {
      console.log("Shuffling perks");
      setPerks((prev) => shuffleArray(prev));
      setNextPerkIndex(0);
      return;
    }
    console.log("Next perk");
    setNextPerkIndex((prev) => prev + 1);
  };

  const handleColorThemeToggle = (colorTheme: ColorTheme) => {
    if (colorTheme === "light") {
      localStorage.theme = "light";
      setColorTheme("light");
    } else {
      localStorage.theme = "dark";
      setColorTheme("dark");
    }
    updateThemeDOM();
  };

  const updateThemeDOM = () => {
    console.log("updating DOM");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-neutral-100 to-neutral-400 dark:from-neutral-800 dark:to-neutral-900">
      <div className="absolute top-0 flex w-screen justify-between p-2">
        <div>
          <Settings
            handlePerksSettingsUpdated={handlePerksSettingsUpdated}
            handleGamemodeSettingsUpdated={handleGamemodeSettingsUpdated}
            handleTimerSettingsUpdated={handleTimerSettingsUpdated}
            colorTheme={colorTheme}
          />
        </div>
        <div className="capitalize text-slate-800 dark:text-slate-100">
          Perks: {perksSetting}
        </div>
        <div>
          {colorTheme === "dark" ? (
            <button
              className="w-10"
              onClick={() => handleColorThemeToggle("light")}
            >
              <img src={lightMode} />
            </button>
          ) : (
            <button
              className="w-10"
              onClick={() => handleColorThemeToggle("dark")}
            >
              <img src={darkMode} />
            </button>
          )}
        </div>
      </div>
      <div className="flex h-screen flex-col justify-center min-[800px]:gap-20">
        <>
          {gamemodeSetting === "time attack" && (
            <div className="text-center text-4xl dark:text-white">
              {timer > 0 ? (
                `Timer: ${timer}`
              ) : (
                <>
                  Time's Up!{" "}
                  <span
                    className="cursor-pointer text-blue-500 underline dark:text-blue-600"
                    onClick={() => handleGamemodeSettingsUpdated("time attack")}
                  >
                    Play Again?
                  </span>
                </>
              )}
            </div>
          )}
          <h1 className="text-center text-5xl text-slate-800 dark:text-slate-100">
            Which icon is correct?
          </h1>
          <div className="ml-auto mr-auto grid w-[vw] grid-cols-2 gap-1 p-2 min-[550px]:w-auto min-[800px]:flex min-[800px]:justify-center">
            {transformationsPermutation.map(
              (transform: ICON_TRANSFORMATION) => {
                return (
                  <Icon
                    imageSrc={currentPerk.imageSource}
                    handleSelectedIcon={handleSelectedIcon}
                    transform={transform}
                    key={uuid()}
                    disabled={gamemodeSetting === "time attack" && timer === 0}
                  />
                );
              }
            )}
          </div>
          <div className="flex justify-center text-4xl text-slate-800 dark:text-slate-100">
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
    </div>
  );
}

export default App;
