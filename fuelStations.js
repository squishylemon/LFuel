let fuelSpots = [];
function getGameName(I) {
    if (I == 1) {
        return "Vice City";
    }
}

function addFuelSpot(gameId, positions, blipId, blipPos) {
    // Validate inputs
    if (!Array.isArray(positions) || positions.some(pos => !(pos instanceof Vec3))) {
        throw new Error('Positions must be an array of Vec3 objects.');
    }
    if (!(blipPos instanceof Vec3)) {
        throw new Error('Blip position must be a Vec3 object.');
    }

    // Create the new fuel spot entry
    const newFuelSpot = {
        gameId: gameId,
        positions: positions,
        blipId: blipId,
        showFS: false,
        blipPos: blipPos
    };

    // Add the new entry to the list
    fuelSpots.push(newFuelSpot);
}

try { // gta VC Fuel station 1 i think thers only 1 else fuck
    addFuelSpot(
        GAME_GTA_VC, // gameId
        [ // positions
    
            new Vec3(40.32876205444336, -1055.9285888671875, 10.463286399841309),
    
            new Vec3(33.51572799682617, -1055.7537841796875, 10.463286399841309),
    
            new Vec3(36.646488189697266, -1060.07177734375, 10.463282585144043),
    
            new Vec3(43.28193283081055, -1059.8935546875, 10.463282585144043),
    
            new Vec3(56.49785614013672, -1073.345947265625, 10.463286399841309),
    
            new Vec3(56.47121047973633, -1080.0782470703125, 10.463294982910156),
    
            new Vec3(60.537376403808594, -1077.0760498046875, 10.463297843933105),
    
            new Vec3(60.429927825927734, -1070.3458251953125, 10.463290214538574)
        ],
        RADAR_SPRITE_SUNYARD, // blipId
        new Vec3(48.22016906738281, -1075.3790283203125, 10.463279724121094) // blipPos
    );
}   
catch (error) {

    try{
        console.log(`Fuelspot not supported in ${getGameName(server.game)}`);
    } catch(error) {
        console.log(`Fuelspot not supported in ${getGameName(gta.game)}`);
    }
    
}

try { // gta 3 fuelstation only one in this game im pretty sure... i hope
    addFuelSpot(
        GAME_GTA_III, // gameId
        [ // positions
    
            new Vec3(1172.9749755859375, -77.70955657958984, 7.4725823402404785),
    
            new Vec3(1167.9952392578125, -69.72749328613281, 7.4725823402404785),
    
            new Vec3(1163.7841796875, -77.61234283447266, 7.4725823402404785),
    
            new Vec3(1159.9935302734375, -69.57659912109375, 7.4725823402404785),
    
            new Vec3(1155.0550537109375, -77.67781066894531, 7.4725823402404785),
    
            new Vec3(1151.0914306640625, -69.84266662597656, 7.4725823402404785)
        ],
        RADAR_SPRITE_NONE, // blipId i could not see any good ones so this thing will do i guess
        new Vec3(1161.8194580078125, -84.21426391601562, 7.676016330718994) // blipPos
    );
}   
catch (error) {

    try{
        console.log(`Fuelspot not supported in ${getGameName(server.game)}`);
    } catch(error) {
        console.log(`Fuelspot not supported in ${getGameName(gta.game)}`);
    }
    
}

try { // gta sa fuelstation 1, fuck u sa for being so big i hate this
    addFuelSpot(
        GAME_GTA_SA, // gameId
        [ // positions
    
            new Vec3(-95.64247131347656, -1174.365966796875, 2.320744514465332),
    
            new Vec3(-90.44818115234375, -1162.2843017578125, 2.2357027530670166),
    
            new Vec3(-87.00292205810547, -1164.318115234375, 2.248289108276367),
    
            new Vec3(-91.78785705566406, -1175.9189453125, 2.2050344944000244),
    
            new Vec3(-88.81990051269531, -1177.084716796875, 2.1170473098754883),
    
            new Vec3(-83.80867004394531, -1165.6549072265625, 2.2370169162750244),

            new Vec3(-93.39932250976562, -1161.4293212890625, 2.215999126434326),

            new Vec3(-98.3425064086914, -1173.20703125, 2.4044203758239746)
        ],
        RADAR_SPRITE_SPOTLIGHT, // looks kinda like afuel station logo lol
        new Vec3(-82.09735107421875, -1174.024658203125, 2.128109931945801) // blipPos
    );
}   
catch (error) {

    try{
        console.log(`Fuelspot not supported in ${getGameName(server.game)}`);
    } catch(error) {
        console.log(`Fuelspot not supported in ${getGameName(gta.game)}`);
    }
    
}

try { // gta sa fuelstation 2, fuck u sa for being so big i hate this
    addFuelSpot(
        GAME_GTA_SA, // gameId
        [ // positions
    
            new Vec3(1380.5943603515625, 462.60107421875, 20.107574462890625),
    
            new Vec3(1385.0882568359375, 460.3656921386719, 20.101306915283203),
    
            new Vec3(1383.34375, 457.1546936035156, 19.961132049560547),
    
            new Vec3(1378.5111083984375, 459.342041015625, 19.955698013305664)
        ],
        RADAR_SPRITE_SPOTLIGHT, // looks kinda like afuel station logo lol
        new Vec3(1378.5111083984375, 459.342041015625, 19.955698013305664) // blipPos
    );
}   
catch (error) {

    try{
        console.log(`Fuelspot not supported in ${getGameName(server.game)}`);
    } catch(error) {
        console.log(`Fuelspot not supported in ${getGameName(gta.game)}`);
    }
    
}

try { // gta sa fuelstation 3, fuck u sa for being so big i hate this
    addFuelSpot(
        GAME_GTA_SA, // gameId
        [ // positions
    
            new Vec3(2194.877197265625, 2480.405029296875, 10.8203125),
    
            new Vec3(2194.247802734375, 2470.225341796875, 10.8203125),
    
            new Vec3(2198.903564453125, 2474.83349609375, 10.8203125),
    
            new Vec3(2206.02685546875, 2474.8046875, 10.8203125),

            new Vec3(2209.180908203125, 2480.425048828125, 10.8203125),

            new Vec3(2209.619873046875, 2469.96044921875, 10.8203125)
        ],
        RADAR_SPRITE_SPOTLIGHT, // looks kinda like afuel station logo lol
        new Vec3(2202.2744140625, 2475.904296875, 10.8203125) // blipPos
    );
}   
catch (error) {

    try{
        console.log(`Fuelspot not supported in ${getGameName(server.game)}`);
    } catch(error) {
        console.log(`Fuelspot not supported in ${getGameName(gta.game)}`);
    }
    
}

try { // gta sa fuelstation 4, fuck u sa for being so big i hate this
    addFuelSpot(
        GAME_GTA_SA, // gameId
        [ // positions
    
            new Vec3(2634.644775390625, 1114.616455078125, 10.8203125),
    
            new Vec3(2639.8515625, 1114.3861083984375, 10.8203125),
    
            new Vec3(2645.270263671875, 1113.9366455078125, 10.8203125),
    
            new Vec3(2639.63427734375, 1099.042236328125, 10.8203125),

            new Vec3(2634.235107421875, 1098.8582763671875, 10.8203125),

            new Vec3(2639.824462890625, 1103.17578125, 10.8203125),

            new Vec3(2639.950439453125, 1109.331787109375, 10.8203125)
        ],
        RADAR_SPRITE_SPOTLIGHT, // looks kinda like afuel station logo lol
        new Vec3(2635.93359375, 1105.830078125, 10.812978744506836) // blipPos
    );
}   
catch (error) {

    try{
        console.log(`Fuelspot not supported in ${getGameName(server.game)}`);
    } catch(error) {
        console.log(`Fuelspot not supported in ${getGameName(gta.game)}`);
    }
    
}

try { // gta sa fuelstation 5, fuck u sa for being so big i hate this
    addFuelSpot(
        GAME_GTA_SA, // gameId
        [ // positions
    
            new Vec3(1602.011474609375, 2191.31689453125, 10.8203125),
    
            new Vec3(1595.9444580078125, 2191.13330078125, 10.8203125),
    
            new Vec3(1590.1307373046875, 2191.13330078125, 10.8203125),
    
            new Vec3(1596.1593017578125, 2195.600341796875, 10.8203125),

            new Vec3(1596.10302734375, 2202.708984375, 10.8203125),

            new Vec3(1590.2581787109375, 2206.24658203125, 10.8203125),

            new Vec3(1596.4100341796875, 2206.115478515625, 10.8203125),

            new Vec3(1602.2923583984375, 2206.405517578125, 10.8203125)
        ],
        RADAR_SPRITE_SPOTLIGHT, // looks kinda like afuel station logo lol
        new Vec3(1596.5155029296875, 2198.3154296875, 10.8203125) // blipPos
    );
}   
catch (error) {

    try{
        console.log(`Fuelspot not supported in ${getGameName(server.game)}`);
    } catch(error) {
        console.log(`Fuelspot not supported in ${getGameName(gta.game)}`);
    }
    
}

try { // gta sa fuelstation 6, fuck u sa for being so big i hate this
    addFuelSpot(
        GAME_GTA_SA, // gameId
        [ // positions
    
            new Vec3(-1329.522705078125, 2666.6748046875, 50.0625),
    
            new Vec3(-1329.0439453125, 2672.031005859375, 50.0625),
    
            new Vec3(-1328.177978515625, 2677.575439453125, 50.0625),
    
            new Vec3(-1327.2403564453125, 2683.173828125, 50.0625),

            new Vec3(-1326.723876953125, 2687.97119140625, 50.0625)
        ],
        RADAR_SPRITE_SPOTLIGHT, // looks kinda like afuel station logo lol
        new Vec3(-1329.0223388671875, 2677.441162109375, 50.0625) // blipPos
    );
}   
catch (error) {

    try{
        console.log(`Fuelspot not supported in ${getGameName(server.game)}`);
    } catch(error) {
        console.log(`Fuelspot not supported in ${getGameName(gta.game)}`);
    }
    
}

try { // gta sa fuelstation 7, fuck u sa for being so big i hate this
    addFuelSpot(
        GAME_GTA_SA, // gameId
        [ // positions
    
            new Vec3(-1611.948486328125, -2722.73486328125, 48.5390625),
    
            new Vec3(-1608.9169921875, -2718.8095703125, 48.5390625),
    
            new Vec3(-1605.931884765625, -2714.206787109375, 48.53347396850586),
    
            new Vec3(-1602.5946044921875, -2709.732177734375, 48.53347396850586),

            new Vec3(-1599.6395263671875, -2705.913330078125, 48.5390625)
        ],
        RADAR_SPRITE_SPOTLIGHT, // looks kinda like afuel station logo lol
        new Vec3(-1607.95263671875, -2715.412841796875, 48.9453125) // blipPos
    );
}   
catch (error) {

    try{
        console.log(`Fuelspot not supported in ${getGameName(server.game)}`);
    } catch(error) {
        console.log(`Fuelspot not supported in ${getGameName(gta.game)}`);
    }
    
}

