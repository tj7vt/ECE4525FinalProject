import os
import imageio
path = 'D:\School\Fall 2020 (Senior Year)\Video Game Design'
image= imageio.imread(os.path.join(path,'tileMapLv1.bmp'))
rowString = "[\n\""
count = 0

for row in image:
    for pixel in row:
        if (tuple(pixel) == (185, 122, 87)):
            rowString += "b"
        elif (tuple(pixel) == (255, 255, 255)):
            rowString += " "
        elif (tuple(pixel) == (237, 28, 36)):
            rowString += "f"
            count = count + 1
        elif (tuple(pixel) == (255, 242, 0)):
            rowString += "w"
        elif (tuple(pixel) == (163, 73, 164)):
            rowString += "v"
        elif (tuple(pixel) == (34, 177, 76)):
            rowString += "h"
        elif (tuple(pixel) == (255, 127, 39)):
            rowString += "o"
        elif (tuple(pixel) == (255, 174, 201)):
            rowString += "p"
        elif (tuple(pixel) == (0, 0, 0)):
            rowString += "a"
    rowString += "\","
    print(rowString)
    rowString = "\""
rowString = "];"
print(rowString)
print(count)