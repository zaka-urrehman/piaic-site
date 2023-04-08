interface cardDetails {
    "quarterNum"?: number,
    "title"?: string,
    "description"?: string,


}


export default function SmallCard(props: cardDetails) {
    const { quarterNum, title, description } = props
    return (
        <section>

            <div className="gradient2 h-80 w-64 sm:w-72 p-4 rounded-lg mx-auto relative my-8 shadow-lg drop-shadow-lg">
                <h3 className="font-bold text-4xl text-center mt-16 text-cyan-700">
                    Quarter: {quarterNum}

                </h3>
                <h3 className="font-bold text-[150px] absolute -top-4  opacity-10">
                    {quarterNum}

                </h3>

                <h5 className="font-semibold text-center text-xl mx-8 mt-12 text-slate-100">
                    {description}

                </h5>

            </div>
        </section>
    )
}