import Cookies from "js-cookie"
export default async function AddTofavori({idFav}:{idFav:string}){
    const token = Cookies.get("token");
    try {
        const res = await fetch(`http://localhost:5000/api/properties/${idFav}/favorite`,{
            method:"POST",
            headers:{ Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,}
        })
        const result = await res.json()
        MyFav()
        return result
    } catch (error) {
        
    }
} 
export async function MyFav(){
    const token = Cookies.get("token");
    const idUser = Cookies.get("uid");
    try {
        const res = await fetch(`http://localhost:5000/api/users/${idUser}/favorites`,{
            method:"GET",
            headers:{ Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,}
        })
        if (!res.ok) {
      const errText = await res.text();
      throw new Error(`MyFav failed: ${res.status} ${errText}`);
    }
    const result = await res.json()
    Cookies.set("fav", JSON.stringify(result));
    localStorage.setItem("fav",JSON.stringify(result))
        return result
    } catch (error) {
        
    }
}