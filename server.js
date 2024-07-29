

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

addEventHandler('onPedEnterVehicle', (event, ped, vehicle, seat) => {
    if (!vehicle.getData("Fuel")) {
        vehicle.setData("Fuel", randomRange(30, 100), true);
        vehicle.setData("Accellerating", false, true);
    }
});

addEventHandler('onServerStart', (event) => {
    let fuelSpotCount = 0;
    let fuelSpotPositionsCount = 0;
    fuelSpots.forEach(fuelspot => {
        fuelSpotCount++;
        let FuelStation1Blip = gta.createBlip(fuelspot.blipId, fuelspot.blipPos, 2, 0);

        fuelspot.positions.forEach(position => {
            fuelSpotPositionsCount++;
            let fuelMarker = gta.createSphere(position, 3);
          
        });
    });
    console.log(`[LFuel] Successfully Spawned ${fuelSpotCount} Fuel Station's`);
    console.log(`[LFuel] Successfully Spawned ${fuelSpotPositionsCount} Fuel Spot's`);
})

addEventHandler('OnProcess', (event, deltaTime) => {
    let clients = getClients();

    clients.forEach(client => {
        
        let plyer = client.player;
        

        if (plyer != null) {
            if (plyer.vehicle != null) {
                let plyerPos = new Vec3(plyer.position.x,plyer.position.y,plyer.position.z);
                let speed = plyer.vehicle.velocity.length;
                if (speed < 0.01) { // fake speed to simulate engine taking fuel
                    speed += 0.05;
                }
                let consumption = speed * fuelConsumptionRate * deltaTime;
                if (plyer.vehicle.getData("Mass") != null) {
                    consumption *= (plyer.vehicle.getData("Mass") / 100)
                }
                if (plyer.vehicle.getData("Accellerating") == false) {
                    consumption = consumption / 50;
                }
                let fuel = plyer.vehicle.getData("Fuel");
                fuel -= consumption;
                if (fuel < 0.01) {
                    fuel = 0;
                    plyer.vehicle.engine = false;
                }
                plyer.vehicle.setData("Fuel", fuel, true);
                plyer.vehicle.setData("FuelRate", consumption, true);
                //console.log(`set fuel for ${client.name}'s vehicle from ${fuel+consumption} to ${fuel} at a consumtion rate of ${consumption} and a mass multiplier of ${plyer.vehicle.getData("Mass")/100}`);
            }
        }
        
    });

});



addNetworkHandler("triggerRefuel", function (client) {
    if (client.player.vehicle != null) {
        client.player.vehicle.setData("Fuel", 100, true);
    }
});

addNetworkHandler("isAccellerating", function (client) {
    if (client.player.vehicle != null) {
        client.player.vehicle.setData("Accellerating", true, true);
    }
});

addNetworkHandler("isNotAccellerating", function (client) {
    if (client.player.vehicle != null) {
        client.player.vehicle.setData("Accellerating", false, true);
    }
});