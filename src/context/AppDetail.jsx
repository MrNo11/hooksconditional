import { useContext } from "react";

export default function AppDetail(){
    const nilai = useContext(AppContext);
    return (
        <>
            <p>Nama: {nilai.nama}</p>
            <p>Umur: {nilai.umur}</p>
        </>
    );
}