
import  {useState} from "react"
function FuntionComponentExample() {
    const [status, setStatus] = useState("Đang đi học");
    // useState => ["Đang đi học", function()]
    function changeStatus() {
        setStatus(status === "Đang đi học" ? "Đã nghỉ học" : "Đang đi học");
    }
    return (
        <>
            <h2>{status}</h2>
            <button onClick={changeStatus}>Click</button>
        </>
    )
}
export default FuntionComponentExample;