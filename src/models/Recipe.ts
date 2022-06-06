export class recipe{
    constructor(public IdRecipe:number,public NameRecipe:string,public IdCategory:number,
        public PreparationTime:number,public Difficulty:number,public DateAddRecipe:Date,public ListOfComponents:Array<string>,public Preparation:Array<string>,public IdUser:number,public ImgRecipe:string,public IsShowRecipe:boolean){}
}