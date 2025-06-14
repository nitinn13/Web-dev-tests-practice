
export default async function Room({ params }: any) {
    const roomId = (await params).roomId;
    return <div
        style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding : "100px"
        }}
    >
        <div>
            Room {roomId}
        </div>
        <div>
            <input type="text"  style={{

            }}/>
        </div>
    </div>;
}