import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json([
        {
            id: 1,
            name: 'Cirla App',
            type: 'Mobile',
            status: 'Warning',
        },
        {
            id: 2,
            name: 'Web Sales Plant',
            type: 'Website',
            status: 'Active',
        },
        {
            id: 3,
            name: 'Admin Dashboard',
            type: 'Web App',
            status: 'Critical',
        },
    ]);
}