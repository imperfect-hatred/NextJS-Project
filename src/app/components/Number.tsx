interface NumberProps {
    num: number
}

export default function Number({num}:NumberProps){

    const formNum = num < 10 ? `0${num}` : num;

    return(
        <div className="bg-[#2A2D51] text-xl px-2.5 py-3 w-12 h-12 flex items-center justify-center rounded-lg">
            {formNum}
        </div>
    )
}