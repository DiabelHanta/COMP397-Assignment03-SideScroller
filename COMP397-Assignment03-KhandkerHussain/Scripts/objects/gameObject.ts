module objects
{
    //GAME OBJECT CLASS
    export class GameObject extends createjs.Sprite
    {
        //PROTECTED INSTANCE VARIABLES
        protected _width: number;
        protected _height: number;
        protected _isColliding: boolean;
        protected _name: string;

        //CONSTRUCTOR
        constructor(imageString:string)
        {
            super(atlas, imageString);

            this._name = imageString;
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            this.regX = this._width * 0.5;
            this.regY = this._height * 0.5;
            this._isColliding = false;
        }

        //UTILITY METHOD TO GET CURRENT POSITION
        public getPosition():createjs.Point
        {
            var position: createjs.Point = new createjs.Point(this.x, this.y);
            return position;
        }

        //UTILITY METHOD TO GET HALF HEIGHT OF OBJECT
        public getHalfHeight(): number
        {
            return this._height * 0.5; //returning half of the totla height
        }

        //GETTER METHOD TO CHECK COLLISION FLAG OF OBJECT
        public getIsColliding(): boolean
        {
            return this._isColliding;
        }

        //SETTER METHOD TO SET COLLISION FLAG OF OBJECT - TRUE OR FALSE
        public setIsColliding(isColliding:boolean)
        {
            this._isColliding = isColliding;
        }

        //GETTER METHOD TO CHECK NAME OF OBJECT (TAG NAME)
        public getName(): string {
            return this._name;
        }
    }
}