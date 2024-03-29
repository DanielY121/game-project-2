def on_button_pressed_a():
    Player.change(LedSpriteProperty.X, -1)
    music.play_melody("C5 - - - - - - - ", 500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Bullet
    Bullet = game.create_sprite(Player.get(LedSpriteProperty.X), 3)
    for index in range(5):
        if Bullet.is_touching(Target):
            Target.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_2.is_touching(Bullet):
            Target_2.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_3.is_touching(Bullet):
            Target_3.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_4.is_touching(Bullet):
            Target_4.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_5.is_touching(Bullet):
            Target_5.delete()
            Bullet.delete()
            game.add_score(1)
        elif Super_Target_6.is_touching(Bullet):
            Super_Target_6.delete()
            Bullet.delete()
            game.add_score(10)
        elif Target_7.is_touching(Bullet):
            Target_7.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_8.is_touching(Bullet):
            Target_8.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_9.is_touching(Bullet):
            Target_9.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_10.is_touching(Bullet):
            Target_10.delete()
            Bullet.delete()
            game.add_score(1)
        elif Target_11.is_touching(Bullet):
            Target_11.delete()
            Bullet.delete()
            game.add_score(1)
        elif Super_Target_12.is_touching(Bullet):
            Super_Target_12.delete()
            Bullet.delete()
            game.add_score(10)
        elif TNT.is_touching(Bullet):
            for index2 in range(2):
                music.play_melody("B C5 E C5 D C E D ", 500)
            basic.show_string("TNT exploded")
            game.game_over()
        else:
            basic.pause(200)
            Bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
    Bullet.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Player.change(LedSpriteProperty.X, 1)
    music.play_melody("C5 - - - - - - - ", 500)
input.on_button_pressed(Button.B, on_button_pressed_b)

Bullet: game.LedSprite = None
TNT: game.LedSprite = None
Super_Target_12: game.LedSprite = None
Target_11: game.LedSprite = None
Target_10: game.LedSprite = None
Target_9: game.LedSprite = None
Target_8: game.LedSprite = None
Target_7: game.LedSprite = None
Super_Target_6: game.LedSprite = None
Target_5: game.LedSprite = None
Target_4: game.LedSprite = None
Target_3: game.LedSprite = None
Target_2: game.LedSprite = None
Target: game.LedSprite = None
Player: game.LedSprite = None
music.play_melody("A B C5 F E D F C ", 500)
Player = game.create_sprite(2, 4)
Target = game.create_sprite(randint(0, 4), randint(0, 2))
Target_2 = game.create_sprite(randint(0, 4), randint(0, 2))
Target_3 = game.create_sprite(randint(0, 4), randint(0, 2))
Target_4 = game.create_sprite(randint(0, 4), randint(0, 2))
Target_5 = game.create_sprite(randint(0, 4), randint(0, 2))
Super_Target_6 = game.create_sprite(randint(0, 4), randint(0, 2))
Target_7 = game.create_sprite(randint(0, 4), randint(0, 2))
Target_8 = game.create_sprite(randint(0, 4), randint(0, 2))
Target_9 = game.create_sprite(randint(0, 4), randint(0, 2))
Target_10 = game.create_sprite(randint(0, 4), randint(0, 2))
Target_11 = game.create_sprite(randint(0, 4), randint(0, 2))
Super_Target_12 = game.create_sprite(randint(0, 4), randint(0, 2))
TNT = game.create_sprite(randint(0, 4), randint(0, 2))

def on_forever():
    if TNT.is_touching(Target):
        Target.delete()
    elif TNT.is_touching(Target_2):
        Target_2.delete()
    elif TNT.is_touching(Target_3):
        Target_3.delete()
    elif TNT.is_touching(Target_4):
        Target_4.delete()
    elif TNT.is_touching(Target_5):
        Target_5.delete()
    elif TNT.is_touching(Super_Target_6):
        Super_Target_6.delete()
        game.add_score(1)
    elif TNT.is_touching(Target_7):
        Target_7.delete()
    elif TNT.is_touching(Target_8):
        Target_8.delete()
    elif TNT.is_touching(Target_9):
        Target_9.delete()
    elif TNT.is_touching(Target_10):
        Target_10.delete()
    elif TNT.is_touching(Target_11):
        Target_11.delete()
    elif TNT.is_touching(Super_Target_12):
        Super_Target_12.delete()
        game.add_score(1)
    else:
        game.pause()
        game.resume()
basic.forever(on_forever)
