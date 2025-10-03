datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    if (LogData == false) {
        LogData = true
        basic.showIcon(IconNames.EighthNote)
    } else {
        LogData = false
        basic.showIcon(IconNames.Yes)
    }
})
let LogData = false
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.setColumnTitles(
"Sound Level",
"CandleInTheWindability",
"HokeyCokeyness",
"Headbopperivity"
)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (LogData == true) {
        datalogger.log(
        datalogger.createCV("Sound Level", input.soundLevel()),
        datalogger.createCV("CandleInTheWindability", input.acceleration(Dimension.X)),
        datalogger.createCV("HokeyCokeyness", input.acceleration(Dimension.Z)),
        datalogger.createCV("Headbopperivity", input.acceleration(Dimension.Y))
        )
    }
})
