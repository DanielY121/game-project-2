def on_button_pressed_a():
    Player.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Bullet
    Bullet = game.create_sprite(Player.get(LedSpriteProperty.X), 3)
    for index in range(4):
        if Bullet.is_touching(Enemy):
            Enemy.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_2.is_touching(Bullet):
            Target_2.delete()
            Bullet.delete()
            game.add_score(1)
        elif Enemy_3.is_touching(Bullet):
            Enemy_3.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_4.is_touching(Bullet):
            Target_4.delete()
            Bullet.delete()
            game.add_score(1)
        elif Enemy_5.is_touching(Bullet):
            Enemy_5.delete()
            Bullet.delete()
            game.add_score(1)
        elif Super_Target_6.is_touching(Bullet):
            Super_Target_6.delete()
            Bullet.delete()
            game.add_score(10)
        else:
            basic.pause(100)
            Bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
    Bullet.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Bullet: game.LedSprite = None
Super_Target_6: game.LedSprite = None
Enemy_5: game.LedSprite = None
Target_4: game.LedSprite = None
Enemy_3: game.LedSprite = None
Target_2: game.LedSprite = None
Enemy: game.LedSprite = None
Player: game.LedSprite = None
Player = game.create_sprite(2, 4)
Enemy = game.create_sprite(randint(0, 4), randint(0, 2))
Target_2 = game.create_sprite(randint(0, 4), randint(0, 2))
Enemy_3 = game.create_sprite(randint(0, 4), randint(0, 2))
Target_4 = game.create_sprite(randint(0, 4), randint(0, 2))
Enemy_5 = game.create_sprite(randint(0, 4), randint(0, 2))
Super_Target_6 = game.create_sprite(randint(0, 4), randint(0, 2))