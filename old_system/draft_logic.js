class DraftManager {
    constructor() {
        this.resetMatch();
        this.initHeroes();
    }
    
    // MOCK HEROES untuk testing
    initHeroes() {
        this.heroes = [
            "Aamon", "Akai", "Aldous", "Alice", "Alpha", "Alucard", "Angela", "Argus", "Arlott", "Atlas",
            "Aulus", "Aurora", "Badang", "Balmond", "Bane", "Barats", "Baxia", "Beatrix", "Belerick", "Benedetta",
            "Brody", "Bruno", "Carmilla", "Cecilion", "Chang'e", "Chip", "Chou", "Cici", "Claude", "Clint"
        ];
    }

    // STATE INITIALIZATION
    resetMatch() {
        this.MatchState = {
            mode: 'BAN10', // 'BAN10' atau 'BAN5'
            bestOf: 3, // 1, 3, 5, 7
            firstPick: 'BLUE', // 'BLUE' atau 'RED'
            currentTurnIndex: 0,
            phase: 'NOT_STARTED' // NOT_STARTED, ONGOING, FINISHED
        };

        this.TeamState = {
            BLUE: {
                name: 'Blue Side',
                logo: '',
                players: ['', '', '', '', ''],
                score: 0
            },
            RED: {
                name: 'Red Side',
                logo: '',
                players: ['', '', '', '', ''],
                score: 0
            }
        };

        this.DraftState = {
            pickedHeroes: new Set(),
            bannedHeroes: new Set(),
            turnHistory: [],
            bluePicks: [],
            redPicks: [],
            blueBans: [],
            redBans: []
        };
        
        this.draftOrder = [];
        this.generateDraftOrder();
    }

    // ======= CONFIGURATION =======

    setMode(mode) {
        if(this.MatchState.currentTurnIndex > 0) return false; // Ga bisa ganti kalau udah jalan
        this.MatchState.mode = mode;
        this.generateDraftOrder();
        return true;
    }

    setFirstPick(side) {
        if(this.MatchState.currentTurnIndex > 0) return false;
        this.MatchState.firstPick = side;
        this.generateDraftOrder();
        return true;
    }

    setBestOf(bo) {
        this.MatchState.bestOf = bo;
    }

    updateTeamScore(side, score) {
        this.TeamState[side].score = score;
    }
    
    updatePlayerName(side, index, name) {
        this.TeamState[side].players[index] = name;
    }

    switchSide() {
        if(this.MatchState.currentTurnIndex > 0) return false;
        // Swap names and players
        const tempName = this.TeamState.BLUE.name;
        this.TeamState.BLUE.name = this.TeamState.RED.name;
        this.TeamState.RED.name = tempName;

        const tempPlayers = [...this.TeamState.BLUE.players];
        this.TeamState.BLUE.players = [...this.TeamState.RED.players];
        this.TeamState.RED.players = tempPlayers;
        
        const tempScore = this.TeamState.BLUE.score;
        this.TeamState.BLUE.score = this.TeamState.RED.score;
        this.TeamState.RED.score = tempScore;

        return true;
    }

    // ======= CORE DRAFT LOGIC =======

    generateDraftOrder() {
        const fp = this.MatchState.firstPick; // 'BLUE' atau 'RED'
        const sp = fp === 'BLUE' ? 'RED' : 'BLUE'; // Second pick
        
        if (this.MatchState.mode === 'BAN10') {
            this.draftOrder = [
                { phase: 'BAN_1', type: 'BAN', side: fp, slot: 1 },
                { phase: 'BAN_1', type: 'BAN', side: sp, slot: 1 },
                { phase: 'BAN_1', type: 'BAN', side: fp, slot: 2 },
                { phase: 'BAN_1', type: 'BAN', side: sp, slot: 2 },
                { phase: 'BAN_1', type: 'BAN', side: fp, slot: 3 },
                { phase: 'BAN_1', type: 'BAN', side: sp, slot: 3 },
                
                { phase: 'PICK_1', type: 'PICK', side: fp, slot: 1 },
                { phase: 'PICK_1', type: 'PICK', side: sp, slot: 1 },
                { phase: 'PICK_1', type: 'PICK', side: sp, slot: 2 },
                { phase: 'PICK_1', type: 'PICK', side: fp, slot: 2 },
                { phase: 'PICK_1', type: 'PICK', side: fp, slot: 3 },
                { phase: 'PICK_1', type: 'PICK', side: sp, slot: 3 },
                
                { phase: 'BAN_2', type: 'BAN', side: sp, slot: 4 },
                { phase: 'BAN_2', type: 'BAN', side: fp, slot: 4 },
                { phase: 'BAN_2', type: 'BAN', side: sp, slot: 5 },
                { phase: 'BAN_2', type: 'BAN', side: fp, slot: 5 },
                
                { phase: 'FINAL_PICK', type: 'PICK', side: sp, slot: 4 },
                { phase: 'FINAL_PICK', type: 'PICK', side: fp, slot: 4 },
                { phase: 'FINAL_PICK', type: 'PICK', side: fp, slot: 5 },
                { phase: 'FINAL_PICK', type: 'PICK', side: sp, slot: 5 }
            ];
        } else if (this.MatchState.mode === 'BAN5') {
            this.draftOrder = [
                { phase: 'BAN', type: 'BAN', side: fp, slot: 1 },
                { phase: 'BAN', type: 'BAN', side: sp, slot: 1 },
                { phase: 'BAN', type: 'BAN', side: fp, slot: 2 },
                { phase: 'BAN', type: 'BAN', side: sp, slot: 2 },
                { phase: 'BAN', type: 'BAN', side: fp, slot: 3 },
                { phase: 'BAN', type: 'BAN', side: sp, slot: 3 },
                { phase: 'BAN', type: 'BAN', side: fp, slot: 4 },
                { phase: 'BAN', type: 'BAN', side: sp, slot: 4 },
                { phase: 'BAN', type: 'BAN', side: fp, slot: 5 },
                { phase: 'BAN', type: 'BAN', side: sp, slot: 5 },
                
                { phase: 'PICK', type: 'PICK', side: fp, slot: 1 },
                { phase: 'PICK', type: 'PICK', side: sp, slot: 1 },
                { phase: 'PICK', type: 'PICK', side: sp, slot: 2 },
                { phase: 'PICK', type: 'PICK', side: fp, slot: 2 },
                { phase: 'PICK', type: 'PICK', side: fp, slot: 3 },
                { phase: 'PICK', type: 'PICK', side: sp, slot: 3 },
                { phase: 'PICK', type: 'PICK', side: sp, slot: 4 },
                { phase: 'PICK', type: 'PICK', side: fp, slot: 4 },
                { phase: 'PICK', type: 'PICK', side: fp, slot: 5 },
                { phase: 'PICK', type: 'PICK', side: sp, slot: 5 }
            ];
        }
    }

    startDraft() {
        this.generateDraftOrder();
        this.MatchState.currentTurnIndex = 0;
        this.MatchState.phase = 'ONGOING';
    }

    getCurrentTurn() {
        if (this.MatchState.currentTurnIndex >= this.draftOrder.length) {
            return null; // Selesai
        }
        return this.draftOrder[this.MatchState.currentTurnIndex];
    }

    isHeroAvailable(heroId) {
        return !this.DraftState.pickedHeroes.has(heroId) && !this.DraftState.bannedHeroes.has(heroId);
    }

    // Eksekusi pemilihan/banning hero
    selectHero(heroId) {
        const turn = this.getCurrentTurn();
        if (!turn) {
            console.log("Draft is finished or not started.");
            return false; 
        }
        if (!this.isHeroAvailable(heroId)) {
            console.log("Hero is already picked or banned.");
            return false; 
        }

        if (turn.type === 'PICK') {
            this.DraftState.pickedHeroes.add(heroId);
            if(turn.side === 'BLUE') this.DraftState.bluePicks.push(heroId);
            else this.DraftState.redPicks.push(heroId);
        } else if (turn.type === 'BAN') {
            this.DraftState.bannedHeroes.add(heroId);
            if(turn.side === 'BLUE') this.DraftState.blueBans.push(heroId);
            else this.DraftState.redBans.push(heroId);
        }

        // Record history untuk undo
        this.DraftState.turnHistory.push({
            turnIndex: this.MatchState.currentTurnIndex,
            side: turn.side,
            type: turn.type,
            heroId: heroId
        });

        this.MatchState.currentTurnIndex++;
        
        if (this.MatchState.currentTurnIndex >= this.draftOrder.length) {
            this.MatchState.phase = 'FINISHED';
        }

        return true;
    }

    undoLastTurn() {
        if (this.MatchState.currentTurnIndex === 0) return false;
        
        const lastTurnAction = this.DraftState.turnHistory.pop();
        this.MatchState.currentTurnIndex--;
        this.MatchState.phase = 'ONGOING';

        if (lastTurnAction.type === 'PICK') {
            this.DraftState.pickedHeroes.delete(lastTurnAction.heroId);
            if (lastTurnAction.side === 'BLUE') this.DraftState.bluePicks.pop();
            else this.DraftState.redPicks.pop();
        } else {
            this.DraftState.bannedHeroes.delete(lastTurnAction.heroId);
            if (lastTurnAction.side === 'BLUE') this.DraftState.blueBans.pop();
            else this.DraftState.redBans.pop();
        }
        
        return true;
    }

    resetDraft() {
        this.MatchState.currentTurnIndex = 0;
        this.MatchState.phase = 'NOT_STARTED';
        this.DraftState.pickedHeroes.clear();
        this.DraftState.bannedHeroes.clear();
        this.DraftState.turnHistory = [];
        this.DraftState.bluePicks = [];
        this.DraftState.redPicks = [];
        this.DraftState.blueBans = [];
        this.DraftState.redBans = [];
    }

    fullReset() {
        this.resetMatch();
    }
}

// Untuk di-export kalau pakai modul
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DraftManager;
}
