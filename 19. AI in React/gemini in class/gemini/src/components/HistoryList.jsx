import React from 'react'

export default function HistoryList() {
    return (
        <ul>
            {history.map((data, index) => (
                <div key={index}>
                    <strong>{data.role === "user" ? "User" : "AI"}</strong> {data.parts[0].text}
                </div>
            ))}
        </ul>
    )
}
