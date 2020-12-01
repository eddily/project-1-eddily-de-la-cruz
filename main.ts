while (true) {
    light.setBrightness(10)
    console.log("temperature" + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) > 69) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 50) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(0, 255, 0))
    }
    
}
