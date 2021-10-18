import React from 'react'

interface BoxInfoCardTypes {
    name: string;
}

export default function BoxInfoCard({ name }: BoxInfoCardTypes) {
    return (
        <div className="reservation-card-container">
            {name}
        </div>
    )
}
