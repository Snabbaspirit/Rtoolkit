import React from 'react'
import { useDispatch } from 'react-redux'
import { removeBoxInfo } from "../features/boxInfoSlice";
interface BoxInfoCardTypes {
    name: string;
    idx: number;
}

export default function BoxInfoCard({ name, idx }: BoxInfoCardTypes) {
    const dispatch = useDispatch()
    return (
        <div
        className="reservation-card-container"
        onClick={() => dispatch(removeBoxInfo(idx))}
        >
            {name}
        </div>
    )
}
