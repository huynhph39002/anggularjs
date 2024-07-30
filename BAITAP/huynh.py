import pygame
import random

pygame.init()

screen = pygame.display.set_mode((640, 480))

clock = pygame.time.Clock()

snake_position = [[100, 50], [90, 50], [80, 50]]
snake_speed = [10, 0]

food_position = [random.randrange(1, 640 // 10) * 10, random.randrange(1, 480 // 10) * 10]
food_spawn = True

running = True
while running:
    clock.tick(10)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    snake_position.insert(0, list([snake_position[0][0] + snake_speed[0], snake_position[0][1] + snake_speed[1]]))

    if snake_position[0][0] == food_position[0] and snake_position[0][1] == food_position[1]:
        food_spawn = False
    else:
        snake_position.pop()

    if not food_spawn:
        food_position = [random.randrange(1, 640 // 10) * 10, random.randrange(1, 480 // 10) * 10]
    else:
        food_spawn = True

    screen.fill((0, 0, 0))
    for pos in snake_position:
        pygame.draw.rect(screen, (255, 255, 255), pygame.Rect(pos[0], pos[1], 10, 10))
    pygame.draw.rect(screen, (255, 0, 0), pygame.Rect(food_position[0], food_position[1], 10, 10))

    pygame.display.flip()

pygame.quit()