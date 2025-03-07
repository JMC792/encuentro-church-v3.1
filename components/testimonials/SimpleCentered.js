export default function Example(props) {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            
            {/* Background */}
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            
            {/* Text Wrapper */}
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                
                {/* Logo */}
                {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
                
                <figure className="mt-10">

                    {/* Paragraph */}
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                        My experience with Encuentro Church has been truly uplifting. They have provided me with spiritual guidance, a welcoming community, and a deepened connection with my faith. Through heartfelt worship, biblical teaching, and genuine fellowship, I have found a place to grow and serve with purpose.
                        </p>
                    </blockquote>

                    {/* Text Wrapper */}
                    <figcaption className="mt-10">
                        
                        {/* Logo */}
                        <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>

                        {/* Name & Position */}
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            
                            {/* Name */}
                            <div className="font-semibold text-gray-900">Emily Sanchez</div>

                            {/* Bullet */}
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1} />
                            </svg>

                            {/* Position */}
                            <div className="text-gray-600">
                                {props.position}
                            </div>

                        </div>
                    </figcaption>

                </figure>
            </div>
        </section>
    )
}