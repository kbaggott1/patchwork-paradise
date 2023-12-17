import { images } from "../../globals.js";
import Sprite from "../../../lib/Sprite.js";
import Vector from "../../../lib/Vector.js";
import ImageName from "../../enums/ImageName.js";
import Tile from "../../services/Tile.js";
import GameObject from "../GameObject.js";
import ItemCarrySprite from "../../enums/ItemCarrySprite.js";

export default class Diamond extends GameObject {
    constructor() {
        super(new Vector(Tile.SIZE, Tile.SIZE), new Vector(0,0));
        this.sprite = Sprite.generateSpritesFromSpriteSheet(images.get(ImageName.CropsCarry), Tile.SIZE, Tile.SIZE)[ItemCarrySprite.Diamond];
        this.name = "Diamond";
        this.price = 100;
    }

    render(positionX, positionY) {
        this.sprite.render(positionX, positionY)
    }
}