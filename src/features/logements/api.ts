export async function FetchLogements() {
    try {
        const response = await fetch("https://p5opc-xvcz.vercel.app/api/properties", {
            method: "GET",
            headers: {
                Accept: "application/json",
            }
        }
        )
        const res: Promise<PropertyBase | undefined> = await response.json()
        return res
    } catch (error: any) {

    }
}



export async function FetchLogementDetail({ ids }: { ids: string }) {
    try {
        const response = await fetch(`https://p5opc-xvcz.vercel.app/api/properties/${ids}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            }
        }
        )
        const res: Promise<PropertyDetail | undefined> = await response.json()
        return res
    } catch (error: any) {

    }
}