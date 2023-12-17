import { images, timer } from "../../globals.js";
import Sprite from "../../../lib/Sprite.js";
import Vector from "../../../lib/Vector.js";
import ImageName from "../../enums/ImageName.js";
import Tile from "../../services/Tile.js";
import Crop from "./Crop.js";
import ItemFactory from "../../services/Factories/ItemFactory.js";
import ItemType from "../../enums/ItemType.js";

export default class LettuceCrop extends Crop {
    static TOTAL_GROW_TIME = 10
    static SPRITE_START = 48
    constructor(position) {
        super(position);
        this.sprites = this.initSprites();
        this.isGrowing = false;
        this.offset = new Vector(0, 0)
        this.isHarvestable = false;
    }

    initSprites() {
        let sprites = Sprite.generateSpritesFromSpriteSheet(images.get(ImageName.Crops), Tile.SIZE, Tile.SIZE)

        return sprites.splice(LettuceCrop.SPRITE_START, Crop.GROW_STATES)
    }

    update(dt) {
        if(this.currentFrame == this.sprites.length - 1) {
            this.isHarvestable = true;
            return
        }

        if(!this.isGrowing) {
            this.isGrowing = true;
            timer.wait(LettuceCrop.TOTAL_GROW_TIME / Crop.GROW_STATES - 1, () => {
                this.currentFrame++;
                this.isGrowing = false;
                this.offset = new Vector(0, -4)
            }) 
        }
        
    }

    harvest() {
        return ItemFactory.CreateInstance(ItemType.Lettuce)
    }

    render() {
        super.render()
    }

}