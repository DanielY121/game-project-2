input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Bullet = game.createSprite(Player.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 4; index++) {
        let Enemy: game.LedSprite = null
        if (Bullet.isTouching(Enemy)) {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Bullet: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
let Random_enemy_value = randint(1, 8)
if (0 == 0) {
	
} else if (false) {
	
} else {
	
}
basic.forever(function () {
	
})
