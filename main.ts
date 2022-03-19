input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Bullet = game.createSprite(Player.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 4; index++) {
        if (Bullet.isTouching(Enemy)) {
            Enemy.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_2.isTouching(Bullet)) {
            Target_2.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Enemy_3.isTouching(Bullet)) {
            Enemy_3.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Target_4.isTouching(Bullet)) {
            Target_4.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Enemy_5.isTouching(Bullet)) {
            Enemy_5.delete()
            Bullet.delete()
            game.addScore(1)
        } else if (Super_Target_6.isTouching(Bullet)) {
            Super_Target_6.delete()
            Bullet.delete()
            game.addScore(10)
        } else {
            basic.pause(100)
            Bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
    }
    Bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Bullet: game.LedSprite = null
let Super_Target_6: game.LedSprite = null
let Enemy_5: game.LedSprite = null
let Target_4: game.LedSprite = null
let Enemy_3: game.LedSprite = null
let Target_2: game.LedSprite = null
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
Enemy = game.createSprite(randint(0, 4), randint(0, 2))
Target_2 = game.createSprite(randint(0, 4), randint(0, 2))
Enemy_3 = game.createSprite(randint(0, 4), randint(0, 2))
Target_4 = game.createSprite(randint(0, 4), randint(0, 2))
Enemy_5 = game.createSprite(randint(0, 4), randint(0, 2))
Super_Target_6 = game.createSprite(randint(0, 4), randint(0, 2))
basic.forever(function () {
	
})
