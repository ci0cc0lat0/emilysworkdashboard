export async function GET(req){
  const searchParams = req.nextUrl.searchParams
  const sort = searchParams.get('sort')

  let api_url = `http://${process.env.API_IP}/api/todo-lists?sort=createdAt:${sort}`

  try{
    const resp = await fetch(api_url)
    const data = await resp.json()
    return Response.json({data})
  }
  catch(e){
    return Response.json({error:`I am the error; ${e}`})
  }
}