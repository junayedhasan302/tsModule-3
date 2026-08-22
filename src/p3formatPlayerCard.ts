interface Player{
    username: string, 
    level: number, 
    region: string
}
const playerX: Player = { 
    username: "ShadowByte", 
    level: 42, 
    region: "Asia" 
}
function formatPlayerCard(player: Player): string { 
    return `${player.username} is a Level ${player.level} player from ${player.region}.`;
}

console.log(formatPlayerCard(playerX));

// Expected output: 
// "ShadowByte is a Level 42 player from Asia." 