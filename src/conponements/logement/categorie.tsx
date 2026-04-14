export default function Categorie({categorie}:{categorie:string[]}){
    return(
<div className="flex flex-col gap-4 w-79">
                    <h3>Catégorie</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {categorie.map((tag, idx) => (<p className="bg-[#F5F5F5] text-[#565656] text-[12px] h-8 px-2 py-4 flex items-center justify-center" key={idx}>{tag}</p>))}
                    </div>
                </div>
    )
}