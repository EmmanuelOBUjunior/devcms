import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
  const query = (await searchParams).query

  const post = [{
    _createdAt: 'Yesterday',
    views: 55,
    author: {_id: 1},
    description: 'This is the description of the post',
    image: 'https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3R8ZW58MHx8MHx8fDA%3D',
    category: 'Robots',
    title: 'We Robots',
  }]

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup, <br /> Connect with entrepreneurs</h1>
      <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
      <SearchForm query = {query}/>
    </section>
    <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search results for ${query}`:'All Startups'}
    </p>
    <ul className="mt-7 card_grid">
      {post.length > 0 ? (
        post.map((post:StartupCardType, index:number)=>(<StartupCard/>))
      ):(<p className="no-results">No startup found</p>)}
    </ul>
    </section>
    </>
  );
}
