basic.showLeds(`
    . . . . .
    # # . # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    # # . # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . . # . .
    . # # # .
    . . # . .
    # . . . #
    `)
basic.showString("I LOVE YOU")
music.play(music.createSoundExpression(
WaveShape.Sine,
200,
600,
255,
0,
1000,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), music.PlaybackMode.InBackground)
basic.forever(function () {
	
})
