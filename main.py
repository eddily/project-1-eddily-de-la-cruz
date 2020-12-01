while True:
    light.set_brightness(10)
    print("temperature" + input.temperature(TemperatureUnit.FAHRENHEIT))
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 69:
        light.set_all(light.rgb(255, 0, 0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 50:
        light.set_all(light.rgb(0, 0, 255))
    else:
        light.set_all(light.rgb(0, 255, 0))