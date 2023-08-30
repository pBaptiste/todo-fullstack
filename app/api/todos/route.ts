import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    const supabase = createRouteHandlerClient({ cookies })
    const { data } = await supabase.from('todo').select()
    return NextResponse.json(data)
}

export async function POST(request: Request) {
    const supabase = createRouteHandlerClient({ cookies })
    const { text, isComplete } = await request.json()

    const { data } = await supabase.from('todo').insert({ text, isComplete })

    return NextResponse.json(data)
}

export async function DELETE(request: Request) {
    const supabase = createRouteHandlerClient({ cookies })
    const { id } = await request.json()

    const { data } = await supabase.from('todo').delete().match({ id })

    return NextResponse.json(data)
}

export async function PUT(request: Request) {
    const supabase = createRouteHandlerClient({ cookies })
    const { id, completed } = await request.json()

    const { data } = await supabase.from('todo').update({ isComplete: completed }).match({ id })

    return NextResponse.json(data)
}