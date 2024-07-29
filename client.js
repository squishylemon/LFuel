let titleFont = null;
let fuelRateOld = 1;
let deltaTimeGlobal = 0;
function formatFuel(n) {
    if (n != null) {
        return n.toLocaleString().split(".")[0] + "."
        + n.toFixed(2).split(".")[1];
    }else {
        return "";
    }
    
}

function formatMoney(n) {
    if (n != null) {
        return "$ " + n.toLocaleString().split(".")[0] + "."
        + n.toFixed(2).split(".")[1];
    }else {
        return "#";
    }
    
}

bindEventHandler("OnResourceReady", thisResource, function (event, resource) {
    let fontStream = openFile("pricedown.ttf");

    if (fontStream != null) {
        titleFont = lucasFont.createFont(fontStream, 22.0);
        fontStream.close();
    }

});

addEventHandler('OnPedEnteredVehicle', (event, ped, vehicle, seat) => {
    if (!vehicle.getData("Mass") && gta.game != GAME_GTA_IV) {
        vehicle.setData("Mass", vehicle.mass, true);
    }
});

addEventHandler('onProcess', (event, deltaTime) => {
    deltaTimeGlobal = deltaTime;
    if (localPlayer.isInVehicle) {
        if (localPlayer.vehicle.getData("Fuel") < 0.01) {
            if (localPlayer.vehicle.health != 1) {
                localPlayer.vehicle.health = 1; // kills car since i .engine does not disable accelleration
            }
        }
        let refuelspots = 0;
        fuelSpots.forEach(fuelspot => {
            
            fuelspot.positions.forEach(fuelpos => {
                let plyPos = new Vec3(localPlayer.position.x, localPlayer.position.y, localPlayer.position.z);

                if (plyPos.distance(fuelpos) <= 4) {
                    refuelspots += 1;

                }

                if (refuelspots > 0) {
                    localPlayer.setData("CanRefuel", true, true);
                } else {
                    localPlayer.setData("CanRefuel", false, true);
                }
            });
        });
    } else {
        localPlayer.setData("CanRefuel", false, true);
    }
});



addEventHandler('onDrawnHUD', (event) => {
    let txt = `Refuel Vehicle for $000`;
    let recPos = new Vec2(game.width- 300, game.height - 90);
    let rec2Pos = new Vec2(game.width- 300 + 2.5, game.height - 90 +2.5);
    let TxtConsumptionPos = new Vec2(game.width- 300, game.height - 90 + 40);
    let TxtRefuelPos = new Vec2((game.width/2)-(txt.length * 5), game.height - 90 + 40);
    if (localPlayer.isInVehicle) { 
        txt = `Refuel Vehicle for ${formatMoney((100 - localPlayer.vehicle.getData("Fuel")) * fuelPrice)}`;
        
        graphics.drawRectangle(null,
            recPos,
            [100*fuelbarLength, 20],
            fuelbarBGColor,
            fuelbarBGColor,
            fuelbarBGColor,
            fuelbarBGColor,
        );
        graphics.drawRectangle(null,
            rec2Pos,
            [ 98 *fuelbarLength, 15],
            fuelbarUsedFuelColor,
            fuelbarUsedFuelColor,
            fuelbarUsedFuelColor,
            fuelbarUsedFuelColor,
        );
        graphics.drawRectangle(null,
            rec2Pos,
            [ ((localPlayer.vehicle.getData("Fuel")/103)*100) *fuelbarLength, 15],
            fuelbarFuelColor,
            fuelbarFuelColor,
            fuelbarFuelColor,
            fuelbarFuelColor,
        );
        //titleFont.render(`${formatFuel(localPlayer.vehicle.getData("Fuel"))}/100 Fuel`, TxtPos, 0, 0.0, 0.0, titleFont.size, COLOUR_WHITE, false, false, false, true);
        titleFont.render(`${formatFuel(localPlayer.vehicle.getData("FuelRate") * 1000)}L/KM Consumption`, TxtConsumptionPos, 0, 0.0, 0.0, titleFont.size, COLOUR_WHITE, false, false, false, true);
        if (localPlayer.getData("CanRefuel") == true) {
            
            
            titleFont.render(txt, TxtRefuelPos, 0, 0.0, 0.0, titleFont.size, COLOUR_WHITE, false, false, false, true);
        }
        
    }
});


addEventHandler('onKeyUp', (event, virtualKey, physicalKey, keyModifiers) => {
    if (virtualKey == 13 && localPlayer.getData("CanRefuel") == true && localPlayer.money > (100 - localPlayer.vehicle.getData("Fuel")) * fuelPrice) {
        localPlayer.money -= (100 - localPlayer.vehicle.getData("Fuel")) * fuelPrice;
        triggerNetworkEvent("triggerRefuel");
    }

    if (localPlayer.isInVehicle) {
        if (virtualKey == 119) {
            triggerNetworkEvent("isNotAccellerating");
        }
    }

});

addEventHandler('OnKeyDown', (event, virtualKey, physicalKey, keyModifiers) => {

    if (localPlayer.isInVehicle) {
        if (virtualKey == 119) {
            triggerNetworkEvent("isAccellerating");
        }
    }

});
