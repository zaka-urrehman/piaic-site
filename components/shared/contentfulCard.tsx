import Image from "next/image";
import Link from "next/link";


async function getCards() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=card`, { cache: 'no-store' });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}





export default async function Cards() {
  const cards = await getCards()
  


  return (
    <div className="lg:flex gap-6 lg:flex-wrap lg:justify-center">
      {
        cards.items.map((item: any) => (
          <div key={item.sys.id}>
            <div className="flex mt-10 items-center justify-center  ">
              <div className="group  h-96 w-80  [perspective:1000px]">
                <div className="relative h-full w-full rouded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 ">
                    <h2 className="font-bold text-2xl absolute  gradient text-white p-2 rounded-xl">{item.fields.title}</h2>

                    <div> {cards.includes.Asset.map((a: any) => (
                      <div key={item.fields.cardImage.sys.id}>
                        {item.fields.cardImage.sys.id == a.sys.id ?
                          <Image src={"https:" + a.fields.file.url}  alt="image" height={"1000"} width="1000" className="h-96 w-full rounded-xl object-cover shadow-xl shadow-black/40" /> : <div></div>}
                      </div>
                    ))}

                    
                    </div>
                  </div>

                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold">{item.fields.title}</h1>
                      <p className="text-lg mt-2"></p>
                      <p className="text-base mt-2">{item.fields.shortDescription}</p>
                           
                      
                      <Link href={'/course-details/' + item.fields.slug}>
                      <button  className="mt-4 rounded-md link text-sm">Learn More</button>
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        ))}
    </div>

  )
}
