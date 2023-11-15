import { connectString } from '../../../lib/db'
import mongoose from 'mongoose'
import { USERMODEL } from '../../../lib/Model/useModel'
import { NextResponse } from 'next/server'

export async function PUT(request, content) {
    try {
        let id = content.params.todoid
        console.log(id)

        let body = await request.json()
        let todo = await USERMODEL.findByIdAndUpdate(id, body)


        return NextResponse.json({ message: "Update Data", data: todo })
    }
    catch (e) {
        return NextResponse.json({ error: e })

    }
}

export async function DELETE(request, content) {
    try {
        let id = content.params.todoid
        console.log(id)


        await USERMODEL.findByIdAndDelete(id)


        return NextResponse.json({ message: "delete successfully", })
    }
    catch (e) {
        return NextResponse.json({ error: e })

    }
}