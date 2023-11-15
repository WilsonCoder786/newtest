import { connectString } from '../../lib/db'
import mongoose from 'mongoose'
import { USERMODEL } from '../../lib/Model/useModel'

import { NextResponse } from 'next/server'

export async function GET() {
    await mongoose.connect(connectString).then((val) => {
        console.log("connect")
    })
    var users = await USERMODEL.find({})
    return NextResponse.json({ message: "test", data: users })

}

export async function POST(request, context) {
    await mongoose.connect(connectString).then((val) => {
        console.log("connect")
    })
    var body = await request.json()
    let res = USERMODEL(body)
    await res.save()

    return NextResponse.json({ message: "Addd", data: body })
}



// export async function POST(req,next){

// }