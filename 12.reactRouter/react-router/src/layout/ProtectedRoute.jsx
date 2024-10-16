import React from 'react'

export default function ProtectedRoute() {
    //use effect
    // melakukan pengecekan dengan database apakah username dan pssword benar
    const result = true;
    return (
        <div>{result ? <Outlet/> : redirect}</div>
    )
}
