input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
    music.playMelody("C5 - - - - - - - ", 500)
})
input.onButtonPressed(Button.AB, function () {
    Bullet = game.createSprite(Player.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 5; index++) {
        if (Bullet.isTouching(Target)) {
            Target.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_2.isTouching(Bullet)) {
            Target_2.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_3.isTouching(Bullet)) {
            Target_3.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_4.isTouching(Bullet)) {
            Target_4.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_5.isTouching(Bullet)) {
            Target_5.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Super_Target_6.isTouching(Bullet)) {
            Super_Target_6.delete()
            Bullet.delete()
            game.addScore(10)
        } else if (Target_7.isTouching(Bullet)) {
            Target_7.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_8.isTouching(Bullet)) {
            Target_8.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_9.isTouching(Bullet)) {
            Target_9.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_10.isTouching(Bullet)) {
            Target_10.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_11.isTouching(Bullet)) {
            Target_11.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Super_Target_12.isTouching(Bullet)) {
            Super_Target_12.delete()
            Bullet.delete()
            game.addScore(10)
        } else if (TNT.isTouching(Bullet)) {
            for (let index = 0; index < 2; index++) {
                music.playMelody("B C5 E C5 D C E D ", 500)
            }
            basic.showString("TNT exploded")
            game.gameOver()
        } else {
            basic.pause(200)
            Bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
    }
    Bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
    music.playMelody("C5 - - - - - - - ", 500)
})
let Bullet: game.LedSprite = null
let TNT: game.LedSprite = null
let Super_Target_12: game.LedSprite = null
let Target_11: game.LedSprite = null
let Target_10: game.LedSprite = null
let Target_9: game.LedSprite = null
let Target_8: game.LedSprite = null
let Target_7: game.LedSprite = null
let Super_Target_6: game.LedSprite = null
let Target_5: game.LedSprite = null
let Target_4: game.LedSprite = null
let Target_3: game.LedSprite = null
let Target_2: game.LedSprite = null
let Target: game.LedSprite = null
let Player: game.LedSprite = null
music.playMelody("A B C5 F E D F C ", 500)
Player = game.createSprite(2, 4)
Target = game.createSprite(randint(0, 4), randint(0, 2))
Target_2 = game.createSprite(randint(0, 4), randint(0, 2))
Target_3 = game.createSprite(randint(0, 4), randint(0, 2))
Target_4 = game.createSprite(randint(0, 4), randint(0, 2))
Target_5 = game.createSprite(randint(0, 4), randint(0, 2))
Super_Target_6 = game.createSprite(randint(0, 4), randint(0, 2))
Target_7 = game.createSprite(randint(0, 4), randint(0, 2))
Target_8 = game.createSprite(randint(0, 4), randint(0, 2))
Target_9 = game.createSprite(randint(0, 4), randint(0, 2))
Target_10 = game.createSprite(randint(0, 4), randint(0, 2))
Target_11 = game.createSprite(randint(0, 4), randint(0, 2))
Super_Target_12 = game.createSprite(randint(0, 4), randint(0, 2))
TNT = game.createSprite(randint(0, 4), randint(0, 2))
basic.forever(function () {
    if (TNT.isTouching(Target)) {
        Target.delete()
    } else if (TNT.isTouching(Target_2)) {
        Target_2.delete()
    } else if (TNT.isTouching(Target_3)) {
        Target_3.delete()
    } else if (TNT.isTouching(Target_4)) {
        Target_4.delete()
    } else if (TNT.isTouching(Target_5)) {
        Target_5.delete()
    } else if (TNT.isTouching(Super_Target_6)) {
        Super_Target_6.delete()
        game.addScore(1)
    } else if (TNT.isTouching(Target_7)) {
        Target_7.delete()
    } else if (TNT.isTouching(Target_8)) {
        Target_8.delete()
    } else if (TNT.isTouching(Target_9)) {
        Target_9.delete()
    } else if (TNT.isTouching(Target_10)) {
        Target_10.delete()
    } else if (TNT.isTouching(Target_11)) {
        Target_11.delete()
    } else if (TNT.isTouching(Super_Target_12)) {
        Super_Target_12.delete()
        game.addScore(1)
    } else {
        game.pause()
        game.resume()
    }
})
