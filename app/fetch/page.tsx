
async function Fetching() {
    const response  = await fetch('https://jsonplaceholder.typicode.com/albums')
    if(!response) throw new Error('Failed to fetch data')

    const albums = await response.json()
    console.log(albums)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
      {albums.map((album:any, albumIndex:number)=>{
        return(
            <div key={albumIndex} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2">{album.title}</h3>
                <h3 className="text-lg font-bold mb-2">Album ID: {album.id}</h3>
            </div>
        )
    }
        )
      }
    </div>
  )
}

export default Fetching
