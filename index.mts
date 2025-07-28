import { inflate } from 'pako';
import { Blowfish } from 'egoroof-blowfish';


export interface Vehicle {
    isAlive: number;
    vehPostProgression: number[];
    prestigeGradeMarkID: number;
    personalMissionInfo: PersonalMissionInfo;
    forbidInBattleInvitations: number;
    fakeName: string;
    teamPanelMode?: number;
    igrType: number;
    ranked: number[];
    customRoleSlotTypeId: number;
    deathInfo: {
        equipmentID: number;
        reasonID: number;
        numVehiclesAffected: number;
        killerID: number;
        victimID: number;
    } | null;
    botDisplayStatus: number;
    isTeamKiller: number;
    personalMissionIDs: number[];
    vehicleType: string;
    name: string;
    prestigeLevel: number;
    stFrags?: number;
    respawnID?: number;
    maxHealth: number;
    avatarSessionID: string;
    clanAbbrev: string;
    __generation: number;
    badges: Array<any[]>;
    team: number;
    overriddenBadge: number;
    events: Events;
}

export interface Events {
    deathOrder?: number;
}

export interface PersonalMissionInfo {
    [mission_id: `${number}`]: [number, number];
}

export interface EntityCaptured {
}

export interface Common {
    division: null;
    bonusCapsOverrides?: {};
    finishReason: number;
    guiType: number;
    commonNumDefended: number;
    commonNumCaptured: number;
    commonNumStarted: number;
    arenaCreateTime: number;
    commonNumDestroyed: number;
    winnerTeam: number;
    teamHealth: { [key: string]: number };
    arenaTypeID: number;
    gasAttackWinnerTeam: number;
    duration: number;
    vehLockMode: number;
    battleModifiersDescr?: [];
    finishAllPlayersLeft: boolean;
    bonusType: number;
    bots: Bots;
    accountCompDescr: null;
}

export interface Bots {
}

export interface Avatar {
    bpChapter?: number;
    avatarKills: number;
    subtotalFlXP?: number,
    playerRank: number;
    boosterFlXPFactor100?: number;
    boosterFlXP?: number;
    bpTopPoints: number;
    battlePassComplete: boolean;
    hasBattlePass: boolean;
    avatarDamaged: number;
    prevMetaLevel?: number[];
    totalDamaged: number;
    flXP?: number;
    unchargedShellCosts?: number;
    flXPReplay?: string;
    sumPoints?: number;
    bpNonChapterPointsDiff: number;
    bpChaptersInfo?: BpChaptersInfo;
    avatarDamageDealt: number;
    creditsAfterShellCosts?: number;
    fairplayViolations: number[];
    originalFlXP?: number;
    reservesModifier?: number;
    availablePoints: number;
    badges: Array<number[]>;
    bpBonusPoints: number;
    metaLevel?: number[];
}

export interface BpChaptersInfo {
}

export interface VehicleStatistics {
    spotted: number;
    vehicleNumCaptured: number;
    damageAssistedTrack: number;
    xpPenalty: number;
    directTeamHits: number;
    damageDealt: number;
    artilleryFortEquipDamageDealt: number;
    piercingsReceived: number;
    sniperDamageDealt: number;
    destructibleDeaths: any[];
    piercingEnemyHits: number;
    damageAssistedRadio: number;
    marksOnGun: number;
    stunDuration: number;
    piercings: number;
    damageBlockedByArmor: number;
    xp: number;
    droppedCapturePoints: number;
    killerID: number;
    "xp/other": number;
    index: number;
    directHitsReceived: number;
    damageReceivedFromInvisibles: number;
    explosionHitsReceived: number;
    achievementXP: number;
    deathReason: number;
    capturePoints: number;
    numRecovered: number;
    directEnemyHits: number;
    maxHealth: number;
    damageEventList: null;
    tdestroyedModules: number;
    health: number;
    isTeamKiller: boolean | number;
    entityCaptured: EntityCaptured;
    kills: number;
    inBattleAchievements: any[];
    stopRespawn: boolean;
    mileage: number;
    achievementCredits: number;
    achievements: any[];
    "xp/assist": number;
    shots: number;
    rolloutsCount: number;
    damagedHp: number;
    flagCapture: number;
    damaged: number;
    isFirstBlood: boolean;
    accountDBID: number;
    resourceAbsorbed: number;
    credits: number;
    lifeTime: number;
    noDamageDirectHitsReceived: number;
    numDefended: number;
    stunned: number;
    equipmentDamageDealt: number;
    tdamageDealt: number;
    typeCompDescr: number;
    soloFlagCapture: number;
    destructiblesHits: number;
    capturingBase: null | number;
    damageAssistedStun: number;
    tkills: number;
    potentialDamageReceived: number;
    damageReceived: number;
    destructiblesNumDestroyed: number;
    damageAssistedSmoke: number;
    destructiblesDamageDealt: number;
    flagActions: number[];
    winPoints: number;
    explosionHits: number;
    team: number;
    "xp/attack": number;
    deathCount: number;
    directHits: number;
    damageAssistedInspire: number;
    poiCapturedByOwnTeam: number;
    achievementFreeXP: number;
    stunNum: number;
}

export interface ReplayMetadata {
    playerVehicle: string;
    clientVersionFromXml: string;
    mapDisplayName: string;
    clientVersionFromExe: string;
    playerName: string;
    playerID: number;
    serverName: string;
    vehicles: { [avatar_id: string]: Vehicle };
    serverSettings: Record<string, unknown>;
    dateTime: string;
    mapName: string;
    gameplayID: string;
    battleType: number;
    hasMods: boolean;
    regionCode: string;
};

export interface PersonalAvatar {
    bpChapter?: number;
    boosterFlXP?: number;
    subtotalFlXP?: number;
    clanDBID: number;
    eventBattlePassPoints: number;
    bpTopPoints: number;
    eventFreeXP: number;
    goldBankGain: number;
    originalBattlePassPoints: number;
    metaLevel?: [number, number];
    bpcoinReplay: null;
    flXP?: number;
    questTokensCount?: Pm2Progress;
    bpChaptersInfo?: Pm2Progress;
    equipCoinReplay: null;
    freeXPReplay: null;
    sumPoints?: number;
    xp: number;
    eventBpcoin: number;
    badges: Array<number[]>;
    activeRents: ActiveRents;
    eventEquipCoin: number;
    eventEventCoin: number;
    eventCredits: number;
    originalFlXP?: number;
    xpReplay: null;
    crystal: number;
    commendationsReceived?: number;
    damageEventList: null;
    eligibleForCrystalRewards: boolean;
    battlePassPoints: number;
    creditsAfterShellCosts?: number;
    dogTags: DogTags;
    isPrematureLeave: boolean;
    squadBonusInfo: SquadBonusInfo | null;
    battlePassComplete: boolean;
    winnerIfDraw: number;
    replayURL: string;
    playerRank: number;
    battlePassPointsReplay: null;
    freeXP: number;
    avatarKills: number;
    eventTMenXP: number;
    avatarDamageDealt: number;
    avatarDamageEventList: null;
    commendationsSent?: number;
    PM2Progress: Pm2Progress;
    hasBattlePass: boolean;
    fairplayViolations: number[];
    prevMetaLevel?: [number, number];
    accountDBID: number;
    reservesModifier?: number;
    vseBattleResults: Pm2Progress;
    goldReplay: null;
    eventCrystal: number;
    eventGold: number;
    unchargedShellCosts?: number;
    flXPReplay: null;
    avatarPlayerSatisfactionRating?: number[];
    eventCoinReplay: null;
    questsProgress: Pm2Progress;
    totalDamaged: number;
    bpBonusPoints: number;
    avatarAmmo: any[];
    fareTeamXPPosition: number;
    credits: number;
    boosterFlXPFactor100?: number;
    watchedBattleToTheEnd: boolean;
    eventXP: number;
    crystalReplay: null;
    recruitsIDs: any[];
    referralBonusVehicles: number[];
    recruiterID: number;
    bpNonChapterPointsDiff: number;
    progressiveReward: null;
    eventBattlePassPointsList: any[];
    rankChange: number;
    team: number;
    avatarDamaged: number;
    availablePoints: number;
    fortClanDBIDs: any[];
    creditsReplay: null;
    tmenXPReplay: null;
}

export interface Pm2Progress {
}

export interface ActiveRents {
    [rent: `${number}`]: number;
}

export interface DogTags {
    unlockedComps: any[];
    upgradedComps: any[];
}

export interface SquadBonusInfo {
    vehicles: number[];
    isPremSquad: boolean;
    size: number;
}

export interface MainVehicleDetails {
    spotted: number;
    crits: number;
    damageAssistedTrack: number;
    damageAssistedStun: number;
    fire: number;
    deathReason: number;
    piercings: number;
    directEnemyHits: number;
    damageDealt: number;
    damageAssistedSmoke: number;
    piercingEnemyHits: number;
    damageAssistedRadio: number;
    rickochetsReceived: number;
    stunDuration: number;
    damageReceived: number;
    explosionHits: number;
    damageBlockedByArmor: number;
    noDamageDirectHitsReceived: number;
    targetKills: number;
    stunNum: number;
    damageAssistedInspire: number;
    directHits: number;
}

export interface PersonalVehicle {
    eventEventCoinList: any[];
    vehTypeLockTime: number;
    eventBpcoinList: any[];
    stunned: number;
    factualFreeXP: number;
    creditsToDraw: number;
    orderFreeXPFactor100: number;
    orderXPFactor100: number;
    damageAssistedRadio: number;
    stunDuration: number;
    freeXPReplay: null;
    originalPremSquadCredits: number;
    winPoints: number;
    "xp/other": number;
    creditsContributionIn: number;
    premiumTmenXPFactor100: number;
    eventCredits: number;
    piggyBank: number;
    xpReplay: null;
    achievementXP: number;
    igrXPFactor10: number;
    aogasFactor10: number;
    destructibleDeaths: any[];
    originalCreditsContributionIn: number;
    winAloneAgainstVehicleCount: number;
    originalCreditsPenalty: number;
    damagedWhileMoving: number;
    kills: number;
    eventTMenXP: number;
    percentFromTotalTeamDamage: number;
    premiumPlusXPFactor100: number;
    bpcoin: number;
    originalGold: number;
    markOfMastery: number;
    noDamageDirectHitsReceived: number;
    equipmentDamageDealt: number;
    premiumPlusTmenXPFactor100: number;
    boosterCredits: number;
    originalTMenXP: number;
    battlePassPointsReplay: null;
    eventFreeXPList: any[];
    tkills: number;
    shots: number;
    team: number;
    referral20Credits: number;
    deathCount: number;
    dossierLogRecords: any[];
    referral20XP: number;
    stunNum: number;
    spotted: number;
    xpPenalty: number;
    originalCrystal: number;
    killerID: number;
    gold: number;
    boosterCreditsFactor100: number;
    damagedHp: number;
    soloFlagCapture: number;
    currencies: any;
    premiumVehicleXPFactor100: number;
    equipCoinReplay: null;
    additionalXPFactor10: number;
    eventBpcoin: number;
    subtotalCrystal: number;
    killedAndDamagedByAllSquadmates: number;
    refSystemXPFactor10: number;
    tmenXPReplay: null;
    rolloutsCount: number;
    eventGoldFactor100List: any[];
    inBattleAchievements: any[];
    creditsContributionOut: number;
    directEnemyHits: number;
    originalCreditsContributionOutSquad: number;
    damageEventList: null;
    premiumPlusCreditsFactor100: number;
    damageReceived: number;
    tdestroyedModules: number;
    health: number;
    eventEquipCoinList: any[];
    stopRespawn: boolean;
    subtotalGold: number;
    mileage: number;
    achievements: any[];
    orderFreeXP: number;
    eventGoldList: any[];
    boosterTMenXPFactor100: number;
    wotPlusCreditsFactor100: number;
    dossierPopUps: any[];
    equipCoin: number;
    isFirstBlood: boolean;
    setupsIndexes: { [key: string]: number };
    resourceAbsorbed: number;
    goldReplay: null;
    committedSuicide: boolean;
    artilleryFortEquipDamageDealt: number;
    eventTMenXPList: any[];
    autoEquipCost: number[];
    tdamageDealt: number;
    eventTMenXPFactor100List: any[];
    destructiblesHits: number;
    eventXP: number;
    damagedWhileEnemyMoving: number;
    potentialDamageReceived: number;
    damageDealt: number;
    destructiblesNumDestroyed: number;
    destructiblesDamageDealt: number;
    explosionHits: number;
    originalXPPenalty: number;
    marksOnGun: number;
    directHits: number;
    wotPlusFreeXP: number;
    c11nProgress: any;
    eventFreeXP: number;
    damageRating: number;
    repair: number;
    originalCredits: number;
    playerRankXPFactor100: number;
    damageAssistedTrack: number;
    autoEquipBoostersCost: number[];
    referral20CreditsFactor100: number;
    premiumCreditsFactor100: number;
    xpByTmen: Array<number[]>;
    sniperDamageDealt: number;
    fairplayFactor10: number;
    subtotalTMenXP: number;
    damageBlockedByArmor: number;
    xp: number;
    boosterXPFactor100: number;
    autoRepairCost: number;
    prestigeResults: PrestigeResults;
    damageReceivedFromInvisibles: number;
    orderTMenXP: number;
    flagActions: number[];
    boosterXP: number;
    orderTMenXPFactor100: number;
    numRecovered: number;
    appliedPremiumCreditsFactor100: number;
    maxHealth: number;
    damaged: number;
    damageAssistedStun: number;
    premSquadCredits: number;
    eventCrystalList: any[];
    premSquadCreditsFactor100: number;
    subtotalXP: number;
    squadXP: number;
    premMask: number;
    originalFreeXP: number;
    orderCredits: number;
    "xp/assist": number;
    freeXP: number;
    orderXP: number;
    premiumVehicleXP: number;
    flagCapture: number;
    tmenXP: number;
    appliedPremiumTmenXPFactor100: number;
    eventGold: number;
    subtotalEquipCoin: number;
    questsProgress: any;
    eventCoin: number;
    bpcoinReplay: null;
    originalCreditsContributionInSquad: number;
    wotPlusXP: number;
    boosterFreeXP: number;
    factualCredits: number;
    autoLoadCost: number[];
    subtotalFreeXP: number;
    crystal: number;
    crystalReplay: null;
    originalXP: number;
    originalCreditsToDrawSquad: number;
    wotPlusFreeXPFactor100: number;
    numDefended: number;
    achievementFreeXP: number;
    piercings: number;
    killsBeforeTeamWasDamaged: number;
    playerRankXP: number;
    wotPlusCredits: number;
    creditsPenalty: number;
    vehicleNumCaptured: number;
    directTeamHits: number;
    entityCaptured: any;
    lifeTime: number;
    piercingsReceived: number;
    movingAvgDamage: number;
    wotPlusXPFactor100: number;
    percentFromSecondBestDamage: number;
    piercingEnemyHits: number;
    creditsReplay: null;
    subtotalBpcoin: number;
    subtotalCredits: number;
    eventFreeXPFactor100List: any[];
    serviceProviderID: number;
    damageAssistedSmoke: number;
    droppedCapturePoints: number;
    eventEventCoin: number;
    directHitsReceived: number;
    typeCompDescr: number;
    deathReason: number;
    capturePoints: number;
    damageBeforeTeamWasDamaged: number;
    factualXP: number;
    explosionHitsReceived: number;
    details: { [target_id: `(${number}, ${number})`]: MainVehicleDetails };
    wotPlusCrewXP: number;
    eventXPFactor100List: any[];
    boosterTMenXP: number;
    eventEquipCoin: number;
    achievementCredits: number;
    originalCreditsToDraw: number;
    isPremium: boolean;
    originalCreditsContributionOut: number;
    subtotalEventCoin: number;
    "xp/attack": number;
    index: number;
    avatarDamageEventList: null;
    referral20XPFactor100: number;
    isWoTPlus: boolean;
    originalEventCoin: number;
    accountDBID: number;
    eventCrystal: number;
    flXPReplay: null;
    premiumXPFactor100: number;
    eventCoinReplay: null;
    squadXPFactor100: number;
    eventCreditsFactor100List: any[];
    isTeamKiller: boolean;
    eventCreditsList: any[];
    eventXPList: any[];
    capturingBase: null;
    prevMarkOfMastery: number;
    poiCapturedByOwnTeam: number;
    originalCreditsPenaltySquad: number;
    boosterFreeXPFactor100: number;
    wotPlusCrewXPFactor100: number;
    originalEquipCoin: number;
    dailyXPFactor10: number;
    orderCreditsFactor100: number;
    appliedPremiumXPFactor100: number;
    credits: number;
    damageAssistedInspire: number;
    originalBpcoin: number;
    battleNum: number;
}

export interface Player {
    igrType: number;
    clanAbbrev: string;
    clanDBID: number;
    realName: string;
    team: number;
    prebattleID: number;
    name: string;
}


export interface EntityCaptured {
}

export interface PrestigeResults {
    newPoints: number;
    oldPoints: number;
    newLevel: number;
    oldLevel: number;
    gainedPoints: number;
}


export interface ReplayData {
    personal: {
        [tank_id: `${number}`]: PersonalVehicle;
        avatar: PersonalAvatar;
    };
    players: { [account_id: `${number}`]: Player };
    vehicles: { [avatar_id: `${number}`]: VehicleStatistics[] };
    common: Common;
    arenaUniqueID: number,
    avatars: { [account_id: `${number}`]: Avatar }
}

export interface ReplayAvatarInfo {
    tkills?: number;
    frags: number;
}

export type PartialReplay = [ReplayMetadata];
export type Replay = [ReplayMetadata, [ReplayData, { [avatar_id: string]: Vehicle }, { [avatar_id: string]: ReplayAvatarInfo }]]

interface Packet {
    type: number;
    timestamp: number;
    data: ArrayBuffer;
}

const WOT_BLOWFISH_KEY = new Uint8Array([ 0xDE, 0x72, 0xBE, 0xA0, 0xDE, 0x04, 0xBE, 0xB1, 0xDE, 0xFE, 0xBE, 0xEF, 0xDE, 0xAD, 0xBE, 0xEF ]);

function bytesToBigInt(bytes: Uint8Array): bigint {
  let result = 0n;
  for (let i = 0; i < bytes.length; i++) {
    result |= BigInt(bytes[i]) << BigInt(i * 8);
  }
  return result;
}

function bigIntToBytes(num: bigint, length: number): Uint8Array {
  const result = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = Number((num >> BigInt(i * 8)) & 0xFFn);
  }
  return result;
}

function decryptReplayPythonStyle(data: Uint8Array, key: Uint8Array): Uint8Array {
  const blockSize = 8;
  const bf = new Blowfish(key, Blowfish.MODE.ECB, Blowfish.PADDING.NULL);
  const decrypted = new Uint8Array(data.length);
  let prevBlock: bigint | null = null;

  for (let i = blockSize; i + blockSize <= data.length; i += blockSize) {
    const encryptedBlock = data.slice(i, i + blockSize);
    const rawDecrypted = bf.decode(encryptedBlock, 1);

    let blockInt = bytesToBigInt(rawDecrypted);

    if (prevBlock !== null) {
      blockInt ^= prevBlock;
    }

    prevBlock = blockInt;

    decrypted.set(bigIntToBytes(blockInt, blockSize), i - blockSize);
  }

  return decrypted.slice(0, data.length - blockSize);
}

export default function parse(buffer: ArrayBuffer) {
    let dataView = new DataView(buffer);
    let signature = buffer.slice(0, 4);
    let jsonCount = dataView.getUint32(4, true);

    let data = new Array(jsonCount) as Replay | PartialReplay;

    let pos = 8;

    for (let i = 0; i < jsonCount; ++i) {
        let next = dataView.getUint32(pos, true);

        let jsonString = new TextDecoder().decode(buffer.slice(pos + 4, pos + 4 + next));
        data[i] = JSON.parse(jsonString);
        pos += next + 4;
    }

    const packets: Packet[] = [];

    const encrypted = buffer.slice(pos);
    const decrypted = decryptReplayPythonStyle(new Uint8Array(encrypted), WOT_BLOWFISH_KEY);
    const decompressed = new DataView(inflate(decrypted).buffer);

    for (let offset = 0; offset < decompressed.byteLength; offset += 12) {
        let size = decompressed.getUint32(offset, true);
        let type = decompressed.getUint32(offset + 4, true);
        let timestamp = decompressed.getUint32(offset + 8, true);
        let data = buffer.slice(offset + 4, offset + 4 + size);

        packets.push({ type, timestamp, data });

        offset += size;
    }

    return { signature, data, packets };
}
