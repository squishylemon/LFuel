/*
 _____       _________   __    __    _____   _____     
(_   _)     (_   _____)  ) )  ( (   / ___/  (_   _)    
  | |         ) (___    ( (    ) ) ( (__      | |      
  | |        (   ___)    ) )  ( (   ) __)     | |      
  | |   __    ) (       ( (    ) ) ( (        | |   __ 
__| |___) )  (   )       ) \__/ (   \ \___  __| |___) )
\________/    \_/        \______/    \____\ \________/ 

*/

// Fuel Configuration
let fuelConsumptionRate = 0.1; // Base fuel consumption rate per unit speed per second
let fuelPrice = 1.83; // Price per L
let fuelbarLength = 2; // Length multiplier
let fuelbarBGColor = toColour(0, 0, 0, 255); // Black
let fuelbarFuelColor = toColour(220, 220, 0, 255); // Yellow
let fuelbarUsedFuelColor = toColour(150, 150, 0, 255); // Darker yellow