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
        } else if (Enemy_2.isTouching(null)) {
        	
        } else if (Enemy_3.isTouching(null)) {
        	
        } else if (Enemy_4.isTouching(null)) {
        	
        } else if (Enemy_5.isTouching(null)) {
        	
        } else if (Enemy_6.isTouching(null)) {
        	
        } else {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Bullet: game.LedSprite = null
let Enemy_6: game.LedSprite = null
let Enemy_5: game.LedSprite = null
let Enemy_4: game.LedSprite = null
let Enemy_3: game.LedSprite = null
let Enemy_2: game.LedSprite = null
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
let Random_enemy_value = randint(1, 4)
if (Random_enemy_value == 1) {
    Enemy = game.createSprite(randint(0, 4), randint(0, 2))
} else if (Random_enemy_value == 2) {
    Enemy = game.createSprite(randint(0, 4), randint(0, 2))
} else if (Random_enemy_value == 3) {
    Enemy = game.createSprite(randint(0, 4), randint(0, 2))
} else {
    basic.showString("Enemy fever ")
    basic.pause(3000)
    Enemy = game.createSprite(2, 2)
    Enemy_2 = game.createSprite(2, 2)
    Enemy_3 = game.createSprite(2, 2)
    Enemy_4 = game.createSprite(2, 2)
    Enemy_5 = game.createSprite(2, 2)
    Enemy_6 = game.createSprite(2, 2)
}
basic.forever(function () {
	
})
